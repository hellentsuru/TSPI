function entrar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var confSenha = document.getElementById("confirmacao").value;

    if(login == ''){
        alert(`O login não foi informado. Digite o login!`);
    }else if(senha == confSenha){
        alert(`Dados digitados corretamente!`)
    }else{
        document.getElementById("senha").value='';
        document.getElementById("confirmacao").value='';
        alert(`As senhas não correspondem!`)
    }
}

function limpar(){
    document.getElementById("login").value = '';
    document.getElementById("senha").value = '';
    document.getElementById("confirmacao").value = '';
}

document.write(`<div class="container">`);
document.write(`<table><tr><td>`);
document.write(`<h1>Acesso ao sistema</h1></td></tr>`);
document.write(`<form><tr><td>`);
document.write(`<label for="login" class="align">Login</label>`);
document.write(`<input type="text" id="login"></td></tr>`);

document.write(`<tr><td><label for="senha" class="align">Senha</label>`);
document.write(`<input type="password" maxlength="8" id="senha"><span> (máx. 8 caracteres)</span></td></tr>`);

document.write(`<tr><td><label for="confirmacao">Confirmar senha</label>`);
document.write(`<input type="password" maxlength="8" id="confirmacao"><span> (máx. 8 caracteres)</span></td></tr>`);

document.write(`<tr class="botoes"><td><input type="button" value="Entrar" onclick="entrar()">`);
document.write(`<span class="espaco"><input type="button" value="Limpar" onclick="limpar()"></span></tr></td>`);
document.write(`<form>`);
document.write(`</div>`);