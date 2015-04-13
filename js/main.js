var showProject = {};

showProject.administrador = function(data) {
    //funcion que me permite hacer scroll;
    function scrollWin(x, y) {
      window.scrollTo(x, y);
    }

    function showInfo() {
      //busca todos los div con class = project-info
      var currentItem = document.querySelectorAll('.project-info');
      for (var i = 0; i < currentItem.length; i++) {
        //muestra la informacion con click;
        currentItem[i].onclick = function() {
          //hace scroll a la section de project-info;
          scrollWin(231, 1580)
          document.getElementById("close").classList.add('display-button');
          var id = this.id;
          if (id == "4") {
            var contenidoApp = "";
            contenidoApp +=
              '<div class="slider-project"><div class="app-vector"><img src="' + data[id].categories[3].value + '"></div><div class="app-vector"><img src="' + data[id].categories[3].value + '"></div><div class="slider-button"><button id="button-previous"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button><button id="button-next"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button></div></div>' +
              '<h2>' + data[id].categories[0].value + '<span>' + data[id].categories[1].value + '</span></h2>' +
              '<div class="info-project"><p>' + data[id].categories[2].value + '</p></div>';
            var contentInfo = document.getElementById('project-info');
            contentInfo.innerHTML = contenidoApp;
          }else {
            var contenido = "";
            contenido +=
              '<div class="slider-project"><div class="web-vector"><div class="hideScrollBar"><img id="slider" src="' + data[id].categories[3].value + '"></div></div><div class="slider-button"><button id="button-previous"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button><button id="button-next"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button></div></div>' +
              '<h2>' + data[id].categories[0].value + '<span>' + data[id].categories[1].value + '</span></h2>' +
              '<div class="info-project"><p>' + data[id].categories[2].value + '</p></div>';
            var contentInfo = document.getElementById('project-info');
            contentInfo.innerHTML = contenido;
          }
          //cerrar la section proyect info;
          document.getElementById("close").onclick = function() {
            contentInfo.innerHTML = "";
            document.getElementById("close").classList.remove('display-button');
            //hace scroll hacia arriba a la cuadricula de projectos;
            scrollWin(231, 700)
          }

          var imageGallery = [
            data[id].categories[3].value,
            data[id].categories[4].value,
            data[id].categories[5].value
          ];

          var imgCount = 0;
          var totalImgs = imageGallery.length - 1;

          document.getElementById("button-next").onclick = function() {
            imgCount++;
            if (imgCount > totalImgs) imgCount = 0

            document.getElementById("slider").src = imageGallery[imgCount];
          }

          document.getElementById("button-previous").onclick = function() {
            imgCount--;
            if (imgCount < 0) imgCount = totalImgs;
            document.getElementById("slider").src = imageGallery[imgCount];
          }
        }
      }
    }
    showInfo();
  }
// Briefcase.js hace el llamado a la hoja de Calculo mediante Ajax( XMLHttpRequest ) después lo convierte en un json mas fácil de usar.
// leftColumnTitle: "id" = es el nombre de la primera columna de la hoja de calculo.
briefcase.getJSON({ leftColumnTitle: "id" }, showProject.administrador);

//Funcion para obtener la posicion de un elemento
/*
function getElementTopLeft(idi) {
  var ele = document.getElementById(idi);
  var top = 0;
  var left = 0;
  while (ele.tagName != "BODY") {
    top += ele.offsetTop;
    left += ele.offsetLeft;
    ele = ele.offsetParent;
  }
  return {
    top: top,
    left: left
  };
}
var TopLeft = getElementTopLeft("project-info");
console.log(TopLeft.top + ', ' + TopLeft.left);
*/