//Mobile Menu

document.querySelector(".mobileBtnContainer").addEventListener("click", () => {

  document.querySelector("nav").classList.toggle("navToggle");

  document.getElementById("mobileBtnLine1").classList.toggle("mobileBtnLine1X");
  document.getElementById("mobileBtnLine2").classList.toggle("mobileBtnLine2X");
  document.getElementById("mobileBtnLine3").classList.toggle("mobileBtnLine3X");

});

//Scroll to top of the page button

document.querySelector('.backToTopBtn').addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});