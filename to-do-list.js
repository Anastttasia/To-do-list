
//CONST
const ITEMS_CONTAINER = document.getElementsByClassName('to-do-items')[0];
const INPUT_LINE = document.querySelector("input");

// Создание дела

//Init
document.querySelector("button").addEventListener("click", () => {
    addItem(INPUT_LINE.value);
});

INPUT_LINE.addEventListener('keydown', (event) =>{
    if(event.key === "Enter") addItem(INPUT_LINE.value);
})


function addItem(){
    //Create elements
    let divParent = document.createElement('div');
    let divChild = document.createElement('div'); 
    let checkbox = document.createElement('input');
    let trashMark = document.createElement('input');

    divParent.className = "item";
    divParent.innerHTML = '<div>'+INPUT_LINE.value+'</div>';
    
    divChild.style.display = 'flex';
    divChild.style.alignItems = 'center';

    checkbox.type = 'checkbox';
    checkbox.style.width = '30px';
    checkbox.style.height ='30px';
    divChild.appendChild(checkbox);

    trashMark.type = 'button';
    trashMark.value = 'Удалить'; 
    trashMark.style.fontFamily = 'Fredoka One, cursive';
    trashMark.style.width = '80px';
    trashMark.style.height ='30px';
    trashMark.style.borderRadius = '50px'
    trashMark.style.border = '1px solid red';
    trashMark.style.marginLeft = '10px';
    trashMark.style.color = '#FF7D73';
    divChild.appendChild(trashMark);

    trashMark.addEventListener('click',function(){
        divParent.remove();
    })
    divChild.appendChild(trashMark);

    divParent.appendChild(divChild);
    ITEMS_CONTAINER.appendChild(divParent);

    INPUT_LINE.value = '';
}
