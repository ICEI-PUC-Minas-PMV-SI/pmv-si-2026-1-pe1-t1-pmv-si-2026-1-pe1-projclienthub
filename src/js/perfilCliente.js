const selectedClientCard = document.getElementById("selected-client-card");
const selectedClientGrid = document.getElementById("selected-client-grid");
const selectedClientStatus = document.getElementById("selected-client-status");

loadSelectedClient();

function loadSelectedClient() {
  try {
    const storedClient = JSON.parse(localStorage.getItem("clienthub-selected-client"));

    if (!storedClient) {
      return;
    }

    selectedClientStatus.textContent = "Cliente selecionado";
    selectedClientGrid.hidden = false;

    setText("selected-client-name", storedClient.nome || "-");
    setText("selected-client-id", storedClient.internalId || "-");
    setText("selected-client-document", storedClient.documento || "-");
    setText("selected-client-city", storedClient.cidade || "-");
    setText("selected-client-profile", storedClient.perfil_investidor || "-");
    setText("selected-client-status-value", storedClient.adimplencia || "-");
  } catch {
    selectedClientStatus.textContent = "Nao foi possivel carregar o cliente selecionado.";
    selectedClientCard.classList.add("empty-state");
  }
}

function setText(elementId, value) {
  const element = document.getElementById(elementId);

  if (element) {
    element.textContent = value;
  }
}
