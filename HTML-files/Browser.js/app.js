console.log(document.documentElement.childNodes);

document.documentElement.childNodes[2].style.backgroundColor = 'red';

// To change background color always when refresh the page

function randomNumber(min,max) {
    return parseInt(Math.random() * (max-min) + min)
}

// console.log(randomNumber(1,255));
document.documentElement.childNodes[2].style.backgroundColor = `rgb(${randomNumber(1,255)},
${randomNumber(1,255)}, ${randomNumber(1,255)})`;



let bd = document.querySelector('body');
bd.style.backgroundColor = `rgb(${randomNumber(1,255)},
${randomNumber(1,255)}, ${randomNumber(1,255)})`;


