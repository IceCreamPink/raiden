let menu = document.querySelector("#menu-icon");
let navlis = document.querySelector("navlis");

menu.onclick = () => {
  menu.classlist.toggle("bx-menu");
  navlis.classlist.toggle("open");
};
