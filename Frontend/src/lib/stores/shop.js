import { URL_API } from "./checkToken";

async function buyItem(itemId = '', quantity = 0) {
	const response = await fetch(`${URL_API}/api/bills/create`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('jwt')}`
		},
		body: JSON.stringify({ 
			itemId: itemId,
			userId: localStorage.getItem('id'),
			quantity: quantity
		})
	});

	if (response.ok) {
		alert('Purchase successful');
		const data = await response.json();
		return Number(data.totalPrice);
	} else {
		alert('Purchase failed');
		return 0;
	}
};

export { buyItem };