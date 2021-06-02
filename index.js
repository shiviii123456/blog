const ullist = document.querySelector(".ul-list");
const middleheader = document.querySelector(".middleheader");
console.log(ullist);
const open = document.querySelector(".openmenu");
const close = document.querySelector(".closemenu");

open.addEventListener("click", show);
close.addEventListener("click", hide);
function show() {
    middleheader.style.display = "block";
    ullist.style.display = 'flex';
    ullist.style.top = '0';
}
function hide() {
    middleheader.style.display = "none";
    ullist.style.top = "-100%";
}
setInterval(function () {
    const mediaQuery = window.matchMedia('(min-width: 801px)');
    if (mediaQuery.matches) {
        middleheader.style.display = "block";
    }
    else {
        middleheader.style.display = "none";
    }
}, 10000);