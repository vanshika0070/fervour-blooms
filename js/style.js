

// navbar scroll

  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


///////////////////////////////////////////////////////////

// occasion filter

document.addEventListener("DOMContentLoaded", function () {
    // Select the checkbox for "Birthday's" and set it to checked
    document.getElementById("occasion2").checked = true;
});

///////////////////////////////////////////////////////////

//  filter slider range 

$(document).ready(function () {
     console.log("Script loaded successfully!");
 
     $("#slider-range").slider({
         range: true,
         min: 299,
         max: 10000,
         values: [299, 2500],
         slide: function (event, ui) {
             $("#amount").val("₹" + ui.values[0] + " - ₹" + ui.values[1]);
             $("#min-price").val(ui.values[0]);
             $("#max-price").val(ui.values[1]);
         }
     });
 
     $("#amount").val("₹" + $("#slider-range").slider("values", 0) + " - ₹" + $("#slider-range").slider("values", 1));
 
     $("#min-price, #max-price").on("change", function () {
         var minPrice = parseInt($("#min-price").val());
         var maxPrice = parseInt($("#max-price").val());
 
         if (minPrice >= 299 && maxPrice <= 10000 && minPrice <= maxPrice) {
             $("#slider-range").slider("values", [minPrice, maxPrice]);
             $("#amount").val("₹" + minPrice + " - ₹" + maxPrice);
         } else {
             alert("Please enter a valid price range (₹299 - ₹10,000)");
         }
     });
 });


///////////////////////////////////////////////////////////////////


// search

	document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".header-form-search");
    const searchInput = document.querySelector(".formControl");

    searchForm.addEventListener("submit", function (event) {
        if (searchInput.value.trim() === "") {
            event.preventDefault();
            alert("Please enter a search term.");
        }
    });
});



///////////////////////////////////////////////////////////////////


// wishlist popover 
$(document).ready(function() {

$("body").append('<div id="wishlist-popover" class="custom-popover"></div>');
let popover = $("#wishlist-popover");

$(".icon-wishlist").click(function() {

let button = $(this);

if (button.hasClass("in-wishlist")) {
button.removeClass("in-wishlist");
popover.text("Removed from wishlist");
} else {
button.addClass("in-wishlist");
popover.text("Added to wishlist");
}

popover.stop(true,true).fadeIn(200).delay(1200).fadeOut(300);

});

});



 ///////////////////////////////////////////////////////////////////


  const tabs = document.querySelectorAll(".tab");
  const forms = document.querySelectorAll(".form");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      forms.forEach(f => f.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });




  // ///////////////////////////////////////////////////////
  

// parallax sccroll

const track = document.getElementById("loopTrack");

/* duplicate items for seamless loop */
track.innerHTML += track.innerHTML;

let position = 0;
let lastScroll = 0;

window.addEventListener("scroll", () => {

  let currentScroll = window.scrollY;

  if(currentScroll > lastScroll){
      position += 2;   // scroll down → move right
  } else {
      position -= 2;   // scroll up → move left
  }

  const max = track.scrollWidth / 2;

  if(position >= max) position = 0;
  if(position <= 0) position = max;

  track.style.transform = `translateX(${-position}px)`;

  lastScroll = currentScroll;

});




///////////////////////////////////////////////////


// slider reviews
const slider = document.querySelector(".reviews-slider");

setTimeout(()=>{
slider.innerHTML += slider.innerHTML;
},1000);

let speed = 0.5;

function autoSlide(){
  slider.scrollLeft += speed;

  if(slider.scrollLeft >= slider.scrollWidth / 2){
    slider.scrollLeft = 0;
  }

  requestAnimationFrame(autoSlide);
}

autoSlide();


// //////////////////////////////////////////////////




