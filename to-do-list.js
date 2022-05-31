
//CONST
const ITEMS_CONTAINER = document.getElementsByClassName('to-do-items')[0];
const INPUT_LINE = document.querySelector("input");
const toDoListElement = document.querySelector(`.to-do-items`);
const taskElements = toDoListElement.querySelectorAll(`.to-do-items`);
const MADE_CONTAINER = document.getElementsByClassName('made')[0];


for (const task of taskElements) {
    task.draggable = true;
}

toDoListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
})
  
toDoListElement.addEventListener(`dragend`, (evt) => {
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

//
toDoListElement.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();

  const activeElement = toDoListElement.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable = activeElement !== currentElement &&
  currentElement.classList.contains(`item`);
        
  if (!isMoveable) {
  return;
  }
      
  const nextElement = getNextElement(evt.clientY, currentElement);
      
  if (nextElement && activeElement === nextElement.previousElementSibling || activeElement === nextElement) {
        return;
  }
            
  toDoListElement.insertBefore(activeElement, nextElement);
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

  checkbox.addEventListener('change',function(){
    if(checkbox.checked)
    {
      MADE_CONTAINER.appendChild(divParent);
    }
    else {
      ITEMS_CONTAINER.appendChild(divParent);
    }
  })

  divChild.appendChild(checkbox);

  deleteButton.addEventListener('click',function(){
      divParent.remove();
  })
  divChild.appendChild(deleteButton);

  divParent.appendChild(divChild);
  ITEMS_CONTAINER.appendChild(divParent);

  INPUT_LINE.value = '';
}