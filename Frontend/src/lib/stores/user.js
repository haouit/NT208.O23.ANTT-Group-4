import { URL_API, cookie } from "./checkToken";
import { loggedIn } from "./logged_in";

async function getUser() {
	const id = localStorage.getItem('id');
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
	loggedIn.set(false);
	localStorage.removeItem('id');
	document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
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

export { getUser, LogOut };
