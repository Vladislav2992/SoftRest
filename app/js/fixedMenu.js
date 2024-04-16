(function () {
    window.addEventListener('scroll', ()=>(window.scrollY > 0) ? document.querySelector('.header').classList.add('fixed') : document.querySelector('.header').classList.remove('fixed'))
})();