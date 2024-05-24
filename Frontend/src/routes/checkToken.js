import { get } from "svelte/store";

const URL_API = 'http://localhost:5038';

export async function checkToken() {
	try {
		const cookie = () => {
			const value = `; ${document.cookie}`;
			const parts = value.split(`; jwt=`);
			if (parts.length === 2) return parts.pop()?.split(';').shift();
		};
		
		const response = await fetch(URL_API + '/protected', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Authorization': `Bearer ${cookie()}`
				}
		});

		if (response.status === 401) {
			window.location.href = '/login';
		}
	} catch (error) {
		console.error('Error occurred during fetch request:', error);
	}
}