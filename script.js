new fullpage('#fullpage',{
    autoScrolling:true,
    scrollHorizontally:true,
    // licenseKey: '',
    navigation: true,
    anchors:['Home', 'About', 'Projects', 'Contact'],
    responsiveHeight: 410,
    
    
})

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
   
  let cardOne = document.getElementById("card1");
  let cardTwo = document.getElementById("card2");
  let cardThree = document.getElementById("card3");

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  
  if (mediaQuery.matches) {
    cardOne.classList.add("slide"); 
    cardTwo.classList.add("slide"); 
    cardThree.classList.add("slide"); 
  } else {
    cardOne.classList.remove("slide");
    cardTwo.classList.remove("slide");
    cardThree.classList.remove("slide");
  }
  
  
  