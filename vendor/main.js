(function() {

  $(document).ready(function() {
    DomAction.init();
  });

  var elem,
    elemP,
    DomAction = {

    settings: {
      mainContainer: $('body'),
      mainNav: $('.main-nav a'),
      mainNavContainer: $('.main-nav-container'),
      mobileClass: 'main-nav-mobile',
      mobileNavButton: $('#mobile-nav')
    },

    projectSettings: {
      eachProject: $('.projects-container li'),
      copyContainer: $('#project-copy'),
      imgContainer: $('#project-images'),
      closeButton: $('.close-project-section'),
      galleryItem: '.image-item',
      itemSelect: 'select-item',
      mainImage: '#main-image',
      projectContainer: $('.project-section'),
      url: 'js/datos.js',
      templateCopy: '<h2>{{name}}</h2><h3>{{type}}</h3>'+
                      '<p>{{copy}}</p>'+
                      '{{#git}}<span><i class="fa fa-github icon" aria-hidden="true"></i><a href={{git}} target="_blank" class="link link-project">Github Code</a></span>{{/git}}'+
                      '{{#link}}<span><i class="fa fa-globe icon" aria-hidden="true"></i><a href={{link}} target="_blank" class="link link-project">Web Site</a></span>{{/link}}'+
                      '<div class="images-container">'+
                        '<h3>{{gallery}}</h3>'+
                        '<ul>{{#image}}<li id={{idx}} class="image-item"><img src={{src}}>{{/image}}</li></ul>'+
                      '</div>',
      templateImage: '<img id="main-image" src={{mainImage}}>'
    },

    init: function() {
      elem = this.settings;
      elemP = this.projectSettings;
      this.bindUIActions();
    },

    bindUIActions: function() {
      elem.mainNav.on("click", function() {
        elem.mainNavContainer.removeClass(elem.mobileClass);
        DomAction.scrollAnimate($(this).attr('href'), 1000);
        return false;
      });

      elem.mobileNavButton.click(function(){  
        elem.mainNavContainer.toggleClass(elem.mobileClass);
        elem.mainContainer.toggleClass('disable-scroll');
      });

      elemP.eachProject.click(function(){
        var project = $(this).attr('id');
        DomAction.getProjectData(project);
        DomAction.showProjectData();
      });

      elemP.closeButton.click(function(){
        DomAction.scrollAnimate('#projects', 600);
        elemP.projectContainer.toggleClass('hidden');
      });
    },

    scrollAnimate: function(path, seconds) {
      elem.mainContainer.stop().animate({
        scrollTop: $( path ).offset().top - -10
      }, seconds);
    },

    getProjectData: function(id) {
      $.getScript(elemP.url, function() {
        var data = eval(id),
            copy = Mustache.to_html(elemP.templateCopy, data),
            img = Mustache.to_html(elemP.templateImage, data);
        var gallery = data.galleryImages;
        DomAction.printProjectData(copy, img, gallery);
      })
    },

    printProjectData: function(copy, img, gallery) {
      elemP.copyContainer.html(copy);
      elemP.imgContainer.html(img);
      $(elemP.galleryItem).first().addClass(elemP.itemSelect);
      $(elemP.galleryItem).click(function(){
        var id = this.id;
         DomAction.changeMainImg(id, gallery);
      })
    },

    showProjectData: function() {
      elemP.projectContainer.removeClass('hidden');
      DomAction.scrollAnimate(elemP.projectContainer, 2000);
    },

    changeMainImg: function(id, gallery) {
      $(elemP.galleryItem).removeClass(elemP.itemSelect);
      $('#'+id).addClass(elemP.itemSelect);
      $(elemP.mainImage).attr('src', gallery[id]);
    }
  }
}());