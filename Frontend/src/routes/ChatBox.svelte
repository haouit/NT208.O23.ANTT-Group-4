<script>
	import loader from '$lib/images/loader.gif';
	import { URL_API } from '$lib/stores/checkToken';
	import { pet, checkPet } from '$lib/stores/pet';
	import { onMount } from 'svelte';
	import { checkToken } from '$lib/stores/checkToken';


	console.log($pet.name);
	const petNames = ['Chó con', 'Mèo lười', 'Chinchilla'];
	const peItndex = petNames.indexOf($pet.name);
	const dogresponse = 'Gâu gâu! Tôi là chú chó con đáng yêu! Bạn muốn hỏi gì không?';
	const catresponse = 'Meo meo! Tôi là chú mèo lười! Bạn muốn hỏi gì không?';
	const mouseresponse = 'Chít chít! Tôi là Chinchilla! Bạn muốn hỏi gì không?';
	const defaultResponse =[dogresponse, catresponse, mouseresponse];
	const firstMessage = defaultResponse[peItndex];
	$: isLoaderVisible = false;
	$: chatHistory = [{ sender: 'bot', message: firstMessage }];
	$: userMessage = '';

	onMount(async () => {
			await checkToken();
			let id;
			if (typeof localStorage !== 'undefined') {
				id = localStorage.getItem('id') || undefined;
			}
			await checkPet(id, false); 
		});

	async function sendMessage() {
		const message = userMessage.trim();
		userMessage = ''; // Clear the input field
		chatHistory = [...chatHistory, { sender: 'user', message }];
		try {
			const response = await fetch(`${URL_API}/api/pets/chat`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ userInput: message, type: $pet.name})
			});

			const data = await response.json();
			const botMessage = data.response;
			// Add chat message to the chat history
			chatHistory = [...chatHistory, { sender: 'bot', message: botMessage }];
		} catch (error) {
			console.error('Error:', error);
		}
	}

	function submitForm() {
		isLoaderVisible = true; // Show the loader
		if (userMessage.trim() === '') return; // Don't send empty message
		sendMessage().finally(() => {
			isLoaderVisible = false; // Hide the loader after the message is sent
		});
	}
</script>

<div id="chat-container">
	<h1>Chat with pet</h1>
	<div id="chat-history">
		{#each chatHistory as message}
			<div class="{message.sender}-message">{message.message}</div>
		{/each}
		{#if isLoaderVisible}
			<div id="loader">
				<img src={loader} width="100px" alt="Loading..." />
			</div>
		{/if}
	</div>

	<form id="chat-form" on:submit|preventDefault={submitForm}>
		<input type="text" bind:value={userMessage} id="user-input" placeholder="Enter your message" />
		<button type="submit">Send</button>
	</form>
</div>

<style>
	#chat-container {
		background-color: #fff;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
		width: 400px;
	}

	h1 {
		text-align: center;
		margin-bottom: 20px;
	}

	#chat-history {
		height: 300px;
		overflow-y: scroll;
	}

	.user-message {
		text-align: right;
		padding: 10px;
		background-color: #f0f0f0;
		border-radius: 10px;
		margin-bottom: 5px;
	}

	.bot-message {
		text-align: left;
		padding: 10px;
		background-color: #e0f0e0;
		border-radius: 10px;
		margin-bottom: 5px;
	}

	form {
		display: flex;
	}

	input {
		flex-grow: 1;
		margin-right: 10px;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	button {
		background-color: #4caf50;
		color: white;
		border: none;
		padding: 10px 15px;
		border-radius: 5px;
		cursor: pointer;
	}
	#loader {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
