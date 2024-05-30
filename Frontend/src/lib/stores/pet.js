import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import { URL_API, cookie } from './checkToken';

const pet = writable({
	userId: '',
	name: '',
	exp: 0,
});

async function checkPet(userId = '', pickUp = true) {
	pet.update(() => {
		return {
			userId: '',
			name: '',
			exp: 0,
		}
	});
	const response = await fetch(`${URL_API}/api/pets/check/${userId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${cookie()}`
		}
	});

	if (response.ok) {
		const data = await response.json();
		if (data) {
			pet.update(() => data);
			if (pickUp) {
				alert('You already have a pet');
				goto('/petcare');
			}
		}
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
		alert('Receive pet successful');
		const data = await response.json();
		pet.update(() => data);
		goto('/petcare');
	} else {
		alert('Receive pet failed');
		return 0;
	}
};

export { pet, IChooseYouPokemon, checkPet };
