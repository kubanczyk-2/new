const headerBackground = document.querySelector('.header-background');
const footerYear = document.querySelector('.footer__year');

window.addEventListener("scroll", function() {
    let nav = document.querySelector(".container");
    if (window.scrollY > 10) { // Zmienić wartość na wymaganą wartość przewinięcia
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


const handleCurrentYear = () => {
    const year =(new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();