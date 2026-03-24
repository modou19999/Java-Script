const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-list");

menu.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
