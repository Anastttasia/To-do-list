
//CONST

const toDoItems = document.getElementsByClassName ('to-do-items')[0];
// const input = document.getElementById("input");
const button = document.getElementById("button");
// const trashIcon = document.getElementById('trash');

const checkBox = document.getElementsByClassName('checkBox-container')

// const CHECK_BOX_ICON = 'icon8.png';

// const CHECK_BOX_ICON = document.getElementById('cb1');

const TRASH_BOX_ICON = 'trash1.png';


// const GREEN_CHECK_BOX_ICON = 'icon9.png'

const input = document.querySelector("input");

// 1 вариант
//Создать JS класс для реализации чекбокса и в нём сделать метод, который будет менять флаг isDone и в зависимости от его значения выбирать изображения

// class CHECK_IMG {

// }

// 2 вариант
//Сравнить значение .src элемента с константой и поменять его на другой

// function colorCheckMarc(element) {
//     if (element.src = CHECK_BOX_ICON) {
//       element.src = GREEN_CHECK_BOX_ICON;  
//     } else (element.src = GREEN_CHECK_BOX_ICON) {
//         element.src = CHECK_BOX_ICON;
//     }
// }


// function colorCheckMarc(element) {
//     element.src = GREEN_CHECK_BOX_ICON
// }


// function returnColorCheckMarc(element) {
//     element.src = CHECK_BOX_ICON
// }

// Создание дела

document.querySelector("button").addEventListener("click", () => {
    addItem(input.value);
});

input.addEventListener('keydown', (event) =>{
    if(event.key === "Enter") addItem(input.value);
})



function addItem(){
    var divParent = document.createElement('div');
    var divChild = document.createElement('div');   

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    const CHECK_BOX_ICON = document.getElementById('cb1');
    divChild.appendChild(CHECK_BOX_ICON);

    // let cheсkMark= document.getElementById('cb1');
    // // cheсkMark.src = CHECK_BOX_ICON;

    // divChild.appendChild(cheсkMark);

            // let GreencheсkMark = document.createElement("img");
            // GreencheсkMark.src = GREEN_CHECK_BOX_ICON;

    let trashMark = document.createElement("img");
    trashMark.src = TRASH_BOX_ICON;


    // divChild.appendChild(cheсkMark);

    // cheсkMark.style.width = '30px';
    // cheсkMark.addEventListener('click', function()  {
    //     colorCheckMarc(this)
    // })

            // divChild.appendChild(GreencheсkMark);

            // GreencheсkMark.style.width = '30px';
            // GreencheсkMark.addEventListener('click', function()  {
            //     returnColorCheckMarc(this)
            // })

    divChild.appendChild(trashMark);

    trashMark.style.width = '30px';
    trashMark.addEventListener('click',function(){
        divParent.remove();
    })

    divChild.appendChild(trashMark);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    // checkBox.appendChild(divParent);

    input.value = '';

}