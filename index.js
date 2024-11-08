
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}


var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


var map1 = L.map('map1').setView([-6.783484, 110.865874], 12); // Kudus
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);
L.marker([-6.783484, 110.865874]).addTo(map1)
    .bindPopup('Crust <em>&amp;</em> Crave Bakery')
    .openPopup();

var map2 = L.map('map2').setView([-0.970354, 116.710481], 12); // Kutai
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);
L.marker([-0.970354, 116.710481]).addTo(map2)
    .bindPopup('Crust <em>&amp;</em> Crave Bakery - Kutai')
    .openPopup();

var map3 = L.map('map3').setView([-6.177567, 106.792021], 12); // Jakarta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);
L.marker([-6.177567, 106.792021]).addTo(map3)
    .bindPopup('Crust <em>&amp;</em> Crave Mall Taman Anggrek')
    .openPopup();

var map4 = L.map('map4').setView([-2.955189, 104.747862], 12); // Palembang
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map4);
L.marker([-2.955189, 104.747862]).addTo(map4)
    .bindPopup('Crust <em>&amp;</em> Crave Mall - Palembang')
    .openPopup();

