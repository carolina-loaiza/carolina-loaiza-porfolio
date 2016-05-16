'use strict';

//Api service

;(function() {
  
  angular
    .module('portfolio')
    .service('reqService', reqService);

    function reqService($state, $http){
        var data = [
            {
                "_id" : "our_heritage",
                "name" : "Our Heritage",
                "type" : "Website",
                "copy" : "Our Heritage is a videogame about climate change that was developed in conjunction with several companies and organizations including CETAV. To promote the game, a team was formed to develop the website. We use the Scrum methodology to develop the project and comply with various stages of development of wireframes, style guides, design and demos",
                "git" : "https://github.com/our-heritage/our-heritage.github.io",
                "link" : "http://ourheritagegame.com",
                "next" : "cetav_gamejam_2015",
                "mainImage" : "v1460600691/k8mbk0ohaxf4kupl5rxv.png",
                "gallery" : [ 
                    {
                        "avatar" : "img/project-ourHeritage/ourHeritage-item1.png",
                        "image" : "v1460600691/k8mbk0ohaxf4kupl5rxv.png"
                    }, 
                    {
                        "avatar" : "img/project-ourHeritage/ourHeritage-item2.png",
                        "image" : "v1460600708/f78l6jt1me9amvdjerw5.png"
                    }, 
                    {
                        "avatar" : "img/project-ourHeritage/ourHeritage-item3.png",
                        "image" : "v1460600712/dwqiy9dmiugsir4kentf.png"
                    }
                ]
            },
            {
                "_id" : "cetav_gamejam_2015",
                "name" : "Cetav GameJam 2015",
                "type" : "Website",
                "copy" : "The project is about a website for an event in the CETAV called Game Jam, the event was a 48 hours straight marathon to make a playable demo of a game with the climate change as main theme. For this site was important to mention all persons and organizations that were involved in the event and present the information of the four playable demos that were made in the Game Jam.",
                "git" : "https://github.com/cetavgamejam/cetavgamejam.github.io",
                "link" : "http://parquelalibertad.org/gamedesign/",
                "next" : "weather_app",
                "mainImage" : "v1460601227/mqx5ltvbkpmk6jqb9lno.png",
                "gallery" : [ 
                    {
                        "avatar" : "img/project-gamejam/gamejam-item1.png",
                        "image" : "v1460601227/mqx5ltvbkpmk6jqb9lno.png"
                    }, 
                    {
                        "avatar" : "img/project-gamejam/gamejam-item2.png",
                        "image" : "v1460601228/j3ddrmrcsp3rrhog550g.png"
                    }, 
                    {
                        "avatar" : "img/project-gamejam/gamejam-item3.png",
                        "image" : "v1460601214/r4xppydpc7n1jghpycjj.png"
                    }
                ]
            },
            {
                "_id" : "el_colectivo",
                "name" : "elColectivo",
                "type" : "MEAN Project",
                "copy" : "El colectivo is a single page application about Costa Rica's bands, you can login or subscribe a band and create albums. The website is hosted in Heroku and I use MongoDB as database with mLab (MongoDB hosting platform), Node.js with Express as backend and AngularJS in the frontend.",
                "link" : "http://elcolectivo.herokuapp.com",
                "next" : "our_heritage",
                "git" : "https://github.com/carolina-loaiza/Colectivo-Jam",
                "gallery" : [ 
                    {
                        "avatar" : "img/project-colectivo/colectivo-item1.png",
                        "image" : "v1460601836/xsujhhppnkgwbibkcdtq.png"
                    }, 
                    {
                        "avatar" : "img/project-colectivo/colectivo-item2.png",
                        "image" : "v1460601793/abmhwkirjeuzna1eg18p.png"
                    }, 
                    {
                        "avatar" : "img/project-colectivo/colectivo-item3.png",
                        "image" : "v1460601795/qhravobdqxyccvj53af0.png"
                    }
                ]
            },
            {
                "_id" : "music_player",
                "name" : "Music Player",
                "type" : "Web App",
                "copy" : "The information, images, audio and music player are obtained from public api of Deezer, through ajax call. The functionality of the player controls is through javascript, using Revealing Module, so that each player controls has his own function, using the HTML5 audio element.",
                "git" : "https://github.com/carolina-loaiza/Music-Player",
                "next" : "el_colectivo",
                "gallery" : [ 
                    {
                        "avatar" : "img/project-colectivo/colectivo-item1.png",
                        "image" : "v1460601455/f5yaas3ygivt8eipehjk.png"
                    }
                ]
            },
            {
                "_id" : "weather_app",
                "name" : "Weather App",
                "type" : "App",
                "copy" : "The application automatically displays the weather for your current location and the next three days of the week. There is also the option to make a search by city and country. This project uses the public OpenWeatherMap api to obtain all necessary information about the weather. The information is accessed through ajax call and displayed to the user via javascript. The icons used are a free typeface.",
                "git" : "https://github.com/carolina-loaiza/Weather-App",
                "next" : "music_player",
                "gallery" : [ 
                    {
                        "avatar" : "img/project-colectivo/colectivo-item1.png",
                        "image" : "v1460601474/f9hen17pa6yc2o8pzhop.png"
                    }
                ]
            }
        ]

        var getData = function(project_name){
            for (var i = 0; i < data.length; i++) {
                if (data[i]._id === project_name) {
                    return data[i];
                }
            }
        }

        var public_api = {
            getData: getData
        };

        return public_api;
    }
})();