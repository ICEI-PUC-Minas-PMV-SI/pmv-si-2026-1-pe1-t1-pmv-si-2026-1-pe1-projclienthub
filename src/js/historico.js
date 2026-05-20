const SEARCH_HISTORY_KEY = "clienthub-search-history";
const SELECTED_CLIENT_KEY = "clienthub-selected-client";

const historicoState = {
  clients: [],
  query: "",
  selectedClientId: null,
};

const historicoElements = {
  searchInput: document.getElementById("client-search"),
  suggestions: document.getElementById("search-suggestions"),
  confirmation: document.getElementById("search-confirmation"),
  history: document.getElementById("search-history"),
};

initHistorico();

function initHistorico() {
  bindHistoricoEvents();
  loadHistoricoClients();
  renderHistoricoList();
}

function bindHistoricoEvents() {
  historicoElements.searchInput.addEventListener("input", handleHistoricoSearchInput);
}

function loadHistoricoClients() {
  fetch("./js/database_CH.json")
    .then((response) => response.json())
    .then((data) => {
      historicoState.clients = data.map((client, index) => normalizeHistoricoClient(client, index));
    })
    .catch(() => {
      historicoElements.history.innerHTML = "<span>Historico indisponivel.</span>";
    });
}

function normalizeHistoricoClient(client, index) {
  return {
    ...client,
    internalId: `CH${String(index + 1).padStart(4, "0")}`,
    documento: client.cpf || client.cnpj || "-",
    nome: client.nome || "",
  };
}

function handleHistoricoSearchInput(event) {
  historicoState.query = event.target.value.trim();
  renderHistoricoSuggestions();
  autoSelectHistoricoExactMatch();
}

function renderHistoricoSuggestions() {
  if (historicoState.query.length < 2) {
    historicoElements.suggestions.innerHTML = "";
    return;
  }

  const normalizedQuery = normalizeHistoricoText(historicoState.query);
  const numericQuery = onlyHistoricoDigits(historicoState.query);

  const matches = historicoState.clients
    .filter((client) => {
      const textualMatch =
        normalizeHistoricoText(client.nome).includes(normalizedQuery) ||
        normalizeHistoricoText(client.internalId).includes(normalizedQuery) ||
        normalizeHistoricoText(client.documento).includes(normalizedQuery);

      const numericMatch = numericQuery
        ? onlyHistoricoDigits(client.documento).includes(numericQuery) ||
          onlyHistoricoDigits(client.internalId).includes(numericQuery)
        : false;

      return textualMatch || numericMatch;
    })
    .slice(0, 5);

  if (!matches.length) {
    historicoElements.suggestions.innerHTML = '<div class="empty-state">Nenhuma sugestao encontrada.</div>';
    return;
  }

  historicoElements.suggestions.innerHTML = matches
    .map(
      (client) => `
        <button type="button" class="suggestion-item" data-client-id="${client.internalId}">
          ${client.nome}
          <small>${client.internalId} | ${client.documento}</small>
        </button>
      `
    )
    .join("");

  Array.from(historicoElements.suggestions.querySelectorAll(".suggestion-item")).forEach((button) => {
    button.addEventListener("click", () => selectHistoricoClientById(button.dataset.clientId));
  });
}

function autoSelectHistoricoExactMatch() {
  if (!historicoState.query) {
    clearHistoricoConfirmation();
    return;
  }

  const normalizedQuery = normalizeHistoricoText(historicoState.query);
  const numericQuery = onlyHistoricoDigits(historicoState.query);

  const exactMatch = historicoState.clients.find((client) => {
    return (
      normalizeHistoricoText(client.internalId) === normalizedQuery ||
      normalizeHistoricoText(client.documento) === normalizedQuery ||
      onlyHistoricoDigits(client.documento) === numericQuery
    );
  });

  if (exactMatch) {
    selectHistoricoClient(exactMatch);
  }
}

function selectHistoricoClientById(clientId) {
  const client = historicoState.clients.find((item) => item.internalId === clientId);

  if (!client) {
    return;
  }

  selectHistoricoClient(client);
}

function selectHistoricoClient(client) {
  historicoState.selectedClientId = client.internalId;
  historicoElements.searchInput.value = client.nome;
  historicoElements.suggestions.innerHTML = "";
  historicoElements.confirmation.hidden = false;
  historicoElements.confirmation.innerHTML = `
    <span>Cliente selecionado para confirmacao</span>
    <strong>${client.nome}</strong>
    <span>${client.internalId} | ${client.documento}</span>
  `;

  localStorage.setItem(SELECTED_CLIENT_KEY, JSON.stringify(client));
  saveHistoricoEntry(client);
  renderHistoricoList();
}

function clearHistoricoConfirmation() {
  historicoState.selectedClientId = null;
  historicoElements.confirmation.hidden = true;
  historicoElements.confirmation.innerHTML = "";
}

function saveHistoricoEntry(client) {
  const history = getHistoricoEntries();
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

function renderHistoricoList() {
  const history = getHistoricoEntries();

  if (!history.length) {
    historicoElements.history.innerHTML = "<span>Nenhuma busca registrada.</span>";
    return;
  }

  historicoElements.history.innerHTML = history
    .map(
      (item) => `
        <button type="button" class="history-action-button" data-client-id="${item.internalId}">
          ${item.nome} | ${item.internalId} | ${item.documento}
        </button>
      `
    )
    .join("");

  Array.from(historicoElements.history.querySelectorAll(".history-action-button")).forEach((button) => {
    button.addEventListener("click", () => selectHistoricoClientById(button.dataset.clientId));
  });
}

function getHistoricoEntries() {
  try {
    return JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function normalizeHistoricoText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function onlyHistoricoDigits(value) {
  return String(value || "").replace(/\D/g, "");
}
