let para = document.querySelector('.myclass');
let secondpara = document.querySelector('.secondpara');
console.log(para);

// para.lastChild.textContent = 'Dynamic value change'
// para.lastChild.textContent = 'change'

// console.log(secondpara.childNodes)

// let paraFirstChild = seconpara.firstChild;

// paraFirstChild.innerText = 'This is em tag';

// console.log(paraFirstChild);

// to acccess text
// .nodevalue

// para.innerText = 'Hello using innerText property <span> Testing inner HTML</span>';

para.innerHTML = 'Hello using innerText property <span> Testing inner HTML</span>';

// change the style 

// para.style.color = 'tomato';

// para.style.border = '1px solid black';

console.log(para.style.cssText);

// para.style.cssText = 'color:tomato; border:1px solid black;'

// para.style.cssText += 'font-size:20px;'

// console.log(para.classList);

// para.className = 'changedclass'

// para.className += 'dynamic-class'

console.log(secondpara.dataset.id);







