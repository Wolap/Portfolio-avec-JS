const btnClick = document.querySelector('#btn-click');
const contGif = document.querySelector('#container-gif');

btnClick.addEventListener('click', function()  {

    contGif.style.opacity = 1;
    btnClick.style.opacity = 0;
})