function cadastro(){

    nome = document.getElementById("txtNome").value;
    ra = document.getElementById("txtRA").value;
    nota1 = parseFloat(document.getElementById("txtNota1").value);
    nota2 = parseFloat(document.getElementById("txtNota2").value);
    total = nota1 + nota2;
    
    if(nome == "" || ra == "" || isNaN(nota1) || isNaN(nota2)) 
        alert(`Há campos vazios! Digite todos os campos!`);
    else{ 
        if(total >= 60)
            situacao = "Aprovado";
        else
            situacao = "Reprovado";
    
        users = {nome: nome, mat: ra, nota1Bim: nota1, nota2Bim: nota2, soma: total, situ: situacao};

        tabCadastro = JSON.parse(localStorage.getItem("tabCadastro"));

        if(!tabCadastro)
            tabCadastro = {usuarios:[]};
            tabCadastro.usuarios.push(users);

        localStorage.setItem("tabCadastro", JSON.stringify(tabCadastro));
        alert("Cadastro realizado com sucesso!");
    }
}

