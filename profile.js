const btnClick = document.querySelector('#btn-click');
const btnAdd = document.querySelector('#btn-add')
const contGif = document.querySelector('#container-gif');
const listDucks = document.querySelector('#list-ducks')

btnClick.addEventListener('click', function()  {
    contGif.style.opacity = 1;
    btnClick.style.opacity = 0;
    btnAdd.style.opacity = 1
    
})

btnAdd.addEventListener('click', function() {
    const li = document.createElement("li");
    const txt = document.createTextNode("like a cute white duck dancing");

    li.append(txt);
    listDucks.append(li);
})