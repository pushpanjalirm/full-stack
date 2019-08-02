console.log(window.document);
console.dir(document);

console.log(document.documentElement);

console.log(document.documentElement.hasChildNodes());

console.log(document.documentElement.childNodes);

console.log(document.documentElement.childNodes[2]);

console.log(document.documentElement.childNodes[2].childNodes);

console.log(document.documentElement.childNodes[2].childNodes[1].parentNode.parentNode);

document.documentElement.childNodes[2].childNodes[1].innerText = 'Hello, changed dynamically';

document.documentElement.childNodes[2].childNodes[1].style.color = 'red';

console.log(document.documentElement.childNodes[2].childNodes[1].hasAttributes());

console.log(document.documentElement.childNodes[2].childNodes[1].className);

console.log(document.documentElement.childNodes[2].childNodes[1].id);

console.log(document.documentElement.childNodes[2].childNodes[1].attributes);


