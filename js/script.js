const menu = document.querySelector("#menu-btn");
const header = document.querySelector(".header");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

const themeToggler = document.querySelector("#theme-toggler");
themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
