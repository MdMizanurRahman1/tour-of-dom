const placesList = document.getElementById('places-list');
//console.log(placesList);
const li = document.createElement('li');
li.innerText = 'kolabon';

placesList.appendChild(li);


const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriany';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Baat daal';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'khasir mangso';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress collection</h1>
<ul>
<li>Shirt</li>
<li>Pant</li>
<li>Shoes</li>

</ul>

`
mainContainer.appendChild(sectionDress);