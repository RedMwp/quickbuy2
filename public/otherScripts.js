let menuIcon = document.getElementById('menu');
let closeBtn = document.getElementById('close-btn');
let menuWraper = document.getElementById('menu-wraper');
let menu = document.getElementById('mobile-menu');

function openMenu() {
  menu.style.left = '0';
  menu.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closeMenu() {
  menu.style.left = '-100vw';
  menu.style.backgroundColor = 'rgba(0,0,0,0.0)';
}
//open and close menu in mobile
menuIcon.onclick = openMenu;
closeBtn.onclick = closeMenu;
menuWraper.onclick = closeMenu;
openMenu();
