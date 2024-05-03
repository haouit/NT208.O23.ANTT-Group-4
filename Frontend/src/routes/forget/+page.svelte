<script>
    import { goto } from '$app/navigation';
	import { loggedIn } from '$lib/stores/logged_in';

	$: error = 'Oh no, an error occured!';
	$: isError = false;

	let Username = '';
    let email = '';

	function submitLogin() {
		// logic here
		if (Username == '' || email == '' ) {
			isError = true;
		} else {
			isError = false;
			//loggedIn.set(true);
			goto('/login'); // failed to redirect
		}
	}
</script>


<div id="signin">
    <h1><b>Reset password</b></h1>
    {#if isError}
		<div class="error">{error}</div>
	{/if}
    <form>
        <div class="error">
            Password will be sent to your email
        </div>
        <input bind:value={Username} type="text" placeholder="Username" />
        <input bind:value={email} type="email" placeholder="Email" />


        <button type="submit" on:click={submitLogin}><a href="/login">Reset</a></button>
    </form>
</div>

<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);

    * {
        box-sizing: border-box;
    }

    #signin {
        border-style: solid;
        width: 25em;
        padding: 1em;
        margin: 1em;
        border-radius: 1em;
        text-align: center;
        background: #FDE3C8;
        color: rgba(0, 0, 0, 0.75);
    }
    h1,
    button {
        font-weight: 300;
        color: orangered;
        text-transform: uppercase;
    }

    .error {
        background: rgba(255, 60, 50, 0.5);
        color: white;
        text-shadow: 0 1px 0 rgba(255, 100, 100, 0.75);

        margin-left: -1em;
        margin-right: -1em;
        margin-bottom: 1ex;

        padding: 1ex;

        border-top: 1px solid rgba(255, 100, 100, 0.75);
        border-bottom: 1px solid rgba(255, 100, 100, 0.75);
    }

    input,
    button {
        display: block;
        width: 100%;

        text-align: center;
        font-size: 1.1em;
        padding: 1ex;
        border: 2px solid #ECF0F1;
        transition: border ease 500ms;
        border-radius: 1ex;
        font-family: "Open Sans";
        background: #ECF0F1;
        color: #181818;

        &:focus {
            outline: none;
            border: 2px solid #3498DB;
        }

        &:not(:last-child) {
            margin-bottom: 1ex;
        }
    }

    button {
        color: white;
        background: #FF7E6B;
        text-decoration: none;

        &:hover {
            outline: none;
            border: 2px solid orangered;
            background: orangered;
            text-decoration: none;
        }
    }

    button a {
        color: white;
        font-weight: bold;
        text-decoration: none;
    }
    
</style>
