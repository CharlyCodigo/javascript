const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input1 = document.querySelector('#input1');
const input2 = document.getElementById('input2');
const p1 = document.querySelector('#p1');
const form = document.getElementById('form')
form.addEventListener('click', sum)
h1.innerHTML = "parrafo <br> enter";
//h1.innerText="parrafo <br> enter";
console.log(h1)
console.log(p)
console.log({
    h1,
    p,
    parrafito,
    pid,
})
console.log(p.setAttribute("paragraph", "paragraph"))
console.log(parrafito.getAttribute('class'))

h1.classList.add('rojo');
h1.classList.add('verde');
const img = document.createElement('img');
img.src = 'https://concepto.de/wp-content/uploads/2020/12/imagen-e1607991781485.jpg';
p.append(img)
function sum(event) {
    event.preventDefault();
    let sum = input1.valueAsNumber + input2.valueAsNumber;
    p1.innerHTML = sum;


}
