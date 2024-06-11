const nav = document.getElementById('navigation');
        document.addEventListener('scroll', () => {
            nav.classList.add('scrolled');
            setTimeout(() => {
                if (window.pageYOffset === 0 && nav.classList.contains('scrolled')) {
                    nav.classList.remove('scrolled');
                }
            }, 1000);
        });