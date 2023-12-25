 document.addEventListener('DOMContentLoaded', () => {
            const bar = document.getElementById('bar');
            const closeBtn = document.getElementById('close');
            const nav = document.getElementById('navbar');

            if (bar) {
                bar.addEventListener('click', () => {
                    nav.classList.toggle('active');
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    nav.classList.remove('active');
                });
            }
});
    