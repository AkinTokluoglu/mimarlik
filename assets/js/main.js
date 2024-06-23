/**
* Template Name: UpConstruction
* Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
* Updated: Jun 14 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

})();


// Dinamik HTML oluşturma Mutfak
const portfolioContainerKitchen = document.getElementById('portfolio-container-kitchen');
const portfolioItemsKitchen = Array.from({ length: 29 }, (_, i) => `
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-kitchen">
<div class="portfolio-content h-100">
<a href="assets/img/projects/mutfak-${i + 1}.webp" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
<img src="assets/img/projects/mutfak-${i + 1}.webp" class="img-fluid" alt="Kayseri İç Mimar Mutfak">
</a>
</div>
</div>
`).join('');

portfolioContainerKitchen.innerHTML = portfolioItemsKitchen;

// Dinamik HTML oluşturma Giyinme Odasi
const portfolioContainerDressing = document.getElementById('portfolio-container-dressing');
const portfolioItemsDressing = Array.from({ length: 11 }, (_, i) => `
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-dressing">
<div class="portfolio-content h-100">
<a href="assets/img/projects/giyinme-odasi-${i + 1}.webp" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
<img src="assets/img/projects/giyinme-odasi-${i + 1}.webp" class="img-fluid" alt="Kayseri İç Mimar Giyinme Odasi">
</a>
</div>
</div>
`).join('');

portfolioContainerDressing.innerHTML = portfolioItemsDressing;


// Dinamik HTML oluşturma Banyo
const portfolioContainerBathroom = document.getElementById('portfolio-container-bathroom');
const portfolioItemsBathroom = Array.from({ length: 4 }, (_, i) => `
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-bathroom">
<div class="portfolio-content h-100">
<a href="assets/img/projects/banyo-${i + 1}.webp" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
<img src="assets/img/projects/banyo-${i + 1}.webp" class="img-fluid" alt="Kayseri İç Mimar Banyo">
</a>
</div>
</div>
`).join('');

portfolioContainerBathroom.innerHTML = portfolioItemsBathroom;

// Dinamik HTML oluşturma Cafe
const portfolioContainerCafe = document.getElementById('portfolio-container-cafe');
const portfolioItemsCafe = Array.from({ length: 8 }, (_, i) => `
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-cafe">
<div class="portfolio-content h-100">
<a href="assets/img/projects/cafe-${i + 1}.webp" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
<img src="assets/img/projects/cafe-${i + 1}.webp" class="img-fluid" alt="Kayseri İç Mimar Cafe">
</a>
</div>
</div>
`).join('');

portfolioContainerCafe.innerHTML = portfolioItemsCafe;

// Dinamik HTML oluşturma Otel
const portfolioContainerHotel = document.getElementById('portfolio-container-hotel');
const portfolioItemsHotel = Array.from({ length: 12 }, (_, i) => `
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-hotel">
<div class="portfolio-content h-100">
<a href="assets/img/projects/otel-odasi-${i + 1}.webp" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
<img src="assets/img/projects/otel-odasi-${i + 1}.webp" class="img-fluid" alt="Kayseri İç Mimar Otel Odasi">
</a>
</div>
</div>
`).join('');

portfolioContainerHotel.innerHTML = portfolioItemsHotel;

// Dinamik HTML oluşturma TV
const portfolioContainerTV = document.getElementById('portfolio-container-tv');
const portfolioItemsTV = Array.from({ length: 10 }, (_, i) => `
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-tv">
<div class="portfolio-content h-100">
<a href="assets/img/projects/televizyon-unitesi-${i + 1}.webp" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
<img src="assets/img/projects/televizyon-unitesi-${i + 1}.webp" class="img-fluid" alt="Kayseri İç Mimar Televizyon Unitesi">
</a>
</div>
</div>
`).join('');

portfolioContainerTV.innerHTML = portfolioItemsTV;

const lightbox = GLightbox({
  selector: '.glightbox'
});

// Dinamik HTML içerik eklendikten sonra yeniden başlat
portfolioContainerDressing.innerHTML = portfolioItemsDressing;
lightbox.reload();  // glightbox eklentisini yeniden başlatmak için