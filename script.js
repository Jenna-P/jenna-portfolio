
const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector("#nav_icon");
const body = document.querySelector('body');

      if(navToggle)
      {
          navToggle.addEventListener("click", () =>
          {
              navMenu.classList.toggle("active");
              body.classList.toggle('nav_active');
          })
      }

//Navbar on Scroll 
const navbar = document.querySelector(".navbar");
 // when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar 
 window.onscroll = () =>{
 this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

//menu click effect
const underline = document.getElementById("underline");
const navLink = document.querySelectorAll(".nav-link");

const horizontalIndicator = (e) => {
    underline.style.left = e.offsetLeft + "px";
    underline.style.width = e.offsetWidth + "px";
    underline.style.top = e.offsetTop + e.offsetHeight + "px";
  }

// closing menu when link is clicked
  function linkAction()
  {
      const navMenu = document.querySelector(".menu");
      navMenu.classList.remove("active");
      body.classList.remove('nav_active');
  }
  navLink.forEach(n => n.addEventListener("click", linkAction))

  // Scroll Section Active
  const Section= document.querySelectorAll('section[id]')
  const contact = document.querySelector('.contact-wrapper');
  function scrollActive()
  {
      const scrollY = window.pageYOffset
      Section.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 70;
          sectionId = current.getAttribute('id');
          const scroll_target = document.querySelector('.links a[href*=' + sectionId + ']');
          console.log(scrollY);
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
          {
            horizontalIndicator(scroll_target);
                    
          }
          
          if(scrollY >= 2087.5){
            contact.classList.add('active');
          } else {
            contact.classList.remove('active');
          }

      })
  }
      window.addEventListener('scroll', scrollActive)

   //skills animation
   const skills_wrap = document.querySelector(".about-skills"),
   skills_bar = document.querySelectorAll(".progress-line");
   window.addEventListener("scroll", () => {
       skillsEffect();
   })
   // every time we scroll checking, we exceeded the about-skills or not
   function checkScroll(el)
   {
       //getting the top position of about-skills relative to view port, in other words we need to get
       // amount of pixels between about-skills and the top edge of the window.
       let rect = el.getBoundingClientRect();
       // after knowing the amount of pixels between the top edge of about skills and the top edge of window
       // now we will check we exceeded the bottom edge of about skills or not
       if(window.innerHeight >= rect.top + el.offsetHeight) return true;
       return false;
   }
   function skillsEffect()
   {
       if(!checkScroll(skills_wrap)) return;
       skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
   }
  