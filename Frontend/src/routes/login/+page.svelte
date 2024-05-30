<script>
	import { goto } from '$app/navigation';
    import { URL_API } from '../../lib/stores/checkToken';

	$: error = 'Oh no, an error occured!';
	$: isError = false;

	let username = '';
	let password = '';

	async function submitLogin() {
		if (username == '' || password == '') {
			isError = true;
		} else {
			try {
				const response = await fetch(`${URL_API}/api/users/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ 
						username: username,
						password: password
					})
				});

				if (response.ok) {
					isError = false;
					console.log('Login success');
					// set cookie
					const data = await response.json();
					document.cookie = `jwt=${data.token}; path=/`;
					localStorage.setItem('id', data.id);
					goto('/');
				} else {
					isError = true;
					error = 'Invalid username or password';
				}
			} catch (error) {
				isError = true;
				error = 'An error occurred while logging in';
			}
		}
	}
</script>

<div id="login">
	<h1><b>Sign in</b></h1>
	{#if isError}
		<div class="error">{error}</div>
	{/if}
	<form on:submit|preventDefault={submitLogin}>
		<input bind:value={username} placeholder="Username" />
		<input bind:value={password} type="password" placeholder="Password" />
		<div class="signup-forgot">
			<button type="button" class="open-button"><a href="/signup">Sign up</a> </button>
			<button type="button" class="open-button"><a href="/forget">Forget Password</a> </button>
		</div>

		<button type="submit" class="button_submit">Sign in</button>
	</form>
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);

	* {
		box-sizing: border-box;
	}

	#login {
		border-style: solid;
		padding: 1em 2em 2em;
		margin: 40px auto;
		width: 30em;
		border-radius: 1em;
		text-align: center;
		background: #fde3c8;
		color: rgba(0, 0, 0, 0.75);
	}

	h1,
	.button_submit {
		font-weight: 300;
		color: orangered ;
		text-transform: uppercase;
	}

	.error {
		background: rgba(255, 0, 0, 0.4);
		color: white;
		text-shadow: 0 1px 0 rgba(255, 100, 100, 0.75);

		margin-left: -2em;
		margin-right: -2em;
		margin-bottom: 1ex;

		padding: 1ex;

		border-top: 1px solid rgba(255, 100, 100, 0.75);
		border-bottom: 1px solid rgba(255, 100, 100, 0.75);
	}

	input,
	.button_submit {
		display: block;
		width: 100%;

		text-align: center;
		font-size: 1.1em;
		padding: 1ex;
		border: 2px solid #ecf0f1;
		transition: border ease 500ms;
		border-radius: 1ex;
		font-family: 'Open Sans';
		background: #ecf0f1;
		color: #181818;

		&:focus {
			outline: none;
			border: 2px solid orange;
		}

		&:not(:last-child) {
			margin-bottom: 1ex;
		}
	}

	.signup-forgot {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1ex;
	}
/*button là forget password vs sign up*/
	button {
		padding: 1ex;
		border: 2px solid #ecf0f1;
		transition: border ease 500ms;
		border-radius: 1ex;
		font-family: 'Open Sans';
		background: #ecf0f1;
		color: #181818;

		&:hover {
			outline: none;
			border: 2px solid orange;
			background: orange;
		}
	}
/*button signin nè*/
	.button_submit {
		color: white;
		font-weight: bold;
		
		background: #ff7e6b;

		&:hover {
			outline: none;
			border: 2px solid orangered;
			background: orangered;
		}
	
	}

/*Cài đặt này dành cho button forget password và signUp*/
	a {
		text-decoration: none;
		color: #181818;
	}
	a:hover {
		text-decoration: none;
	}
</style>
