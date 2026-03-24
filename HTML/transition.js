const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-list");

menu.addEventListener("click", (e) => {
  e.stopPropagation();
  menuList.classList.toggle("active");
});

document.body.addEventListener("click", () => {
  menu.classList.remove("active");
});

// menu.addEventListener("click", => (e){
//     e.stopPropagation()
// })