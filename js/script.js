// **CURSOR

let cursor = document.querySelector('.cursor');
let smallCursor = document.querySelector('.smallCursor');
let smallCursor1 = document.querySelector('.smallCursor1');
let smallCursor2 = document.querySelector('.smallCursor2');

function customMouseCursor (event) {
    
    let pageX = event.pageX
    let pageY = event.pageY


    cursor.style.top =  `${pageY}px`;
    cursor.style.left =  `${pageX}px`;

    smallCursor.style.top =  `${pageY}px`;
    smallCursor.style.left =  `${pageX}px`;

    smallCursor1.style.top =  `${pageY}px`;
    smallCursor1.style.left =  `${pageX}px`;

    smallCursor2.style.top =  `${pageY}px`;
    smallCursor2.style.left =  `${pageX}px`;

}

window.addEventListener("mousemove",customMouseCursor);

// **MODE

let darkmodeButton = document.querySelector('.darkmodeButton');
let body = document.querySelector('body');
let heading = document.querySelector('.modesection h2');

const darkMode = () => {
    body.classList.toggle('darkmode');

    if(body.classList.contains('darkmode')){
        heading.innerHTML = 'Dark Mode';
    }

    else{
        heading.innerHTML = 'Light Mode';
    }
    
}


darkmodeButton.addEventListener('click',darkMode);


