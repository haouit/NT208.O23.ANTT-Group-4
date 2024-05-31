import { writable } from "svelte/store";
import { URL_API, cookie } from "./checkToken";

const loggedIn = writable();

async function getUser() {
	const id = localStorage.getItem('id') || undefined;
	const response = await fetch(`${URL_API}/api/users/id/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${cookie()}`
		}
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		console.error('Failed to fetch user data');
		return { username: '', _id: '', level: '', coin: '' };
	}
};

async function LogOut() {
	localStorage.removeItem('id');
	document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	loggedIn.set(false);
	fetch(`${URL_API}/api/users/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({}) 
	})
	.then(response => {
		if (response.ok) {
			console.log('Logged out successfully');
		} else {
			console.error('Logout failed');
		}
	})
	.catch(error => {
		console.error('Network error:', error);
	});
}

export { getUser, LogOut, loggedIn };
