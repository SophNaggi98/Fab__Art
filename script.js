let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 5000);

(function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, 5000);

  // Smooth scroll for the down arrow
  document
    .querySelector(".down-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
})();

document.querySelector(".down-arrow").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#next-section").scrollIntoView({
    behavior: "smooth",
  });
});

// Add click event listener to the glass icon
document
  .querySelector(".grid-item.interactive .overlay img")
  .addEventListener("click", function () {
    // Open a new page with the larger image and description
    window.open("larger_image.html", "_blank");
  });

// Add click event listener to the magnifying glass icon
document
  .querySelector(".grid-item.interactive .overlay .magnifying-glass")
  .addEventListener("click", function () {
    // Get the image element
    var image = document.querySelector(".grid-item.interactive img");

    // Change the image source
    image.src = "immages/Rectangle 82.png"; // Replace "new_image.jpg" with the path to your new image
  });

// Add click event listener to the magnifying glass icon
document
  .querySelector(".grid-item.interactive .overlay .magnifying-glass")
  .addEventListener("click", function () {
    // Replace the image source with your desired image path
    var imageSrc = "immages/Rectangle 82.png";

    // Open a new page with the larger image
    window.open(
      "larger_image.html?src=" + encodeURIComponent(imageSrc),
      "_blank"
    );
  });

// Get the button:
let mybutton = document.getElementById("Top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function submitForm() {
  // Get selected values from each form
  var material = document.querySelector('input[name="material"]:checked').value;
  var shape = document.querySelector('input[name="shape"]:checked').value;
  var stone = document.querySelector('input[name="stone"]:checked').value;

  // Construct URL with selected options
  var checkoutURL =
    "checkout.html?material=" +
    material +
    "&shape=" +
    shape +
    "&stone=" +
    stone;

  // Redirect to the checkout page
  window.location.href = checkoutURL;
}

// Select all input fields
const materialInput = document.getElementById("material");
const shapeInput = document.getElementById("shape");
const stoneInput = document.getElementById("stone");

// Select the display elements
const materialDisplay = document.getElementById("material-display");
const shapeDisplay = document.getElementById("shape-display");
const stoneDisplay = document.getElementById("stone-display");

// Add event listeners to inputs
materialInput.addEventListener("change", updateSelectedMaterial);
shapeInput.addEventListener("change", updateSelectedShape);
stoneInput.addEventListener("change", updateSelectedStone);

//  material
function updateSelectedMaterial() {
  materialDisplay.textContent = materialInput.value;
}

//  shape
function updateSelectedShape() {
  shapeDisplay.textContent = shapeInput.value;
}

//  stone
function updateSelectedStone() {
  stoneDisplay.textContent = stoneInput.value;
}
