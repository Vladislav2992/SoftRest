(function () {
    const tags = document.querySelectorAll('.tag')

    if(tags.length > 0) {
        tags.forEach(tag => {
            tag.addEventListener('click', ()=> {
                tag.classList.contains('active') ? tag.classList.remove('active') : tag.classList.add('active')
            })
        })
    }
})();