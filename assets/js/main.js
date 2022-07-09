//Toggle mobile menu
const menuToggleOpen = document.querySelector('.menu-toggle-open');
const menuToggleClose = document.querySelector('.menu-toggle-close');
const navMobileElement = document.querySelector('.nav-mobile');

menuToggleOpen.addEventListener('click', () => navMobileElement.classList.add('active'));
menuToggleClose.addEventListener('click', () => navMobileElement.classList.remove('active'));
//Toggle theme
const bodyElement = document.body;
const themeToggleBtn = document.querySelector('.theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('theme-light');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('theme-light');
    if(bodyElement.classList.contains('theme-light')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme', 'themeActive');
    }
})
//Show dropdown menu
document.addEventListener('click', element => {
    const dropdown = document.querySelector('.dropdown');

    if(element.target.classList.contains
        ('dropdown-btn')){
            dropdown.classList.add('active');
    }else{
        dropdown.classList.add('remove');
    }
})

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
}
function currentSlide(n) {
   showSlides(slideIndex = n);
}
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
}