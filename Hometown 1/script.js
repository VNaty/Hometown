// Array of image links

var img_Carousel = [
    "https://images.pexels.com/photos/326709/pexels-photo-326709.jpeg",
    "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg",
    "https://images.pexels.com/photos/2225441/pexels-photo-2225441.jpeg"
];


// Set the initial image
let element_carousel = document.getElementById('carousel');
element_carousel.setAttribute("src", img_Carousel[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_carousel2 = document.getElementById('carousel');
  img_Carousel.push(img_Carousel.pop());
  element_carousel2.setAttribute("src", img_Carousel.slice(-1)[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_carousel3 = document.getElementById('carousel');
  img_Carousel.push(img_Carousel.shift());
  element_carousel3.setAttribute("src", img_Carousel[0]);

});