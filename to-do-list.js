
//CONST
const TRASH_BOX_ICON = 'trash1.png';
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
    let trashMark = document.createElement("img");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+INPUT_LINE.value+'</div>';
        
    checkbox.type = 'checkbox';
    divChild.appendChild(checkbox);
    
    trashMark.src = TRASH_BOX_ICON;
    trashMark.style.width = '30px';
    trashMark.addEventListener('click',function(){
        divParent.remove();
    })
    divChild.appendChild(trashMark);

    divParent.appendChild(divChild);
    ITEMS_CONTAINER.appendChild(divParent);

    INPUT_LINE.value = '';
}
