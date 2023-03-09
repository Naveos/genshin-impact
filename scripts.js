const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

let date = new Date(Date.now() + 2592000000);
date = date.toUTCString();
document.cookie = "theme; path=/; expires =" + date;

var theme = "default"
if (document.cookie == "theme; theme=anemo"){
    document.body.style.background = "#c9c9c9";
    document.body.style.color = "#000000";
    document.getElementById('headerList').style.background = "#a6a6a6";
    document.getElementById('submit-btn').style.background = "#c9c9c9";
    document.getElementById('submit-btn').style.color = "#000000";
    document.getElementById('theme').style.background = "#c9c9c9";
    document.getElementById('theme').style.color = "#000000";
}
else if (document.cookie == "theme; theme=cryo"){
    document.body.style.background = "#a7c9c9";
    document.body.style.color = "#000000";
    document.getElementById('headerList').style.background = "#89c6d9";
    document.getElementById('submit-btn').style.background = "#a7c9c9";
    document.getElementById('submit-btn').style.color = "#000000";
    document.getElementById('theme').style.background = "#a7c9c9";
    document.getElementById('theme').style.color = "#000000";
}
else if (document.cookie == "theme; theme=dendro"){
    document.body.style.background = "#9dc2a4";
    document.body.style.color = "#000000";
    document.getElementById('headerList').style.background = "#74cf87";
    document.getElementById('submit-btn').style.background = "#9dc2a4";
    document.getElementById('submit-btn').style.color = "#000000";
    document.getElementById('theme').style.background = "#9dc2a4";
    document.getElementById('theme').style.color = "#000000";
}
else if (document.cookie == "theme; theme=electro"){
    document.body.style.background = "#be71bf";
    document.body.style.color = "#000000";
    document.getElementById('headerList').style.background = "#a754a8";
    document.getElementById('submit-btn').style.background = "#be71bf";
    document.getElementById('submit-btn').style.color = "#000000";
    document.getElementById('theme').style.background = "#be71bf";
    document.getElementById('theme').style.color = "#000000";
}
else if (document.cookie == "theme; theme=geo"){
    document.body.style.background = "#baba93";
    document.body.style.color = "#000000";
    document.getElementById('headerList').style.background = "#afb370";
    document.getElementById('submit-btn').style.background = "#baba93";
    document.getElementById('submit-btn').style.color = "#000000";
    document.getElementById('theme').style.background = "#baba93";
    document.getElementById('theme').style.color = "#000000";
}
else if (document.cookie == "theme; theme=hydro"){
    document.body.style.background = "#a3bfd4";
    document.body.style.color = "#000000";
    document.getElementById('headerList').style.background = "#70a2b3";
    document.getElementById('submit-btn').style.background = "#a3bfd4";
    document.getElementById('submit-btn').style.color = "#000000";
    document.getElementById('theme').style.background = "#a3bfd4";
    document.getElementById('theme').style.color = "#000000";
}
else if (document.cookie == "theme; theme=pyro"){
    document.body.style.background = "#b8848a";
    document.body.style.color = "#000000";
    document.getElementById('headerList').style.background = "#9c5f5f";
    document.getElementById('submit-btn').style.background = "#b8848a";
    document.getElementById('submit-btn').style.color = "#000000";
    document.getElementById('theme').style.background = "#b8848a";
    document.getElementById('theme').style.color = "#000000";
}

function changeTheme() {
    var t = document.getElementById('theme').value;
    if (t != "theme; theme=choose"){
        console.log(t)
        document.cookie = "theme="+t+"; path=/; expires =" + date;
    }
}

/* Navbar */


function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}

toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);