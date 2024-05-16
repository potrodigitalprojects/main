const parentBars = document.getElementById('container__btn-bars');
const bar1 = document.getElementById('btn__bar1');
const bar2 = document.getElementById('btn__bar2');
const bar3 = document.getElementById('btn__bar3');
const navBar = document.getElementById('navbar');

let count = 0;

function animatedBar1() {
    bar1.style.animation = 'bar-menu1 .6s both';
}

function animatedBar2() {
    bar2.style.animation = 'bar-menu2 .6s both';
}

function animatedBar3() {
    bar3.style.animation = 'bar-menu3 .6s both';
}

function viewNav() {
    navBar.style.display = 'flex';
    navBar.style.animation = 'navbar 1s both';
}

parentBars.addEventListener('click', () => {
    if (count == 0) {
        animatedBar1();
        animatedBar2();
        animatedBar3();
        viewNav();
        count = 1;
    } else {
        bar1.style.animation = 'bar-change-menu1 .6s both';
        bar2.style.animation = 'bar-change-menu2 .6s both';
        bar3.style.animation = 'bar-change-menu3 .6s both';

        navBar.style.animation = 'navbar-change 1s both';
        setTimeout(() => {
            navBar.style.display = 'none';
        }, 1000);
        count = 0;
    }
});