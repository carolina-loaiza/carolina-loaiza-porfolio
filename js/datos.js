var idx = 1;

var projectOurHeritage = {
    name: "Our Heritage",
    type: "Website",
    copy: "Our Heritage is a videogame about climate change that was developed in conjunction with several companies and organizations including CETAV. To promote the game, a team was formed to develop the website. We use the Scrum methodology to develop the project and comply with various stages of development of wireframes, style guides, design and demos",
    git: "https://github.com/our-heritage/our-heritage.github.io",
    link: "http://ourheritagegame.com",
    mainImage: "img/project-ourHeritage/ourHeritage-01.png",
    gallery: "Gallery",
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
    type: "Website",
    copy: "The project is about a website for an event in the CETAV called Game Jam, the event was a 48 hours straight marathon to make a playable demo of a game with the climate change as main theme. For this site was important to mention all persons and organizations that were involved in the event and present the information of the four playable demos that were made in the Game Jam.",
    git: "https://github.com/cetavgamejam/cetavgamejam.github.io",
    link: "http://parquelalibertad.org/gamedesign/",
    mainImage: "img/project-gamejam/gamejam-01.png",
    gallery: "Gallery",
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
    copy: "Extreme Kawaii was a project that began as a static site built with HTML and CSS. Although the site is not 100% functional, the main idea of the project was to transform the static site to a CMS like Drupal 7, for this project we worked in pairs and we use tools like pantheon.io, Github, Sass, and Vagrant to develop in a local environment.",
    link: "http://dev-extreme-kawaii.pantheon.io/",
    mainImage: "img/project-extremeKawaii/extremeK-01.png",
    gallery: "Gallery",
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
    copy: "The information, images, audio and music player are obtained from public api of Deezer, through ajax call. The functionality of the player controls is through javascript, using Revealing Module, so that each player controls has his own function, using the HTML5 audio element.",
    git: "https://github.com/carolina-loaiza/Music-Player",
    mainImage: "img/project-musicPlayer/musicPlayer-01.png"
};

var projectWeatherApp = {
    name: "Weather App",
    type: "App",
    copy: "The application automatically displays the weather for your current location and the next three days of the week. There is also the option to make a search by city and country. This project uses the public OpenWeatherMap api to obtain all necessary information about the weather. The information is accessed through ajax call and displayed to the user via javascript. The icons used are a free typeface.",
    git: "https://github.com/carolina-loaiza/Weather-App",
    mainImage: "img/project-weatherApp/weatherApp-01.png"
};
