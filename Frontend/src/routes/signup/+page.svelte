<script>
	import { goto } from '$app/navigation';
    import { URL_API } from '../checkToken';

	$: error = 'Oh no, an error occured!';
	$: isError = false;

	let username = '';
    let password = '';
    let re_password = '';

    async function submitLogin() {
        if (username == '' || password == '' || re_password == '' || password != re_password) {
            isError = true;
        } else {
            isError = false;
            try {
                const response = await fetch(`${URL_API}/api/users/register`, {
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
                    //loggedIn.set(false);
                    goto('/login');
                } else {
                    isError = true;
                    error = 'Failed to sign up. Please try again.';
                }
            } catch (error) {
                isError = true;
                error = 'An error occurred. Please try again.';
            }
        }
    }
</script>

<div id="signin">
    <h1><b>Sign Up</b></h1>
    {#if isError}
		<div class="error">{error}</div>
	{/if}
    <form>
        <input bind:value={username} type="text" placeholder="Username" />
        <input bind:value={password} type="password" placeholder="Password" />
        <input bind:value={re_password} type="password" placeholder="Re-enter password" />

        <button type="submit" class="button_submit" on:click={submitLogin}>Sign Up</button>
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

</style>
