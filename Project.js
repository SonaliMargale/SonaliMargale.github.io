//background image change
let images = ["img/slide_01.jpg","img/slide_02.jpg","img/slide_03.jpg"];
let currentIndex = 0;

function changeBackground() {
    var bannerImage = document.getElementById("bannerImage")
    bannerImage.src = images[currentIndex]; // when src is used with <img> tag we are essentially changing the which image being displayed

    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
}

const imag = document.querySelectorAll('.overlay-image');

    imag.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.nextElementSibling.style.display = 'block';
        });
        image.addEventListener('mouseout', () => {
            image.nextElementSibling.style.display = 'none';
        });
    });

    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }