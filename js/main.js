(function() {
  $(document).ready(function() {
    // Scroll nav
    function scrollAnimate(path, seconds) {
      $('html, body').stop().animate({
        scrollTop: $( path ).offset().top - -10
      }, seconds);
    }

    $('.main-nav a').click(function(){
      $('.main-nav-container').removeClass('main-nav-mobile');
      scrollAnimate($(this).attr('href'), 1000);
      return false;
    });
    
    $('#mobile-nav').click(function(){  
      $('.main-nav-container').toggleClass('main-nav-mobile');
    });

    // Project Data File
    var url = "js/datos.js";
    // Project HTML Template
    var templateCopy ='<h2>{{name}}</h2><h3>{{type}}</h3>'+
                      '<p>{{copy}}</p>'+
                      '{{#git}}<a href={{git}} target="_blank" class="link">Github Code<span class="icon icon-github"></span></a>{{/git}}'+
                      '{{#link}}<a href={{link}} target="_blank" class="link">Web Site<span class="icon icon-browser"></span></a>{{/link}}'+
                      '<div class="images-container">'+
                        '<h3>{{gallery}}</h3>'+
                        '<ul>{{#image}}<li id={{idx}} class="image-item"><img src={{src}}>{{/image}}</li></ul>'+
                      '</div>';
    var templateImage ='<img id ="main-image" src={{mainImage}}>';

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
        $('.image-item:first-child').addClass('select-item');
        $('.project-section').removeClass('hidden');

        // Scroll nav to Proyects
        scrollAnimate('.project-section', 2000);

        // Project Section Galery
        $('.image-item').click(function(){
          $('.image-item').removeClass('select-item');
          $(this).addClass('select-item');
          var picture = $(this).children().attr('src');
          var count = this.id;
          var path = picture.substring(0, picture.indexOf('item')) + '0' + count + '.png';
          $('#main-image').attr('src', path);
        });   
      });
    });

    // Project Section Close Button
    $('.close-project-section').click(function(){
      scrollAnimate('#projects', 800);
      $('.project-section').toggleClass('hidden');
    });
  });
}());