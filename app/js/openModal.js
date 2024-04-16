(function () {
    const openModal = document.querySelectorAll('.open-modal__btn');
    const modal = document.querySelector('.modal')

    if(openModal.length > 0) {
        openModal.forEach(btn => {
            btn.addEventListener('click', ()=> {
                modal.classList.add('active');
                document.body.style.overflowY = 'hidden'
            })
        })
    }
    modal.querySelector('.modal__close-btn').addEventListener('click', ()=> {
        modal.classList.remove('active');
        document.body.style.overflowY = 'auto'
    })
})();