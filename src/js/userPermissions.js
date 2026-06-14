//RF 04 Cadastrar Usuarios - criar conta e definir tipo de usuario

const formDados = document.querySelector("form");
var listaUsuarios = JSON.parse(localStorage.getItem("usuariosRegistrados"))

formDados.addEventListener("submit", (event) => {
    event.preventDefault(); // Pagina nao recarrega
    let nomeForm = formDados.name;

    if (nomeForm == "cadastro"){
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        localStorage.setItem("dadosUsers", JSON.stringify(value));
        window.location.href = "contaSenha.html";
    }

    if (nomeForm == "confirmacao"){
        const data = new FormData(event.target);
        const senhaData = Object.fromEntries(data.entries());
        const dadosUsers = JSON.parse(localStorage.getItem("dadosUsers"));

        if (dadosUsers){
            const userLogin = { ...dadosUsers, ...senhaData }
            listaUsuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
            listaUsuarios.push(userLogin);
            localStorage.setItem("usuariosRegistrados", JSON.stringify(listaUsuarios));
            localStorage.removeItem("dadosUsers");
            window.location.href = "confirmacaoContaCriada.html";
        }
    }
});

// RF 01 - Login e autenticacao do usuario
const formLogin = document.getElementById('userLogin');

formLogin.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const login = document.getElementById('user').value;
    const senha = document.getElementById('senha').value;
    let usuarioEncontrado = false;

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (login === listaUsuarios[i].email && senha === listaUsuarios[i].password) {
            alert('Bem-vindo ao Client Hub!');
            location.href = "dashboard.html";
            usuarioEncontrado = true;
            break; // Sai do loop após encontrar o usuário
        }
    }

    if (!usuarioEncontrado) {
        alert('Falha na senha ou login');
    }
});

// Exibir nome usuario e email enquanto logado

function nomeUser() {
    var nomeUsuario = document.getElementById("username");
    var emailUsuario = document.getElementById("usermail");

    if (listaUsuarios && listaUsuarios.length > 0) {
        nomeUsuario.innerText = listaUsuarios[0].nome;
        emailUsuario.innerText = listaUsuarios[0].email;
    } else {
        nomeUsuario.innerText = "Usuário não encontrado";
        emailUsuario.innerText = "";
    }
}

window.onload = nomeUser;