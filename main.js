// Cookie Banner

const cookieBanner = document.getElementById('cookiesBanner');
const cokkieButtons = document.querySelectorAll('.cokkie-button');

cokkieButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        cookieBanner.style.display = 'none';
    });
});

// Speakers => go to Screen Two - Speakers

const speakersLink = document.getElementById('speakersLink');
const speakersScreen = document.getElementById('speakersScreen');

speakersLink.addEventListener('click', (event) => {
    event.preventDefault();
    speakersScreen.scrollIntoView({ behavior: 'smooth' });
});

// Sessions => go to screen Four - Sessions

const sessionsLink = document.getElementById('sessionsLink');
const sessionsScreen = document.getElementById('sessionsScreen');

sessionsLink.addEventListener('click', (event) => {
    event.preventDefault();
    sessionsScreen.scrollIntoView({behavior: 'smooth'});
});