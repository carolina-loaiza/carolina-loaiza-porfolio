var showProject = {};

showProject.administrador = function(data) {

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

  var TopLeft = elementPosition("project-info"); //"project-info" = div que quiero saber la posicion
  console.log(TopLeft.top);
  //Muestra animacion cuando el scroll de la pagina esta en sobre mi
  window.addEventListener("scroll", function(event) {
    var left = this.scrollY;
    if (left > TopLeft.top) {
      document.getElementById("skills-bars").classList.remove('hidden-animation');
    }
  });

  //Augmenting
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
        //console.log(data.project[0].id)
        showInfo(data)
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
    //busca todos los div con class = project-info
    var currentItem = document.querySelectorAll('.project-name');
    for (var i = 0; i < currentItem.length; i++) {
      //muestra la informacion con click;
      currentItem[i].onclick = function() {
        console.log(currentItem[i])
        //hace scroll a la section de project-info;
        scrollWin(231, 1580);
        document.getElementById("close").classList.add('display-button');
        var id = this.id;
        var contenido = "";
        contenido +=
        '<div class="slider-project"><div class="web-vector"><div class="hideScrollBar"><img id="slider" src="' + data.project[id].img1 + '"></div></div><div class="slider-button"><button id="button-previous"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button><button id="button-next"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button></div></div>' +
        '<h2>' + data.project[id].name + '<span>' + data.project[id].type + '</span></h2>' +
        '<div class="info-project"><p>' + data.project[id].info + '</p></div>';
        var contentInfo = document.getElementById('project-info');
        contentInfo.innerHTML = contenido;
        //cerrar la section proyect info;
        document.getElementById("close").onclick = function() {
          contentInfo.innerHTML = "";
          document.getElementById("close").classList.remove('display-button');
          //hace scroll hacia arriba a la cuadricula de projectos;
          scrollWin(231, 700)
        }
        //Gallery json array
        var imageGallery = [
          data.project[id].img1,
          data.project[id].img2,
          data.project[id].img3
        ];

        var imgCount = 0;
        var totalImgs = imageGallery.length - 1;
        var buttonNext = document.getElementById("button-next");
        var buttonPrevious = document.getElementById("button-previous");
        //Augment
        var imgContainer = document.getElementById("slider");
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
    }
  }
  loadJSON();
  // Validacion del Form de Contacto.
  var form = document.getElementById("form-contact")
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var commentText = document.getElementById("comment");

  document.getElementById("submit-button").onclick = function() {
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

    if ( nameInput.value  === ""  || /^\s+$/.test(nameInput.value) || typeof nameInput.value !== 'string' ) {
      nameInput.errorInput("Nombre Invalido").errorColor("red")
      return false;
    } else {
      array_values.push(nameInput.value);
    }

    if (emailInput.value === "" || typeof emailInput.value !== "string" || !(emailInput).match(regEx) ) {
      emailInput.errorInput("Email Invalido").errorColor("red");
      return false;
    }else {
      array_values.push(emailInput);
    }

    if (commentText.value === "" || /^\s+$/.test(commentText.value) ) {
      commentText.errorInput("Deja un mensaje").errorColor("red");
      return false;
    } else {
      array_values.push(commentText);
      alert('El mensage fue enviado exitosamente, Gracias!');
      form.reset();
      console.log("Contenido del formulario listo para enviar ", array_values);
      return false;
    }
  }
}();

// Clean form.
function message(input) {
  if(input.value == "Nombre Invalido" || input.value == "Email Invalido" || input.value == "Deja un mensaje") {
    input.value = '';
    input.style.color = "#bb5c65";
  }
}