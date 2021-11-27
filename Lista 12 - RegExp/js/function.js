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

        case "J":
            padrao = /^\(\d{2,3}\)\d{5}-\d{4}$/;
            idExe = "J";
            break;

        case "K":
            padrao = /^(1(\.|,)[3-9]|2(\.|,)[0-5])\d?$/;
            idExe = "K";
            break;

        case "L":
            padrao = /^R\$(\d{0,3})\.?(\d{0,3})\.?(\d{0,3})\.?(\d{0,3})\.?\d{0,3},[0-9][0-9]?$/;
            idExe = "L";
            break;

        case "M":
            padrao = /^(1\d|2[0-3]):[0-5]\d:[0-5]\d:\d\d$/;
            idExe = "M";
            break;

        case "N":
            padrao = /^[\w.-_]{5,}&[a-pA-P]{1,}\.[aeiou]{1,}(\.[A-Za-z0-5]{0,})?-\D{1,},[^\w]{2}\.[^ab01]{1,}$/;
            idExe = "N";
            break;

    }

    valor = document.getElementById(idExe).value;
    if (padrao.test(valor))
        alert("Válido");
    else
        alert("Inválido");
}