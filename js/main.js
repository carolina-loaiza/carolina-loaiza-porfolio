
var showProject = (function () {

  var closeButton = document.getElementById("close");
  var contentInfo = document.getElementById('project-info');

  //Funcion para obtener la posicion de un elemento
  function elementPosition(idi) {
    var ele = document.getElementById(idi);
    var top = 0;
    while (ele.tagName != "BODY") {
      top += ele.offsetTop;
      ele = ele.offsetParent;
    }
    return {
      top: top
    };
  }

  function scrollWin(x, y) { 
    this.scrollTo(x, y)
  }

  function loadJSON() { 
    var request = new XMLHttpRequest();
    request.open('GET', 'js/datos.json', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        showInfo(data);
      } else {
         console.log("We reached our target server, but it returned an error")
      }
    };
    request.onerror = function() {
       console.log("There was a connection error of some sort")
    };
    request.send();
  }

  function showInfo(data) {
    var currentItem = document.querySelectorAll('.project-id');

    for (var i = 0; i < currentItem.length; i++) {

      currentItem[i].onclick = function() {
        closeButton.classList.add('display-button');
        var id = this.id;
        var contenido = "";

        //Muestra las imagenes
        var imgContainer = "";
        var cantImg = data.project[id].image.length
        for (var i = 0; i < cantImg; i++) {
          imgContainer += '<img src="'+ data.project[id].image[i] +'">';
        }

        contenido += '<div id="project-copy" class="project-copy"><h2>' + data.project[id].name +'</h2><span>' + data.project[id].type + '</span>' + data.project[id].info + '<a href="' + data.project[id].link[1] + '" target="_blank" class="link">' + data.project[id].link[0] + '</a></div>'+
        '<div id="project-images" class="project-images"><div class="images-container">' + imgContainer + '</div></div>';
        contentInfo.innerHTML = contenido;

        if (data.project[id].type == 'App') {
          document.getElementById('project-images').classList.add('images-container-app');
        };

        
        var infoPosition = elementPosition("close");

        scrollWin(231, infoPosition.top);

        closeButton.onclick = function() {
          contentInfo.innerHTML = "";
          closeButton.classList.remove('display-button');
          var projectPosition = elementPosition("projects"); 
          scrollWin(231, projectPosition.top);
        }

      }
    }
  }
  
  //Muestra animacion cuando el scroll de la pagina esta en sobre mi
  /*
  window.addEventListener("scroll", function(event) {
    var left = this.scrollY;
    if (left > TopLeft.top) {
      document.getElementById("skills-bars").classList.remove('hidden-animation');
    }
  });
  */

  return {
    loadProjects : loadJSON
  };

})();

showProject.loadProjects();