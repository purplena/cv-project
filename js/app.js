// ********** set date ************
// select span
var date = document.getElementById("date");

if (date) {
  date.innerHTML = new Date().getFullYear();
}

// document.getElementById("date").addEventListener("click", () => {
//   document.getElementById("date").style.color = "red";
// });

// console.log(document.getElementById("date").outerHTML);
// console.log(document.getElementById("date").style.color);

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const navBtnClose = document.getElementById("nav-toggle-close");
const links = document.getElementById("nav-links");

// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
  navBtn.classList.toggle("hidden");
  navBtnClose.classList.toggle("visible");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});
