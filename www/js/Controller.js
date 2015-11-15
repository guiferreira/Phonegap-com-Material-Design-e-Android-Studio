function form(){
  /*var nome = $('#nome').val();
  var sobrenome = $('#sobrenome').val();
  var email = $('#email').val();  
  var senha = $('#senha').val();*/
  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;


  
  /*var msg = "";
  $('.msg').html("");
  $('.msg').addClass("hide");*/

  var msg = "";
  document.getElementById('msg').value = "";
  document.getElementById('msg').style.display = "none";



  

  if(nome === "" || !nome){
    msg = "Preencha um nome!";
    //$('.msg').removeClass("hide");
    document.getElementById('msg').style.display = "initial";
    //return $('.msg').html(msg);
    return document.getElementById('msg').innerHTML = msg;
  }
  if(sobrenome === "" || !sobrenome){
    msg = "Preencha um sobrenome!";
    //$('.msg').removeClass("hide");
    document.getElementById('msg').style.display = "initial";
    //return $('.msg').html(msg);
    return document.getElementById('msg').innerHTML = msg;
  }
  if(email === "" || !email){
    msg = "Preencha um e-mail!";
    //$('.msg').removeClass("hide");
    document.getElementById('msg').style.display = "initial";
    //return $('.msg').html(msg);
    return document.getElementById('msg').innerHTML = msg;
  }
  
  if(senha === "" || !senha){
    msg = "Preencha uma senha!";
    //$('.msg').removeClass("hide");
    document.getElementById('msg').style.display = "initial";
    //return $('.msg').html(msg);
    return document.getElementById('msg').innerHTML = msg;
  }
 
 /*// Ajax...
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


  });*/

  var dados = "nome="+nome+"&sobrenome="+sobrenome+"&email="+email+"&senha="+senha;
  function sendRequest(url,callback,postData) {
      var req = createXMLHTTPObject();
      if (!req) return;
      var method = (postData) ? "POST" : "GET";
      req.open(method,url,true);
      req.setRequestHeader('User-Agent','XMLHTTP/1.0');
      if (postData)
          req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
      req.onreadystatechange = function () {
          if (req.readyState != 4) return;
          if (req.status != 200 && req.status != 304) {
              msg = "Erro ao salvar o registro!";
              document.getElementById('msg').style.display = "initial";
              return document.getElementById('msg').innerHTML = msg;            
          }
          callback(req);
      }
      if (req.readyState == 4) return;
      req.send(postData);
  }

  var XMLHttpFactories = [
      function () {return new XMLHttpRequest()},
      function () {return new ActiveXObject("Msxml2.XMLHTTP")},
      function () {return new ActiveXObject("Msxml3.XMLHTTP")},
      function () {return new ActiveXObject("Microsoft.XMLHTTP")}
  ];

  function createXMLHTTPObject() {
      var xmlhttp = false;
      for (var i=0;i<XMLHttpFactories.length;i++) {
          try {
              xmlhttp = XMLHttpFactories[i]();
          }
          catch (e) {
              continue;
          }
          break;
      }
      return xmlhttp;
  }


  sendRequest("http://localhost/Laravel/webservice_laravel_a_z/public/api/user",function(ret){  
      msg = "Registro salvo com sucesso!";
      document.getElementById('msg').style.display = "initial";
      return document.getElementById('msg').innerHTML = msg;
    

  },dados);

}

function escondePaginas(){
  //$("#PagLogin").hide();
  document.getElementById('PagLogin').style.display = "none";
  //$("#PagCadastro").hide();
  document.getElementById('PagCadastro').style.display = "none";
}
function exibePagina(idPagina){
  escondePaginas();
  //$("#"+idPagina).fadeIn("slow");
  processa(document.getElementById(idPagina),2.2,0,1);
  document.getElementById(idPagina).style.display = "block";
}

function processa(element, time, initial, end){
  if(initial == 0){
    increment = 2;
    element.style.display = "block";
  }else{
    increment = -2;
  }

  opc = initial;
  var intervalo = setInterval(function(){
    if( opc == end){
      if(end == 0){
        element.style.display = "none";
      }
      clearInterval(intervalo);
    }else{
      opc += increment;
      element.style.opacity = opc/100;
      element.style.filter = "alpha(opacity="+opc+")";
    }
  },time * 10);

}