/* abre e fecha o menu quando clica no icone: listra e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clica em um item do menu,fechar o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar a header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura da header
    header.classList.remove('scroll')
  }
}

/*review slider*/
const swiper = new Swiper('.swiper-container', {
  sliderPerView : 1,
  pagination: {
      el:'.swiper-pagination'
  },
  keyboard:true,
  breakpoints: {
      767:{
      slidesPerView: 2,
      setWrapperSize: true,
      }
  }
})

/**Mostrar elemntos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin:'top',
  distance: '30px',
  duration: 700,
  reset: true,
})


scrollReveal.reveal(
  `#home .text, #home .image,
  #services header,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand,footer .social`,
  { interval: 100 }
)


/*===== back to top botão=======*/

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*menu ativa conforme a seção visível na página*/
const sections = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
