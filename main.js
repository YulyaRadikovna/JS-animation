gsap.from('.hero__title', {duration: 2, opacity: 0, ease: "circ.out"});
gsap.from('.hero__title', {duration: 1.5, y: 170, ease: "expo"});

gsap.from('.hero__btn', {duration: 2, opacity: 0, ease: "circ.out"});
gsap.from('.hero__btn', {duration: 1.5, y: 170, ease: "expo"});

gsap.from('.hero__descr', {duration: 1, opacity: 0, delay: 1});

gsap.from('#photo1', {duration: 0.3, opacity: 0, delay: 1.3});
gsap.from('#photo2', {duration: 0.3, opacity: 0, delay: 1.6});
gsap.from('#photo3', {duration: 0.3, opacity: 0, delay: 1.9});

gsap.from('.photos__author', {duration: 1, opacity: 0, delay: 2.2});



// BURGER

var open = document.querySelector('.burger');
var close = document.querySelector('.close');

var tl = gsap.timeline({paused: true});

tl.fromTo('.menu', {display: 'none', opacity: 0}, {display: 'block', duration: 0.2, opacity:1, ease: 'sine'})
.from('.menu__top', {duration: 0.3, y: -30, opacity: 0,  ease: 'sine'})
.from('.nav__list', {duration: 0.3, y: 30, opacity: 0,  ease: 'sine'})
.from('.social, .menu__right', {duration: 0.3, y: 30, opacity: 0,  ease: 'sine'})

open.onclick = function() {
  tl.play();
}

close.onclick = function() {
  tl.reverse();
}
