
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/BCO.002df737-99b1-4255-89ed-d05c7b00a609.png' },
              { src: 'images/BCO.2b8ff75a-cea7-4fa3-81e1-732d213ac221.png' },
              { src: 'images/BCO.6f7ff008-6a51-439c-a9c7-fa253ff0f73e.png' },
              { src: 'images/BCO.71b62813-ca95-4287-9dd3-8f0e3a158595.png' },
              { src: 'images/BCO.8ea74af2-bc53-41f8-9160-ad2376757e0d.png' },
              { src: 'images/BCO.947b1fab-dab5-443f-aeea-06c92ccb19cb.png' }
          ],
          timer: true,
          animation: 'kenburns',
          delay: 4000,
          transition: 'fade',
          transitionDuration: 2000
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


