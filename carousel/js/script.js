console.log("This is carousel tutorial");

const slideImages = document.querySelectorAll(".slide");
const nexBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

slideImages.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
console.log(slideImages.length);

let counter = 0;
prevBtn.disabled = true;

nexBtn.addEventListener("click", () => {
  counter++;

  carousel();
});
prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  if (counter == slideImages.length) {
    counter = 0;
    prevBtn.disabled = true;
  } else if (counter == 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  slideImages.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
