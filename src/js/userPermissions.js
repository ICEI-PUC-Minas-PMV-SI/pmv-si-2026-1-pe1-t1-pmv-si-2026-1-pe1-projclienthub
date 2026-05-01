//RF 04 Listar Usuarios - login e usuarios registrados




//RF 04 Cadastrar Usuarios - criar conta e definir tipo de usuario

const formDados = document.querySelector("form");
const formSenha = document.getElementsByName("confirmacao");
const registroUsers = JSON.stringify

formDados.addEventListener("submit", (event) => {
    event.preventDefault(); // Pagina nao recarrega

    let nomeForm = formDados.name;

    if(nomeForm == "cadastro"){
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        localStorage.setItem("dadosUsers", JSON.stringify(value));
        window.location.href = "contaSenha.html";
    }

    if(nomeForm == "confirmacao"){
        const data = new FormData(event.target);
        const senhaData = Object.fromEntries(data.entries());
        const dadosUsers = JSON.parse(localStorage.getItem("dadosUsers"));

    if (dadosUsers){
        const userLogin = {...dadosUsers, ...senhaData}
        let listaUsuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
        listaUsuarios.push(userLogin);

        localStorage.setItem("usuariosRegistrados", JSON.stringify(listaUsuarios));
        localStorage.removeItem("dadosUsers");
        window.location.href = "confirmacaoContaCriada.html";
    }
    } 
});







// RF 04 Editar usuarios - editar os usuarios que ja estao cadsatrados




// RF 05 - Definir perfis de acesso e bloquear areas nao autorizadas
// 1- Admin, 2- Gerente, 3- Analista e 4- Operador








// RF 06 Restringir exibicao de dados sensiveis conforme perfil - checar id do perfil e mostrar itens se tiver aprovacao



