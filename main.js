const field = document.querySelector('.field');
const breedForm = document.querySelector('form');
const info = document.querySelector('.info');
 


async function fetchDogs(breed) {
	const result = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`);
	const json = await result.json();
	
	info.innerHTML = `
    <h5 class="info-stor"> ${json[0].name}</h5>
	<h5 class="info">Lifespan: <br> <br> ${json[0].life_span}</h5>
	<h5 class="info">Personality traits: <br> <br> ${json[0].temperament}</h5>
	<h5 class="info">Breed group: <br> <br>${json[0].breed_group}</h5>
	<h5 class="info">Bred for: <br> <br>${json[0].bred_for}</h5>
    `;
};


breedForm.addEventListener('submit', e => {
	// prevent default action
	e.preventDefault();
	//console.log(field.value);
	fetchDogs(field.value);
}); 


