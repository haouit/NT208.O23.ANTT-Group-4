import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import { URL_API, cookie } from './checkToken';

const pet = writable({
	userId: '',
	name: '',
	exp: 0,
	level: 0
});

async function checkPet(userId = '') {
	const response = await fetch(`${URL_API}/api/pets/check/${userId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${cookie()}`
		}
	});

	if (response.ok) {
		const data = await response.json();
		console.log(data);
		if (data) {
			alert('You already have a pet');
			goto('/petcare');
		}
	} else {
		alert('Failed to check pet');
	}
}

async function IChooseYouPokemon(name = '') {
	const response = await fetch(`${URL_API}/api/pets/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${cookie()}`
		},
		body: JSON.stringify({ 
			userId: localStorage.getItem('id'),
			name
		})
	});

	if (response.ok) {
		alert('Purchase successful');
		const data = await response.json();
		pet.update(() => data);
		goto('/petcare');
	} else {
		alert('Purchase failed');
		return 0;
	}
};

export { pet, IChooseYouPokemon, checkPet };
