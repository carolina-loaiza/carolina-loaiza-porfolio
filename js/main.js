(function() {
  $(document).ready(function() {
    // Scroll nav
    function scrollAnimate(path, seconds) {
      $('html, body').stop().animate({
        scrollTop: $( path ).offset().top - -10
      }, seconds);
    }

    $('.main-nav a').click(function(){
      scrollAnimate($(this).attr('href'), 1000);
      return false;
    });
    
    /*
    $('#mobile-nav, .main-nav a').click(function(){  
      $('.main-nav-container').toggleClass("main-nav-mobile");
    });
    */
    // Project Data File
    var url = "js/datos.js";
    // Project HTML Template
    var templateCopy ='<h2>{{name}}</h2><span>{{type}}</span>'+
                      '<p>{{copy}}</p>'+
                      '<a href={{git}} target="_blank" class="link">Github Code</a>'+
                      '{{#link}}<a href={{link}} target="_blank" class="link">Web Site</a>{{/link}}'+
                      '<div class="images-container">'+
                        '<span>{{gallery}}</span>'+
                        '<ul>{{#image}}<li id={{idx}}><img src={{src}}>{{/image}}</li></ul>'+
                      '</div>';
    var templateImage ='<picture>'+
                        '<source media="(min-width: 480px)" srcset={{mainImage}}>'+
                        '<source media="(max-width: 480px)" srcset={{mobileImage}}>'+
                        '<img srcset={{mainImage}}>'+
                      '</picture>';

    // Template Mustache Print Proyect
    $('.projects-container li').click(function(){

      var project = $(this).attr("id")
      // Mustache to html                
      $.getScript( url, function() {
        var data = eval(project);
        var copy = Mustache.to_html(templateCopy, data);
        var img = Mustache.to_html(templateImage, data);
        $('#project-copy').html(copy);
        $('#project-images').html(img);
        $('.images-container').find('li:first-child').addClass('images-item');
        $('.project-section').removeClass("hidden");
        // Scroll nav to Proyects
        scrollAnimate(".project-section", 2000);
      });
    });

     // Project Section Galery
    $('.images-container li').click(function(){
        var picture = $(this).children().attr('src');
        var count = $(this).id;
        var path = picture.substring(0, picturePath.indexOf('-')) + '-' + count + '.png';
        console.log(path);
        $('#project-images').find('img').src(path);
    });

    // Project Section Close Button
    $('.close-project-section').click(function(){
      scrollAnimate("#projects", 800);
      $('.project-section').toggleClass('hidden');
    });
  });
}());