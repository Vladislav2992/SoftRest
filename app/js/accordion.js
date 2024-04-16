(function () {
    const accordion = document.querySelectorAll('.step')
    if(accordion.length < 1 ) false

    accordion.forEach(step => {
        step.addEventListener('click', function () {          
           if (step.classList.contains('active')) {
                step.style.maxHeight = 72 + 'px';
                step.classList.remove('active')
            } else {
                step.style.maxHeight = step.scrollHeight + 'px';
                step.classList.add('active')
            }
        })
    })
})();