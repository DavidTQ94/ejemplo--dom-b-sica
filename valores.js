const h1 =document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito')
const pid =document.querySelector('#pid');
const input  = document.querySelector('input');


console.log ( {
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'patito'; //Permite cambiar cualquier elemento de nuestro codigo html/
h1.innerText = 'patito'; //convierte solo el texto a HTML//
console.log(h1.getAttribute=('class'));//(.getattribute)Este método devuelve el valor de un atributo especificado en un elemento//
h1.setAttribute('class','rojo')//Una forma para modificar los atributos de nuestros elementos//
h1.classList.add('verde');
h1.classList.remove('rojo');

input.value = '456'

console.log(document.createElement('img'))//crear un elemento de html desde cero//

const img = document.createElement()