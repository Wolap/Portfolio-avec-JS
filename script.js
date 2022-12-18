

const btnDeplier = document.querySelector('#btn-deplier')
const cartes = document.querySelectorAll('#cartes-header')
const btnCartes = document.querySelectorAll('#btn-general')

btnDeplier.addEventListener('click', function() {
    for (let i = 0; i <= 3; i++) {
        cartes[i].classList.toggle("apparition");
        btnCartes[i].classList.toggle("apparition")
    }
})