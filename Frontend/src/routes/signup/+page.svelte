<script>
	import { goto } from '$app/navigation';
	import { loggedIn } from '$lib/stores/logged_in';

	$: error = 'Oh no, an error occured!';
	$: isError = false;

	let Username = '';
    let email = '';
    let passwd = '';

	function submitLogin() {
		// logic here
		if (Username == '' || email == '' || passwd == '') {
			isError = true;
		} else {
			isError = false;
			//loggedIn.set(false);
			goto('/login'); // failed to redirect
		}
	}
</script>

<div id="signin">
    <h1><b>Sign Up</b></h1>
    {#if isError}
		<div class="error">{error}</div>
	{/if}
    <form>
        <input bind:value={Username} type="text" placeholder="Username" />
        <input bind:value={email} type="email" placeholder="Email" />
        <input bind:value={passwd} type="password" placeholder="Password" />


        <button type="submit" class="button_submit" on:click={submitLogin}><a href="login">Sign Up</a></button>
    </form>
</div>

<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);

    * {
        box-sizing: border-box;
    }

 /*Khung đăng ký*/

    #signin {
        border-style: solid;
        width: 30em;
        padding: 1em 2em 2em;
        border-radius: 1em;
        text-align: center;
        background: #FDE3C8;
        color: rgba(0, 0, 0, 0.75);    
        margin: 40px auto;           
    }    
/*Tiêu đề*/
    h1, button {
        font-weight: 300;
        color: orangered;
        text-transform: uppercase;
    }
/*Bảng báo lỗi*/
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

    /*Design ô nhập vào của form*/
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
        color: black;

        &:focus {
            outline: none;
            border: 2px solid orange;
        }

        &:not(:last-child) {
            margin-bottom: 1ex;
        }
    }
/*Nút Sign Up*/
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

    .button_submit a {
     
		text-decoration: none;
        color: white;
    }

</style>
