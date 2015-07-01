
var showProject = (function () {

  var closeButton = document.getElementById("close");
  var contentInfo = document.getElementById('project-info');
  var buttonNext;
  var buttonPrevious;
  var imgContainer;
  var form = document.getElementById("form-contact")
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var commentText = document.getElementById("comment");

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

  Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
      this.prototype[name] = func;
    }
    return this;
  };

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
    var currentItem = document.querySelectorAll('.project-name');
    for (var i = 0; i < currentItem.length; i++) {
      currentItem[i].onclick = function() {
        closeButton.classList.add('display-button');
        var id = this.id;
        var contenido = "";
        contenido += '<h2>' + data.project[id].name + ' /  <span>' + data.project[id].type + '</span></h2> <p>' + data.project[id].info + '</p>';
        if (data.project[id].type == "App") {
          contenido +='<div class="slider-project"><div class="app-vector"><img id="slider" src="#"></div><div class="app-vector"><img id="slider" src="#"></div><div class="slider-button"><button id="button-previous"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button><button id="button-next"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button></div></div>';
        }else {
          contenido +='<div class="slider-project"><div class="web-vector"><div class="hideScrollBar"><img id="slider" src="' + data.project[id].img1 + '"></div></div><div class="slider-button"><button id="button-previous"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button><button id="button-next"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button></div></div>';
        }
        contentInfo.innerHTML = contenido;
        var infoPosition = elementPosition("close"); 
        scrollWin(231, infoPosition.top);
        closeButton.onclick = function() {
          contentInfo.innerHTML = "";
          closeButton.classList.remove('display-button');
          var projectPosition = elementPosition("projects"); 
          scrollWin(231, projectPosition.top);
        }
        sliderButton(data, id);
      }
    }
  }

  function sliderButton(data, id){
    //Gallery json array
    var imageGallery = [
      data.project[id].img1,
      data.project[id].img2,
      data.project[id].img3
    ];

    var imgCount = 0;
    var totalImgs = imageGallery.length - 1;
    buttonNext = document.getElementById("button-next");
    buttonPrevious = document.getElementById("button-previous");
    imgContainer = document.getElementById("slider");
    //Augment
    Element.method('cambiarSrc', function(c) {
      this.src = c;
      return this;
    });
    //Botones del slider
    buttonNext.onclick = function() {
      imgCount++;
      if (imgCount > totalImgs) imgCount = 0
      imgContainer.cambiarSrc(imageGallery[imgCount]);
    }
    buttonPrevious.onclick = function() {
      imgCount--;
      if (imgCount < 0) imgCount = totalImgs;
      imgContainer.cambiarSrc(imageGallery[imgCount]);
    }
  }

  function validationForm(){
    var chars = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/;
    var regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    array_values = [];

    Element.method('errorInput', function(v) {
      this.value = v;
      return this;
    });

    Element.method('errorColor', function(c) {
      this.style.color = c;
      return this;
    });

    if ( nameInput.value  === ""  || /^\s+$/.test(nameInput.value) || typeof nameInput.value != 'string' ) {
      nameInput.errorInput("Nombre Invalido").errorColor("red")
      return false;
    }
    if (emailInput.value === "" || typeof emailInput.value != "string"  ) {
      emailInput.errorInput("Email Invalido").errorColor("red");
      return false;
    }
    if (commentText.value === "" || /^\s+$/.test(commentText.value) ) {
      commentText.errorInput("Deja un mensaje").errorColor("red");
      return false;
    } else {
      form.reset();
      return false;
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
    loadProjects : loadJSON,
    validationForm : validationForm

  };

})();

showProject.loadProjects();

document.getElementById("submit-button").onclick = function() {
  showProject.validationForm();
}
// Clean form.
function message(input) {
  if(input.value == "Nombre Invalido" || input.value == "Email Invalido" || input.value == "Deja un mensaje") {
    input.value = '';
    input.style.color = "#bb5c65";
  }
}