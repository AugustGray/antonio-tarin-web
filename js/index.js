// Navigation - hide navbar on scroll down, show on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-' + navbar.offsetHeight + 'px';
    }
    prevScrollpos = currentScrollPos;
  }
};
