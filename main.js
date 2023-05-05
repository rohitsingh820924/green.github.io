const headerEl = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >500) {
        headerEl.classList.add('navbar-scrolled');
    }
    else if(window.scrollY <500) {
        headerEl.classList.remove('navbar-scrolled');
    }
});

window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("navbar");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }