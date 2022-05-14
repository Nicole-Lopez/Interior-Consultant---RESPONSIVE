
const logo= document.querySelector('.logo')
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const icon= document.getElementById("icon")

ham.addEventListener('click', () => {
    enlaces.classList.toggle('active');

    if (icon.className=='fa-solid fa-bars') {
    	logo.classList.add('active');
    	icon.className = "fa-solid fa-xmark";
    } else {
    	logo.classList.remove('active');
    	icon.className = "fa-solid fa-bars";
    }

});

