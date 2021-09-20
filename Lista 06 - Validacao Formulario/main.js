function validar(){
    
        inputs = document.getElementsByTagName("input");
        for(i = 0; i < inputs.length; i++){
            if((inputs[i].type == "text") && (inputs[i].value == '')){
                alert(`${inputs[i].name} está vazio! Digite os campos!`);
                break;
            }
        }

        if(document.form1.sexo[0].checked == false && document.form1.sexo[1].checked == false){
            alert('Por favor, selecione o sexo.');
        }else if(document.form1.genero.options[genero.selectedIndex].value == ""){
            alert(`Selecione um gênero!`);
        }
        
}