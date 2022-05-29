
//CONST
const ITEMS_CONTAINER = document.getElementsByClassName('to-do-items')[0];
const INPUT_LINE = document.querySelector("input");
const tasksListElement = document.querySelector(`.to-do-items`);
const taskElements = tasksListElement.querySelectorAll(`.to-do-items`);


for (const task of taskElements) {
    task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
})
  
tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
});

const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
    
    const nextElement = (cursorPosition < currentElementCenter) ?
      currentElement :
      currentElement.nextElementSibling;
    
    return nextElement;
  };
  
  tasksListElement.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();
    
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`item`);
      
    if (!isMoveable) {
      return;
    }
    
    const nextElement = getNextElement(evt.clientY, currentElement);
    
    if (
      nextElement && 
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
    ) {
      return;
    }
          
      tasksListElement.insertBefore(activeElement, nextElement);
  });

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
    let textBlock = document.createElement('div');
    let divChild = document.createElement('div'); 
    let checkbox = document.createElement('input');
    let deleteButton = document.createElement('button');

    //Create class
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.innerText = 'Удалить';
    divChild.setAttribute('class', 'flex');


    divParent.className = "item";
    divParent.draggable = 'true';

    textBlock.textContent = INPUT_LINE.value;
    textBlock.setAttribute('class', 'textBlock');
    divParent.appendChild(textBlock);


    checkbox.type = 'checkbox';
    checkbox.style.width = '30px';
    checkbox.style.height ='30px';
    divChild.appendChild(checkbox);


    deleteButton.addEventListener('click',function(){
        divParent.remove();
    })
    divChild.appendChild(deleteButton);

    divParent.appendChild(divChild);
    ITEMS_CONTAINER.appendChild(divParent);

    INPUT_LINE.value = '';
}
