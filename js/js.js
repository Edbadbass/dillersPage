     function dropMenu() {

      document.getElementById("MyDropDown").classList.toggle("open-menu");
    }
       window.onclick = function(event) {
      if (!event.target.matches('.drop-down')) {
        var dropdowns = document.getElementsByClassName("nav-hamburger");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('open-menu')) {
            openDropdown.classList.remove('open-menu');
          }
        }
      }
    }


     $('a[href^="#"').on('click', function() {

         let href = $(this).attr('href');

         $('html, body').animate({
             scrollTop: $(href).offset().top
         }, 1100);
         return false;
     });
