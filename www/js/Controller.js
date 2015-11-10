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
 
 // Ajax...
 var dados = "nome="+nome+"&sobrenome="+sobrenome+"&email="+email+"&senha="+senha;
 var contentType = "application/x-www-form-urlencoded; charset=utf-8";

  $.ajax({
    type: "POST",
    url: "http://localhost/Laravel/webservice_laravel_a_z/public/api/user",
    data: dados,
    contentType: contentType,
    success: function(json){
      console.log(json);
      $('.msg').removeClass("hide");
      $('.msg').html("Dados enviados com sucesso!");
    },
    error:function(json){
      console.log(json);
      $('.msg').removeClass("hide");
      $('.msg').html("Erro! Dados não foram enviados");
    }


  });
 

}

function escondePaginas(){
  $("#PagLogin").hide();
  $("#PagCadastro").hide();
}
function exibePagina(idPagina){
  escondePaginas();
  $("#"+idPagina).fadeIn("slow");
}