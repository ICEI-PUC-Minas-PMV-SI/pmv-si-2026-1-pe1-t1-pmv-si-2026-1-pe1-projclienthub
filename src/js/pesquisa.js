const SEARCH_HISTORY_KEY = "clienthub-search-history";
const SELECTED_CLIENT_KEY = "clienthub-selected-client";
const PAGE_SIZE = 10;

const state = {
  clients: [],
  filteredClients: [],
  currentPage: 1,
  sortKey: "nome",
  sortDirection: "asc",
  query: "",
  selectedClientId: null,
};

const elements = {
  searchInput: document.getElementById("client-search"),
  suggestions: document.getElementById("search-suggestions"),
  confirmation: document.getElementById("search-confirmation"),
  history: document.getElementById("search-history"),
  tableBody: document.getElementById("clients-table-body"),
  resultsSummary: document.getElementById("results-summary"),
  pageIndicator: document.getElementById("page-indicator"),
  prevPage: document.getElementById("prev-page"),
  nextPage: document.getElementById("next-page"),
  sortButtons: Array.from(document.querySelectorAll(".sort-button")),
};

initPesquisa();

function initPesquisa() {
  bindEvents();
  loadClients();
  renderHistory();
  syncSortButtons();
}

function bindEvents() {
  elements.searchInput.addEventListener("input", handleSearchInput);
  elements.prevPage.addEventListener("click", () => changePage(-1));
  elements.nextPage.addEventListener("click", () => changePage(1));

  elements.sortButtons.forEach((button) => {
    button.addEventListener("click", () => handleSort(button.dataset.sortKey));
  });
}

function loadClients() {
  fetch("./js/database_CH.json")
    .then((response) => response.json())
    .then((data) => {
      state.clients = data.map((client, index) => normalizeClient(client, index));
      applyFilters();
    })
    .catch(() => {
      elements.resultsSummary.textContent = "Nao foi possivel carregar os clientes.";
      elements.history.innerHTML = "<span>Historico indisponivel.</span>";
    });
}

function normalizeClient(client, index) {
  const internalId = `CH${String(index + 1).padStart(4, "0")}`;
  const documento = client.cpf || client.cnpj || "-";

  return {
    ...client,
    internalId,
    documento,
    nome: client.nome || "",
    cidade: client.cidade || "-",
    perfil_investidor: client.perfil_investidor || "-",
    score: Number.isFinite(client.score) ? client.score : Number(client.score) || 0,
    adimplencia: client.adimplencia || "-",
  };
}

function handleSearchInput(event) {
  state.query = event.target.value.trim();
  state.currentPage = 1;
  applyFilters();
  renderSuggestions();
  autoSelectExactMatch();
}

function applyFilters() {
  const normalizedQuery = normalizeText(state.query);
  const normalizedNumericQuery = onlyDigits(state.query);

  state.filteredClients = state.clients.filter((client) => {
    if (!normalizedQuery) {
      return true;
    }

    const fieldsToMatch = [
      normalizeText(client.nome),
      normalizeText(client.internalId),
      normalizeText(client.documento),
      normalizeText(client.cidade),
      normalizeText(client.perfil_investidor),
      normalizeText(client.adimplencia),
      String(client.score),
    ];

    const textualMatch = fieldsToMatch.some((field) => field.includes(normalizedQuery));
    const numericMatch = normalizedNumericQuery
      ? onlyDigits(client.documento).includes(normalizedNumericQuery) ||
        onlyDigits(client.internalId).includes(normalizedNumericQuery)
      : false;

    return textualMatch || numericMatch;
  });

  sortClients();
  renderTable();
  renderPagination();
  renderSummary();
}

function sortClients() {
  const direction = state.sortDirection === "asc" ? 1 : -1;

  state.filteredClients.sort((left, right) => {
    const leftValue = getSortableValue(left, state.sortKey);
    const rightValue = getSortableValue(right, state.sortKey);

    if (typeof leftValue === "number" && typeof rightValue === "number") {
      return (leftValue - rightValue) * direction;
    }

    return String(leftValue).localeCompare(String(rightValue), "pt-BR") * direction;
  });
}

function getSortableValue(client, key) {
  if (key === "documento") {
    return onlyDigits(client.documento);
  }

  if (key === "score") {
    return client.score;
  }

  return normalizeText(client[key] || "");
}

function renderSuggestions() {
  if (state.query.length < 2) {
    elements.suggestions.innerHTML = "";
    return;
  }

  const topSuggestions = state.filteredClients.slice(0, 5);

  if (!topSuggestions.length) {
    elements.suggestions.innerHTML = '<div class="empty-state">Nenhuma sugestao encontrada.</div>';
    return;
  }

  elements.suggestions.innerHTML = topSuggestions
    .map(
      (client) => `
        <button type="button" class="suggestion-item" data-client-id="${client.internalId}">
          ${client.nome}
          <small>${client.internalId} | ${client.documento}</small>
        </button>
      `
    )
    .join("");

  Array.from(elements.suggestions.querySelectorAll(".suggestion-item")).forEach((button) => {
    button.addEventListener("click", () => selectClientById(button.dataset.clientId));
  });
}

function autoSelectExactMatch() {
  if (!state.query) {
    clearConfirmation();
    return;
  }

  const normalizedQuery = normalizeText(state.query);
  const numericQuery = onlyDigits(state.query);

  const exactMatch = state.clients.find((client) => {
    return (
      normalizeText(client.internalId) === normalizedQuery ||
      normalizeText(client.documento) === normalizedQuery ||
      onlyDigits(client.documento) === numericQuery
    );
  });

  if (exactMatch) {
    selectClient(exactMatch, false);
  } else if (
    state.selectedClientId &&
    !state.filteredClients.some((client) => client.internalId === state.selectedClientId)
  ) {
    clearConfirmation();
  }
}

function renderTable() {
  if (!state.filteredClients.length) {
    elements.tableBody.innerHTML = `
      <tr>
        <td colspan="8" class="empty-state">Nenhum cliente encontrado para os filtros informados.</td>
      </tr>
    `;
    return;
  }

  const pageItems = getCurrentPageItems();

  elements.tableBody.innerHTML = pageItems
    .map(
      (client) => `
        <tr>
          <td>${client.internalId}</td>
          <td>${client.nome}</td>
          <td>${client.documento}</td>
          <td>${client.cidade}</td>
          <td>${client.perfil_investidor}</td>
          <td>${client.score}</td>
          <td>${client.adimplencia}</td>
          <td>
            <button type="button" class="row-action-button" data-client-id="${client.internalId}">
              Ver perfil
            </button>
          </td>
        </tr>
      `
    )
    .join("");

  Array.from(elements.tableBody.querySelectorAll(".row-action-button")).forEach((button) => {
    button.addEventListener("click", () => selectClientById(button.dataset.clientId, true));
  });
}

function renderSummary() {
  const total = state.filteredClients.length;
  const totalBase = state.clients.length;
  const queryLabel = state.query ? ` para "${state.query}"` : "";
  elements.resultsSummary.textContent = `${total} registro(s) encontrado(s)${queryLabel}. Total base: ${totalBase}.`;
}

function renderPagination() {
  const totalPages = Math.max(1, Math.ceil(state.filteredClients.length / PAGE_SIZE));
  state.currentPage = Math.min(state.currentPage, totalPages);

  elements.pageIndicator.textContent = `Pagina ${state.currentPage} de ${totalPages}`;
  elements.prevPage.disabled = state.currentPage === 1;
  elements.nextPage.disabled = state.currentPage === totalPages;
}

function changePage(step) {
  const totalPages = Math.max(1, Math.ceil(state.filteredClients.length / PAGE_SIZE));
  const nextPage = state.currentPage + step;

  if (nextPage < 1 || nextPage > totalPages) {
    return;
  }

  state.currentPage = nextPage;
  renderTable();
  renderPagination();
}

function handleSort(sortKey) {
  if (state.sortKey === sortKey) {
    state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
  } else {
    state.sortKey = sortKey;
    state.sortDirection = "asc";
  }

  syncSortButtons();
  applyFilters();
}

function syncSortButtons() {
  elements.sortButtons.forEach((button) => {
    const isActive = button.dataset.sortKey === state.sortKey;
    button.classList.toggle("is-active", isActive);
    button.textContent = buildSortLabel(button.dataset.sortKey, isActive);
  });
}

function buildSortLabel(sortKey, isActive) {
  const labels = {
    internalId: "ID",
    nome: "Nome",
    documento: "CPF/CNPJ",
    cidade: "Cidade",
    perfil_investidor: "Perfil",
    score: "Score",
    adimplencia: "Status",
  };

  if (!isActive) {
    return labels[sortKey];
  }

  return `${labels[sortKey]} ${state.sortDirection === "asc" ? "(ASC)" : "(DESC)"}`;
}

function getCurrentPageItems() {
  const start = (state.currentPage - 1) * PAGE_SIZE;
  return state.filteredClients.slice(start, start + PAGE_SIZE);
}

function selectClientById(clientId, redirectToProfile = false) {
  const client = state.clients.find((item) => item.internalId === clientId);

  if (!client) {
    return;
  }

  selectClient(client, redirectToProfile);
}

function selectClient(client, redirectToProfile = false) {
  state.selectedClientId = client.internalId;
  persistSelectedClient(client);
  saveHistoryEntry(client);
  elements.searchInput.value = client.nome;
  elements.suggestions.innerHTML = "";

  elements.confirmation.hidden = false;
  elements.confirmation.innerHTML = `
    <span>Cliente selecionado para confirmacao</span>
    <strong>${client.nome}</strong>
    <span>${client.internalId} | ${client.documento}</span>
  `;

  renderHistory();

  if (redirectToProfile) {
    window.location.href = "perfilCliente.html";
  }
}

function clearConfirmation() {
  state.selectedClientId = null;
  elements.confirmation.hidden = true;
  elements.confirmation.innerHTML = "";
}

function persistSelectedClient(client) {
  localStorage.setItem(SELECTED_CLIENT_KEY, JSON.stringify(client));
}

function saveHistoryEntry(client) {
  const history = getHistory();
  const nextHistory = [
    {
      internalId: client.internalId,
      nome: client.nome,
      documento: client.documento,
    },
    ...history.filter((item) => item.internalId !== client.internalId),
  ].slice(0, 5);

  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(nextHistory));
}

function renderHistory() {
  const history = getHistory();

  if (!history.length) {
    elements.history.innerHTML = "<span>Nenhuma busca registrada.</span>";
    return;
  }

  elements.history.innerHTML = history
    .map(
      (item) => `
        <button type="button" class="history-action-button" data-client-id="${item.internalId}">
          ${item.nome} | ${item.internalId} | ${item.documento}
        </button>
      `
    )
    .join("");

  Array.from(elements.history.querySelectorAll(".history-action-button")).forEach((button) => {
    button.addEventListener("click", () => selectClientById(button.dataset.clientId, true));
  });
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}
