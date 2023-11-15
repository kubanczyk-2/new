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

function initMap() {
    let mapOptions = {
        center: { lat: 52.239952087402344, lng: 21.023977279663086 }, // Współrzędne geograficzne (szerokość i długość geograficzna)
        zoom: 14, // Poziom zbliżenia mapy
    };

    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    let marker = new google.maps.Marker({
        position: { lat: 52.239952087402344, lng: 21.023977279663086 },
        map: map,
        title: "Nagłówek markera",
    });
}

initMap();