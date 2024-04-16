(function () {
    const rounds = document.querySelectorAll('.round')

    if(rounds.length > 0) {
        window.addEventListener('scroll', ()=> {
            rounds.forEach(round => {
                round.style.transform = `translateY(${-window.scrollY * 0.1}px)`
               })
        })
    }
})();