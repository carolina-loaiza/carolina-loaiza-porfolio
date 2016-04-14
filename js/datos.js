var idx = 0;

var projectOurHeritage = {
    name: "Our Heritage",
    type: "Website",
    copy: "Our Heritage is a videogame about climate change that was developed in conjunction with several companies and organizations including CETAV. To promote the game, a team was formed to develop the website. We use the Scrum methodology to develop the project and comply with various stages of development of wireframes, style guides, design and demos.",
    git: "https://github.com/our-heritage/our-heritage.github.io",
    link: "http://ourheritagegame.com",
    mainImage: "http://res.cloudinary.com/elcolectivo/image/upload/v1460600691/k8mbk0ohaxf4kupl5rxv.png",
    galleryImages: [
      "http://res.cloudinary.com/elcolectivo/image/upload/v1460600691/k8mbk0ohaxf4kupl5rxv.png",
      "http://res.cloudinary.com/elcolectivo/image/upload/v1460600708/f78l6jt1me9amvdjerw5.png",
      "http://res.cloudinary.com/elcolectivo/image/upload/v1460600712/dwqiy9dmiugsir4kentf.png"
    ],
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
    mainImage: "http://res.cloudinary.com/elcolectivo/image/upload/v1460601227/mqx5ltvbkpmk6jqb9lno.png",
    gallery: "Gallery",
    galleryImages: [
      "http://res.cloudinary.com/elcolectivo/image/upload/v1460601227/mqx5ltvbkpmk6jqb9lno.png",
      "http://res.cloudinary.com/elcolectivo/image/upload/v1460601228/j3ddrmrcsp3rrhog550g.png",
      "http://res.cloudinary.com/elcolectivo/image/upload/v1460601214/r4xppydpc7n1jghpycjj.png"
    ],
    image : [
      { src: "img/project-gamejam/gamejam-item1.png"},
      { src: "img/project-gamejam/gamejam-item2.png"},
      { src: "img/project-gamejam/gamejam-item3.png"}
    ],
    idx: function() {
      return idx++;
    }
};

var projectColectivo = {
    name: "elcolectivo",
    type: "MEAN project",
    copy: "El colectivo is a single page application about Costa Rica's bands, you can login or subscribe a band and create albums. The website is hosted in Heroku and I use MongoDB as database with mLab (MongoDB hosting platform), Node.js with Express as backend and AngularJS in the frontend.",
    link: "http://elcolectivo.herokuapp.com",
    git: "https://github.com/carolina-loaiza/Colectivo-Jam",
    mainImage: "http://res.cloudinary.com/elcolectivo/image/upload/v1460601836/xsujhhppnkgwbibkcdtq.png",
    gallery: "Gallery",
    galleryImages: [
      "http://res.cloudinary.com/elcolectivo/image/upload/v1460601836/xsujhhppnkgwbibkcdtq.png",
      "http://res.cloudinary.com/elcolectivo/image/upload/v1460601793/abmhwkirjeuzna1eg18p.png",
      "http://res.cloudinary.com/elcolectivo/image/upload/v1460601795/qhravobdqxyccvj53af0.png"
    ],
    image : [
      { src: "img/project-colectivo/colectivo-item1.png"},
      { src: "img/project-colectivo/colectivo-item2.png"},
      { src: "img/project-colectivo/colectivo-item3.png"}
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
    mainImage: "http://res.cloudinary.com/elcolectivo/image/upload/v1460601455/f5yaas3ygivt8eipehjk.png"
};

var projectWeatherApp = {
    name: "Weather App",
    type: "App",
    copy: "The application automatically displays the weather for your current location and the next three days of the week. There is also the option to make a search by city and country. This project uses the public OpenWeatherMap api to obtain all necessary information about the weather. The information is accessed through ajax call and displayed to the user via javascript. The icons used are a free typeface.",
    git: "https://github.com/carolina-loaiza/Weather-App",
    mainImage: "http://res.cloudinary.com/elcolectivo/image/upload/v1460601474/f9hen17pa6yc2o8pzhop.png"
};
