(function (){
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const closeBtn = document.querySelector('.close-btn');
    
    burger.addEventListener('click', ()=>{
        menu.classList.add('active')
    });
    closeBtn.addEventListener('click', ()=>{
        menu.classList.remove('active')
    });
})();