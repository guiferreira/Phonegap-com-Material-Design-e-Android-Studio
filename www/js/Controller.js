function form(){
  var nome = $('#nome').val();
  var sobrenome = $('#sobrenome').val();
  var email = $('#email').val();  
  var senha = $('#senha').val();
  
  var msg = "";
  $('.msg').html("");
  $('.msg').addClass("hide");
  

  if(nome === "" || !nome){
    msg = "Preencha um nome!";
    $('.msg').removeClass("hide");
    return $('.msg').html(msg);
  }
  if(sobrenome === "" || !sobrenome){
    msg = "Preencha um sobrenome!";
    $('.msg').removeClass("hide");
    return $('.msg').html(msg);
  }
  if(email === "" || !email){
    msg = "Preencha um e-mail!";
    $('.msg').removeClass("hide");
    return $('.msg').html(msg);
  }
  
  if(senha === "" || !senha){
    msg = "Preencha uma senha!";
    $('.msg').removeClass("hide");
    return $('.msg').html(msg);
  }
 
  $('.msg').removeClass("hide");
  $('.msg').html("Dados enviados com sucesso!");
 

}