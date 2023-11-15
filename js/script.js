const footerYear = document.querySelector('.footer__year');
const headerBackground = document.querySelector('.header-background');
const headerText = document.querySelector('.header-text p');


document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".photo1, .photo2, .photo3, .photo4");
    const click1 = document.querySelector(".click1");
    const click2 = document.querySelector(".click2");
    let currentIndex = 0;

    // Funkcja do ukrywania wszystkich zdjęć
    function hideAllPhotos() {
        photos.forEach((photo) => {
            photo.style.opacity = 0;
        });
    }

    // Funkcja do wyświetlania określonego zdjęcia
    function showPhoto(index) {
        hideAllPhotos();
        photos[index].style.opacity = 1;
    }

    // Przełącz do poprzedniego zdjęcia
    function prevPhoto() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showPhoto(currentIndex);
    }

    // Przełącz do następnego zdjęcia
    function nextPhoto() {
        currentIndex = (currentIndex + 1) % photos.length;
        showPhoto(currentIndex);
    }

    // Obsługa kliknięć przycisków
    click1.addEventListener("click", prevPhoto);
    click2.addEventListener("click", nextPhoto);

    // Funkcja do automatycznego przełączania zdjęć co 3 sekundy
    function autoNextPhoto() {
        nextPhoto();
    }

    
    // Funkcja do resetowania interwału
    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(autoNextPhoto, 5000);
    }
    
    // Uruchom automatyczne przełączanie co 3 sekundy
    interval = setInterval(autoNextPhoto, 5000);
    

    // Pokaż pierwsze zdjęcie na starcie
    showPhoto(currentIndex);
});
















const handleCurrentYear = () => {
    const year =(new Date).getFullYear();
    footerYear.innerText = year;
}

window.addEventListener("scroll", function() {
    let nav = document.querySelector(".container");
    if (window.scrollY > 10) { // Zmienić wartość na wymaganą wartość przewinięcia
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});



handleCurrentYear();