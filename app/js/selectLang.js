(function () {
    const langBtn = document.querySelector('.language-btn')
    const langList = document.querySelector('.language-list')

    langBtn.addEventListener('click', ()=> {
        langList.classList.toggle('active')
    })

    langList.querySelectorAll('.language-item').forEach(item => {        
        item.addEventListener('click', function() {
            removeActiveClass()            
            langBtn.innerHTML = this.innerHTML;
            this.classList.add('active')
            langList.classList.remove('active');
        })
    })

    function removeActiveClass() {
        langList.querySelectorAll('.language-item').forEach(item => {
            item.classList.remove('active');            
        })
    }
})();