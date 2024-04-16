function successMessage () {
    const modal = document.querySelector('.modal')

    if(modal) {
        modal.querySelector('form').addEventListener('submit', (e)=> {
            e.preventDefault()

           e.target.addEventListener('click', ()=> {
                modal.querySelector('.modal__success').classList.add('active')

                setTimeout(() => {
                    modal.querySelector('.modal__success').classList.remove('active')
                }, 2000);
            })
        })
    }
}

successMessage();