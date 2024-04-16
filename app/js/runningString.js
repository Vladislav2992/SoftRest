(function () {
    const runningString = document.querySelector('.main .running-string')
    if(runningString) {
        window.addEventListener('scroll', ()=>{            
            runningString.style.transform = `translateX(${-350 + window.scrollY * 0.5}px)`
        })
    }
})();