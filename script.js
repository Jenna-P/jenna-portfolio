new fullpage('#fullpage',{
    autoScrolling:true,
    scrollHorizontally:true,
    // licenseKey: '',
    navigation: true,
    anchors:['Home', 'About', 'Projects', 'Contact'],
    responsivewidth: 768,
   
})

if (screen && screen.width > 768) { document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>'); } 
//$(document).ready(function() { $('#fullpage').fullpage(); });

//navigation menu click event
const body = document.querySelector('body');
const nav_icon = document.querySelector('#nav_icon');

nav_icon.addEventListener('click', () => {
    body.classList.toggle('nav_active');
});

//menu click effect
let underline = document.getElementById("underline");
let menus = document.querySelectorAll("nav a");

const horizontalIndicator = (e) => {
    underline.style.left = e.offsetLeft + "px";
    underline.style.width = e.offsetWidth + "px";
    underline.style.top = e.offsetTop + e.offsetHeight + "px";
  }
  
  menus.forEach((menu) =>
    menu.addEventListener("click", (e) =>
      horizontalIndicator(e.currentTarget)
    )
  );
   
  
  