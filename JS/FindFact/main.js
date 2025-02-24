let form = document.querySelector('form');
let yearFact = document.querySelector('.y-content');
form.addEventListener('submit', e => {
	e.preventDefault();
    let number = e.target.number.value;
    if (number == '') {
        number = 0;
    }
    let typeFact = e.target.options.value;
    
    getFact(number , typeFact);
})

async function getFact(number, typeFact) {
    let response = await fetch(`http://numbersapi.com/${number}/${typeFact}`);
    let data = await response.text();
    yearFact.innerHTML = data;
}