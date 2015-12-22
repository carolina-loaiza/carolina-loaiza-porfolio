var idx = 1;

var projectOurHeritage = {
    name: "Our Heritage",
    type: "Sitio Web",
    copy: "Our Heritage es un videojuego sobre el cambio climático que se desarrolló en conjunto con varias empresas y organizaciones incluyendo al CETAV. Para promocionar el videojuego se creó un equipo para desarrollar el sitio web. Nosotros utilizamos la metodología Scrum para desarrollar el proyecto y cumplimos con varias etapas de elaboración de wireframes, guías de estilo, diseño y demos.",
    git: "https://github.com/our-heritage/our-heritage.github.io",
    link: "http://ourheritagegame.com",
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
    copy: "Extreme Kawaii fue un proyecto que inició como un sitio estático, construido con HTML y CSS. A pesar de que el sitio no es 100% funcional, la idea principal del proyecto fue lograr pasar el sitio estático a un CMS como Drupal 7, para esto se trabajo en parejas y utilizamos herramientas con pantheon.io , Github , Sass, y Vagrant para desarrollar en un ambiente local.",
    link: "http://dev-extreme-kawaii.pantheon.io/",
    mainImage: "img/project-extremeKawaii/extremeK-01.png",
    gallery: "Galería",
    image : [
      { src: "img/project-extremeKawaii/extremeK-item1.png"},
      { src: "img/project-extremeKawaii/extremeK-item2.png"}
    ],
    idx: function() {
      return idx++;
    }
};

var projectMusicPlayer = {
    name: "Music Player",
    type: "Web App",
    copy: "La información, imágenes y audio del reproductor de música son obtenidas del API público de Deezer por medio de un llamado ajax. La funcionalidad de los controles del reproductor es por medio de javascript, utilice Revealing Module , de forma que cada control del reproductor tiene su propia función, utilizando los elementos audio de HTML5.",
    git: "https://github.com/carolina-loaiza/Music-Player",
    mainImage: "img/project-musicPlayer/musicPlayer-01.png"
};

var projectWeatherApp = {
    name: "Weather App",
    type: "App",
    copy: "La aplicación automáticamente muestra el pronóstico del tiempo de la ubicación actual y los siguientes tres días de la semana. También está la opción de hacer una consulta por ciudad y país. En este proyecto utilice el API público de OpenWeatherMap, para obtener toda la información necesaria con respecto al clima. La información es consultada por medio de un llamado ajax y se muestra al usuario por medio de javascript. Los iconos utilizados son una tipografía de uso libre.",
    git: "https://github.com/carolina-loaiza/Weather-App",
    mainImage: "img/project-weatherApp/weatherApp-01.png"
};
