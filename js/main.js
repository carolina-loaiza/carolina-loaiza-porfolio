(function(w, d, u) {
    // Mozilla, Opera, Webkit
    if(document.addEventListener) {
      document.addEventListener('DOMContentLoaded', function() {
        document.removeEventListener('DOMContentLoaded', arguments.callee, false);
        domReady();
      }, false );

    // If IE event model is used
    } else if(document.attachEvent) {
      // ensure firing before onload
      document.attachEvent('onreadystatechange', function(){
        if ( document.readyState === 'complete' ) {
          document.detachEvent('onreadystatechange', arguments.callee );
          domReady();
        }
      });
    }

    function domReady() {
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

      $('#mobile-nav').click(function(){  
        $('.main-nav-container').toggleClass("main-nav-mobile");
      });

      // Project Data File
      var url = "js/datos.js";
      // Project HTML Template
      var templateCopy ='<h2>{{name}}</h2><span>{{type}}</span>'+
                        '<p>{{copy}}</p>'+
                        '<a href={{git}} target="_blank" class="link">Github Code</a>'+
                        '{{#link}}<a href={{link}} target="_blank" class="link">Web Site</a>{{/link}}';
      var templateImage ='<div class="images-container">{{#image}}<img src={{src}}>{{/image}}</div>';

      // Template Mustache Print Proyect
      $('.projects-container li').click(function(){
        $('.project-section').removeClass("hidden");

        // Scroll nav to Proyects
        scrollAnimate(".project-section", 2000);

        var project = $(this).attr("id")
        // Mustache to html                
        $.getScript( url, function() {
          var data = eval(project);
          var copy = Mustache.to_html(templateCopy, data);
          var img = Mustache.to_html(templateImage, data);
          $('#project-copy').html(copy);
          $('#project-images').html(img);
        });
      });

      // Project Section Close Button
      $('.close-project-section').click(function(){
        scrollAnimate("#projects", 800);
        $('.project-section').toggleClass("hidden");
      });
    }
})(window, document);