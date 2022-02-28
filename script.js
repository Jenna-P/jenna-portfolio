new fullpage('#fullpage',{
    autoScrolling:true,
    scrollHorizontally:true,
     // licenseKey: '',
    navigation: true,
    anchors:['Home', 'About', 'Projects', 'Contact'],
    responsivewidth: 768
    
})

new Glider(document.querySelector('.glider'), {
  slidesToShow: 3,
  slidesToScroll: 5,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 1500,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 4,
        slidesToScroll: 2,
        
      }
    },{
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }

  ]
});


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
   
  
  