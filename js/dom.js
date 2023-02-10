const sections = document.querySelectorAll('section')
//console.log(sections);
for (const section of sections) {
    section.style.border = '2px solid blue';
    section.style.marginBottom = '10px';
    section.style.backgroundColor = 'lightgray';
    section.style.borderRadius = '7px';
    section.style.paddingLeft = '7px';

}

const placesPlan = document.getElementById('placesContainer');
//console.log(placesPlan);
placesPlan.classList.add('yellow-bg')