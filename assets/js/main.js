/*=============== HOME SPLIT TEXT ===============*/
function splitText(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent;
  element.innerHTML = text
    .split("")
    .map(char => `<span>${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
}

// Split both profession texts
splitText(".home__profession1");
splitText(".home__profession2");

// Animate Developer
anime({
  targets: ".home__profession1 span",
  translateY: ["100%", "0%"],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 900,
  delay: anime.stagger(80)
});

// Animate Designer
anime({
  targets: ".home__profession2 span",
  translateY: ["100%", "0%"],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 900,
  delay: anime.stagger(80, { start: 400 })
});
// ===== Split text into characters =====



// ===== Split text into characters (manual splitText) =====


// import { animate, splitText, stagger } from 'animejs';

// const { chars : chars1 } = splitText('.home__profession1', {
//   chars: { wrap: 'clip' },
// });

// animate(chars1, {
//   y: [
//     { to: ['100%', '0%'] },
//     { to: '-100%', delay: 400, ease: 'in(3)' }
//   ],
//   duration: 900,
//   ease: 'out(3)',
//   delay: stagger(90),
//   loop: true,
// });


/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween:24,
  slidesPerView:`auto`,
  grabCursor:true,
  speed:600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  }
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target;
    const targetContent = document.querySelector(targetSelector);

    // remove active from all contents
    tabContents.forEach((content) => {
      content.classList.remove('work-active');
    });

    // remove active from all tabs
    tabs.forEach((t) => {
      t.classList.remove('work-active');
    });

    // activate clicked tab and content
    tab.classList.add('work-active');
    targetContent.classList.add('work-active');
  });
});

/*=============== SERVICES ACCORDION ===============*/
/*=============== SKILLS SCROLL EFFECT ===============*/

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn=document.getElementById('contact-btn'),
      copyEmail =document.getElementById('contact-email').textContent

copyBtn.addEventListener('click',()=>{
  // uses clipboard api to copy
  navigator.clipboard.writeText(copyEmail).then(()=>{
    copyBtn.innerHTML='<i class="ri-check-double-line"></i> Copied to clipboard '

    //restore to original text
    setTimeout(()=>{
      copyBtn.innerHTML = '<i class="ri-file-copy-line"></i> hello@goouthamkumar.in '
    },4000)
  })
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const textYear=document.getElementById('footer-year'),
      currentyear = new Date().getFullYear()

textYear.textContent = currentyear

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const id = section.getAttribute('id');
    const top = section.offsetTop - 50;
    const height = section.offsetHeight;

    const link = document.querySelector('.nav__link[href*=' + id + ']');

    if (!link) return;

    if (scrollY > top && scrollY <= top + height) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== INTRO TEXT ANIMATION ===============*/

function splitIntroText(){
  const text = document.querySelector(".intro-text")
  const content = text.textContent

  text.innerHTML = content
    .split("")
    .map(c => `<span>${c === " " ? "&nbsp;" : c}</span>`)
    .join("")
}

splitIntroText()

gsap.from(".intro-text span",{
  y:80,
  opacity:0,
  stagger:0.05,
  duration:1.2,
  ease:"power3.out"
})

gsap.to(".intro",{
  opacity:0,
  delay:2.5,
  duration:1,
  onComplete:()=>{
    document.querySelector(".intro").style.display="none"
  }
})