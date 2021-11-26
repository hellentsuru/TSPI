function validar(exercicio) {
    switch (exercicio) {
        case "A":
            padrao = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/(\d{2}|\d{4})$/;
            idExe = "A";
            break;

        case "B":
            padrao = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
            idExe = "B";
            break;

        case "C":
            padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-\w{2}$/;
            idExe = "C";
            break;

        case "D":
            padrao = /^[Mm][Tt]-\d{2}.\d{3}-[Ii][Ff][Tt][Mm]$/;
            idExe = "D";
            break;

        case "E":
            padrao = /^MT-\d{2}.\d{3}-[Ii][Ff][Tt][Mm]$/;
            idExe = "E";
            break;

        case "F":
            padrao = /^MT-\d{2}.\d{3}-[Ii]\s[Ff]\s[Tt]\s[Mm]$/;
            idExe = "F";
            break;

        case "G":
            padrao = /^[Mm]\s?[Tt]-\d{2}.\d{3}-[Ii]\s?[Ff]\s?[Tt]\s?[Mm] (Uberlândia Centro|Uberlândia)$/;
            idExe = "G";
            break;

        case "H":
            padrao = /^(IFTM campus Uberlândia Centro|IFTM campus Uberlândia)$/;
            idExe = "H";
            break;

        case "I":
            padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
            idExe = "I";
            break;
    }

    valor = document.getElementById(idExe).value;
    if (padrao.test(valor))
        alert("Válido");
    else
        alert("Inválido");
}