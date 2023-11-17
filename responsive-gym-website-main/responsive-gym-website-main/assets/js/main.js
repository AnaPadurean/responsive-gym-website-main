/* MENU */
const navMenu=document.getElementById('nav-menu'), 
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/*=============== SHOW MENU ===============*/
 /*validate if constant exists*/
     if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
         }) 
     }
/*=============== MENU CLOSE ===============*/  
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
     }) 
 }
/*=============== MENU MOBILE ===============*/
/*remove menu list on click on items*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY>=50? header.classList.add('bg-header')
                    :header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document. querySelectorAll('section [id]')
const scrollActive = () => {
const scrollY = window. pageYOffset

sections.forEach(current =>{

    const sectionHeight = current. offsetHeight,
          sectionTop = current. offsetTop - 58,
          sectionId = current. getAttribute ('id'),
          sectionsClass = document. querySelector(' .nav__menu  a[href*=' + sectionId+ ']')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
          }
          else{
            sectionsClass.classList.remove('active-link')
          }
 })
window.addEventListener('scroll', scrollActive);
}
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay:700, origin:'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval:100})
sr.reveal(`.choose__img, .calculate__content`, {origin:'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin:'right'})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* =========== GALLERY ========*/

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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


/*=============== CALCULATE JS ===============*/
const calculateForm=document.getElementById('calculate-form');
const calculateCm=document.getElementById('calculate-cm');
const calculateKg=document.getElementById('calculate-kg');
const calculateMessage=document.getElementById('calculate-message');

const calculateBmi=(e)=>{
e.preventDefault()
//check if the fields have a value
if(calculateCm.value==='' || calculateKg.value===''){
    //add and remove color
    calculateMessage.classList.remove('color-green')
    calculateMessage.classList.add('color-red')

    //show message
    calculateMessage.textContent = 'Please Fill In The Height And Weight!'

    //remove message in 3 seconds
    setTimeout(()=>{
        calculateMessage.textContent=''
    }, 3000)
    }   
    else
    {
        //bmi formula
        const cm=calculateCm.value/100,
              kg=calculateKg.value,
              bmi=Math.round(kg/(cm*cm));

        //show health status
        if(bmi<18.5){
            //add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent=`Your BMI is ${bmi}, so you are in the underweight range`
        }
        else if (bmi<25){
            //add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent=`Your BMI is ${bmi}, so you are in the healthy range`
        }

        else {
            //add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent=`Your BMI is ${bmi}, so you are in the overweight range`
        }
        //clear the fileds inputs
        calculateCm.value='';
        calculateKg.value='';

        //remove message in 4 secounds
        setTimeout(()=>{
            calculateMessage.textContent=''
        }, 4000)
        
    }
}

calculateForm.addEventListener('submit', calculateBmi)
/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form');
const contactMessage=document.getElementById('contact-message');
const contactUser=document.getElementById('contact-user');

const sendMail=(e)=>{
    e.preventDefault()

    //check if the field has a value
    if(contactUser.value===''){
        //add and remove color
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

          //show message
        contactMessage.textContent='Please enter your email address!'

        //remove message after 3 seconds
        setTimeout(()=>{
            contactMessage.textContent=''
        }, 4000)
    }
    else{
        // serviceID: https://dashboard.emailjs.com/admin
       
        //template https://dashboard.emailjs.com/admin/templates
        //publicKey https://dashboard.emailjs.com/admin/account
        emailjs.sendForm('service_bcdl3xc', 'template_q98lhpu', '#contact-form', '4G3wnoW-54OuJgjCw');
         //serviceID  templateID #form publicKey
        then(()=>{
            //show message and color
            contactMessage.classList.add('color-green');
            contactMessage.textContent='Registration successfully!';
            //remove content in 3 seconds
            setTimeout(()=>{
                contactMessage.textContent=''
            }, 3000)
        }, (error)=>{
            //mail sending error
            alert('SOMETHIMG WENT WRONG! TRY AGAIN!', error)
        })
        contactUser.value='';
    }
}
contactForm.addEventListener('submit', sendMail)
