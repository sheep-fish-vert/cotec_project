$(function () {
	$(document).ready(function() {
		$(".fancybox").fancybox({});
	});
   $('aside h3').on('click', function () {
      // if ($(window).width() <= 768) {
         $('aside > ul').fadeToggle();
      // }
   });
   $(".toggle-btn").click(function () {
      $(this).parent().find(".toggle-content").toggle("slow");
      if ($(this).text() === 'Читать дальше') {
         $(this).text('Скрыть');
         $(this).attr("id","arrowUp");
      } else {
         $(this).text('Читать дальше');
         $(this).attr("id","arrowDown");
      }
      return false;
   });

   $('.variable-width').slick({
      nav: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
   });

   $(".small img").click(function () {
      var work = $(this).attr("src");
      $(this).parent().parent().prev().find("img").attr("src", work);
   });

   $('#horizontalTab').responsiveTabs({
      startCollapsed: 'accordion'
   });



   /*$(".imagezoom").click(function () {
      var img = $(this);
      var src = img.attr('src');
      $("body").append("<div class='popup'>" +
         "<div class='popup_bg'></div>" +
         "<img src='" + src + "' class='popup_img' />" +
         "</div>");
      $(".popup").fadeIn(800);

      $(".popup_bg").click(function () {
         $(".popup").fadeOut(800);
         setTimeout(function () {
            $(".popup").remove();
         }, 800);
      });

   });*/



   jQuery(document).ready(function () {
		$('select').styler();
      jQuery("#productRate").hover(
         function () {
            jQuery(this).append("<span></span>");
         },
         function () {
            jQuery(this).find("span").remove();
         });


      var rating;

      jQuery("#productRate").mousemove(
         function (e) {
            if (!e) e = window.event;
            if (e.pageX) {
               x = e.pageX;
            } else if (e.clientX) {
               x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;

            }
            var posLeft = 0;
            var obj = this;
            while (obj.offsetParent) {
               posLeft += obj.offsetLeft;
               obj = obj.offsetParent;
            }
            var offsetX = x - posLeft,
               modOffsetX = 5 * offsetX % this.offsetWidth;
            //5 - число возможных оценок
            rating = parseInt(5 * offsetX / this.offsetWidth);

            if (modOffsetX > 0) rating += 1;

            jQuery(this).find("span").eq(0).css("width", rating * 9 + "px");
            //ширина одной оценки, в данном случае одной звезды

         });

      $(function () {
         $('.table-responsive').jScrollPane();
      });
   });
});