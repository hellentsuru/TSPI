function listar(){
    tabCadastro = JSON.parse(localStorage.getItem("tabCadastro"));
    if(!tabCadastro) document.write("Não há usuários cadastrados!");
    else{
        document.write(`<table border=1>`);
            document.write(`<tr>`);  
                document.write(`<td>Nome</td>`);  
                document.write(`<td>R.A</td>`); 
                document.write(`<td>Nota(1ºbim)</td>`); 
                document.write(`<td>Nota(2ºbim)</td>`); 
                document.write(`<td>Total</td>`); 
                document.write(`<td>Situação</td>`); 
            document.write(`</tr>`);  

            for(i=0; i<tabCadastro.usuarios.length; i++){
                
                document.write(`<tr>`); 
                    document.write(`<td>${tabCadastro.usuarios[i].nome}</td>`);
                    document.write(`<td>${tabCadastro.usuarios[i].mat}</td>`);
                    document.write(`<td>${tabCadastro.usuarios[i].nota1Bim.toFixed(1)}</td>`);
                    document.write(`<td>${tabCadastro.usuarios[i].nota2Bim.toFixed(1)}</td>`);
                    document.write(`<td>${tabCadastro.usuarios[i].soma.toFixed(1)}</td>`);
                    document.write(`<td>${tabCadastro.usuarios[i].situ}</td>`);
                document.write(`</tr>`); 
            }
        document.write(`</table>`);
        document.write(`</div>`);
    }
}