function submit_adotar(value) {
  var name = document.getElementById("name_id");

  if (name.value != "") {
    if (value == 'voluntario') {
      alert("Obrigado " + name.value + ". Seus dados para ser um voluntario do nosso projeto foram encaminhados com sucesso!");
    } else {
      alert("Obrigado " + name.value + ". Seus dados para adoção foram encaminhados com sucesso!");
    }
  }
  
}
