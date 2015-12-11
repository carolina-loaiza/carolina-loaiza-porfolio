var idx = 1;

var projectOurHeritage = {
    name: "Our Heritage",
    type: "Sitio Web",
    copy: "Our Heritage es un videojuego sobre el cambió climático que se desarrollo en conjunto con varias empresas y organizaciones incluyendo al CETAV.Para promocionar el videojuego se creo un equipo para desarrollar el sitio web. Nosotros utilizamos la metodologia Scrum para desarrollar el proyecto y cumplimos con varias etapas de elaboración de wireframes, guías de estilo, diseño y demos.",
    git: "https://github.com/our-heritage/our-heritage.github.io",
    link: "http://ourheritagegame.com",
    mobileImage: "img/project-ourHeritage/ourHeritage-mobile.png",
    mainImage: "img/project-ourHeritage/ourHeritage-01.png",
    gallery: "Galería",
    image : [
      { src: "img/project-ourHeritage/ourHeritage-item1.png"},
      { src: "img/project-ourHeritage/ourHeritage-item2.png"},
      { src: "img/project-ourHeritage/ourHeritage-item3.png"}
    ],
    idx: function() {
      return idx++;
    }
};

var projectGameJam = {
    name: "Cetav Game Jam 2015",
    type: "Sitio Web",
    copy: "El proyecto consistió en realizar el sitio web sobre un evento realizado en el CETAV llamado Game Jam, el evento fue una maratón de 48 horas seguidas para realizar un demo jugable de un videojuego teniendo como tema principal el cambio climático.Para el sitio era importante que estuvieran presentes todas las personas y organizaciones involucradas en el evento , así como presentar la información de los cuatro demos jugables que se realizaron en el Game Jam.",
    git: "https://github.com/cetavgamejam/cetavgamejam.github.io",
    link: "http://parquelalibertad.org/gamedesign/",
    mobileImage: "img/project-gamejam/gamejam-mobile.png",
    mainImage: "img/project-gamejam/gamejam-01.png",
    gallery: "Galería",
    image : [
      { src: "img/project-gamejam/gamejam-item1.png"},
      { src: "img/project-gamejam/gamejam-item2.png"},
      { src: "img/project-gamejam/gamejam-item3.png"}
    ],
    idx: function() {
      return idx++;
    }
};

var projectExtremeKawaii = {
    name: "Extreme Kawaii",
    type: "Drupal 7",
    copy: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó",
    link: "http://dev-extreme-kawaii.pantheon.io/",
    mobileImage: "img/project-ourHeritage/musicPlayer-mobile.png",
    mainImage: "img/project-ourHeritage/musicPlayer-01.png",
    gallery: "Galería",
    image : [
      { src: "img/project-musicPlayer/musicPlayer-01.png"}
    ],
    idx: function() {
      return idx++;
    }
};

var projectMusicPlayer = {
    name: "Music Player",
    type: "Web App",
    copy: "La información, imágenes y audio del reproductor de música son obtenidas del API publico de Deezer por medio de un llamado ajax.La funcionalidad de los controles del reproductor es por medio de javascript, utilice Revealing Module , de forma que cada control del reproductor tiene su propia función, utilizando los elementos audio de HTML 5.",
    git: "https://github.com/carolina-loaiza/Music-Player",
    mobileImage: "img/project-musicPlayer/musicPlayer-mobile.png",
    mainImage: "img/project-musicPlayer/musicPlayer-01.png"
};

var projectWeatherApp = {
    name: "Weather App",
    type: "App",
    copy: "La aplicación automáticamente muestra el pronóstico del tiempo de la ubicación actual y los siguientes tres días de la semana.También esta la opción de hacer una consulta por ciudad y país.En este proyecto utilice el API publico de OpenWeatherMap, para obtener toda la información necesaria con respecto al clima. La información es consultada por medio de un llamado ajax y se muestra al usuario por medio de javascript.Los iconos utilizados son una tipografía de uso libre.",
    git: "https://github.com/carolina-loaiza/Weather-App",
    mobileImage: "img/project-weatherApp/weatherApp-mobile.png",
    mainImage: "img/project-weatherApp/weatherApp-01.png"
};