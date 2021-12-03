function validacao(nomeProd, codProd, qtdProd) {
    padraoNome = /^[A-Za-z0-9]{0,25}$/;
    padraoCod = /^[A-Za-z]{2}-\d{5,10}$/;
    nome = document.getElementById(nomeProd).value;
    codigo = document.getElementById(codProd).value;
    quantidade = document.getElementById(qtdProd).value;

    if (nome == '')
        alert('Campo vazio! Preencher todos os campos!');
    else
        if (codProd == '')
            alert('Campo vazio! Preencher todos os campos!');
        else
            if (padraoNome.test(nome) && padraoCod.test(codigo)) {
                cadastraProduto(nome, codigo, parseInt(quantidade));
            }
            else
                alert("Campos inválidos");
}
function cadastraProduto(produto, cod, quantidade) {
    newProd = { nome: produto, codigo: cod, qtd: quantidade };
    produtos = localStorage.getItem("produtos");
    if (produtos == null)
        produtos = [];
    else
        produtos = JSON.parse(produtos);
        produtos.push(newProd);
        result = confirm("Deseja cadastrar as informações deste produto?");
    if (result) {
        localStorage.setItem("produtos", JSON.stringify(produtos));
        alert("Dados cadastrados com sucesso");
        location.reload();
        atualizaEstoque("estoque");
    }
}

function atualizaEstoque(Item) {
    localStorage.setItem("estoque", ++document.getElementById(Item).innerHTML);
}
function carregaEstoque(Item) {
    estoque = localStorage.getItem("estoque");
    if (estoque == null)
        estoque = 0;
    document.getElementById(Item).innerHTML = estoque;
}
function listaEstoque() {
    produtos = localStorage.getItem("produtos");
    if (produtos == null)
        document.write("<h3>Ainda não há nenhum item no estoque</h3>");
    else {
        produtos = JSON.parse(produtos);
        produtos.forEach(produto => {
            document.write("<h2>Item: " + produto.nome + "</h2>");
            document.write("<ul>");
            document.write("<li>Código do produto: " + produto.codigo + "</li>");
            document.write("<li>Quantidade de produto: " + produto.qtd + "</li>");
            document.write("</ul>");
        })
    }
}