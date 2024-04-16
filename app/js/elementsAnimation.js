(function () {
    const animItems = document.querySelectorAll('.anim-items')

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 6;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
               
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active')
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }

        setTimeout(() => animOnScroll(), 300);
    }

    setTimeout(() => {
        document.querySelector('.main__description') ? document.querySelector('.main__description').classList.add('_active') : false;
    }, 1000);   
    
    const services = document.querySelectorAll('.service__card')

    if(services.length > 0) {
        setTimeout (() => {
            services.forEach(service => service.classList.add('_active'))
        }, 1500)
    }
})();

