/*!
 *  GuiFerreiraCode v0.0.1 (http://guiferreiracode.com)
 *  Copyright 2015 GuiFerreiraCode.

 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.

 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.

 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


/*Menu Left*/

function btnLeft(){
  
  //$('.ui-menu-left').css('z-index',2000);  
  document.getElementById('ui-menu-left').style.zIndex = 2000;

  //$('.sombra-menu').removeClass('hide');
  document.getElementById('sombra-menu').style.display = "block";

  /*$('.ui-menu-left').animate({    
      left: "0"    
    }, 400, function() {
      
  });*/

  document.getElementById('ui-menu-left').style.left = "-300px";
  var intervalo = setInterval(function(){
    if(parseInt(document.getElementById('ui-menu-left').style.left) < 0){
      document.getElementById('ui-menu-left').style.left = (parseInt(document.getElementById('ui-menu-left').style.left)+50)+"px";
    }else{
      clearInterval(intervalo);
    }

  },50);



}

function btnLeftOut(){
  
  //$('.sombra-menu').addClass('hide');
  document.getElementById('sombra-menu').style.display = "none";

  /*$('.ui-menu-left').animate({    
      left: "-300px",
      'z-index': "-2"
    }, 400, function() {
      
  });*/

  document.getElementById('ui-menu-left').style.left = "0px";
  var intervalo = setInterval(function(){
    if(parseInt(document.getElementById('ui-menu-left').style.left) > -300){
      document.getElementById('ui-menu-left').style.left = (parseInt(document.getElementById('ui-menu-left').style.left)-50)+"px";
    }else{
      clearInterval(intervalo);
    }

  },50);

}

/*Menu Left*/



