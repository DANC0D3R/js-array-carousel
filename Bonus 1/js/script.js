// Assegnazione variabile alla sezione slide
const slides = document.getElementById('slides');

// Creazione array percorsi immagini
const allImg = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Ciclo per creare un numero di slide all'interni di slides uguale al numero di immagini
for (let i = 0; i < allImg.length; i++){
    slides.innerHTML += `<div class="slide"><img src="${allImg[i]}"></div>`;
}

// Assegnazione classe current alla prima slide in modo che sia visibile
document.querySelector('#slides .slide').classList.add('current');

// Creazione variabile current, indentifca la slide attualmente visibile
let current = 0;

// Creazione arrray con le slide
const allSlides = document.getElementsByClassName('slide');
console.log(allSlides);

// Selezione bottoni
const buttonPrevious = document.querySelector('.button-previous');
const buttonNext = document.querySelector('.button-next');

// Bottone slide precedente
buttonPrevious.addEventListener ('click',
	function() {
        // Elimina la classe current alla slide corrente
        allSlides[current].classList.remove('current');

        // Condizioni se la prima slide è la corrente:
        if (current == 0) {
            //Assegazione della classe current all'indice dell'ultima slide
            current = allSlides.length - 1;
        }
        else {
            // Variabile current -1
            current--;
        }
        // Assegnazione della classe current alla slide precedente
        allSlides[current].classList.add('current');
	}
)

// Bottone slide successiva
buttonNext.addEventListener ('click',
    function() {
        // Elimina la classe current alla slide corrente
        allSlides[current].classList.remove('current');

        // Condizioni se l'ultima slide è la corrente:
        if (current == allSlides.length - 1) {
            //Imposto current a 0
            current = 0;
        }
        else {
            // Variabile current +1
            current++;
        }
        // Assegnzione la classe current alla slide successiva
        allSlides[current].classList.add('current');
    }
)