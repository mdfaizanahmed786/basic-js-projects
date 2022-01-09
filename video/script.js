console.log("This is my first responsive website");

//Accessing variables
const menuItem = document.querySelector(".menuItem");
const menuItems = document.querySelector(".items");

menuItem.addEventListener("click", () => {
  menuItems.classList.toggle("visibleMenu");
  menuItem.classList.toggle("animateMenu");
});
