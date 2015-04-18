var showProject = {};

showProject.administrador = function(data) {
  //Muestra animacion cuando el scroll de la pagina esta en sobre mi
  window.addEventListener("scroll", function(event) {
    var left = this.scrollY;
    if (left > 1555) {
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

  function showInfo() {
    //busca todos los div con class = project-info
    var currentItem = document.querySelectorAll('.project-name');
    for (var i = 0; i < currentItem.length; i++) {
      //muestra la informacion con click;
      currentItem[i].onclick = function() {
        //hace scroll a la section de project-info;
        scrollWin(231, 1580)
        document.getElementById("close").classList.add('display-button');
        var id = this.id;
        var contenido = "";
        contenido +=
        '<div class="slider-project"><div class="web-vector"><div class="hideScrollBar"><img id="slider" src="' + data[id].categories[3].value + '"></div></div><div class="slider-button"><button id="button-previous"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button><button id="button-next"><svg width="16px" height="25px"><path style="fill:#856D6D;" d="M0,11.253L15.469,0v3.25L2.434,12.477v0.095l13.036,9.179V25L0,13.794V11.253z"/></svg></button></div></div>' +
        '<h2>' + data[id].categories[0].value + '<span>' + data[id].categories[1].value + '</span></h2>' +
        '<div class="info-project"><p>' + data[id].categories[2].value + '</p></div>';
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
          data[id].categories[3].value,
          data[id].categories[4].value,
          data[id].categories[5].value
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
  showInfo();
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

    if ( nameInput.value === null  || /^\s+$/.test(nameInput.value) || typeof nameInput.value !== 'string' ) {
      nameInput.errorInput("Nombre Invalido").errorColor("red")
      return false;
    } else {
      array_values.push(nameInput.value);
    }

    if (emailInput === null || typeof emailInput !== "string") {
      emailInput.errorInput("Email Invalido").errorColor("red");
      return false;
    }else {
      array_values.push(emailInput);
    }

    if (commentText.value == " " || /^\s+$/.test(commentText.value) ) {
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
}

// Briefcase.js hace el llamado a la hoja de Calculo mediante Ajax( XMLHttpRequest ) después lo convierte en un json mas fácil de usar.
// leftColumnTitle: "id" = es el nombre de la primera columna de la hoja de calculo.
briefcase.getJSON({ leftColumnTitle: "id" }, showProject.administrador );
// Clean form.
function message(input) {
  console.log(input.value)
  if(input.value == "Nombre Invalido" || input.value == "Email Invalido" || input.value == "Deja un mensaje") {
    input.value = '';
    input.style.color = "#bb5c65";
  }
}