<script>
	import { loggedIn } from '$lib/stores/logged_in.js';

	import avatar from '$lib/images/avatar_cat_developer.png';
	import room from '$lib/images/pet_room.gif';
	import cat from '$lib/images/cat.png';
	import chat_button from '$lib/images/chat.png';

	const status = 'Happy';
	$: exp = 90;
	$: level = 1;

	$: if (exp >= 100) {
		level += 1;
		exp -= 100;
	}


</script>

{#if $loggedIn}
	<!--Nút User-->
	<div class="icon">
		<a href="user"><img src={avatar} alt="search" style="width:60px; height:60px;" /></a>
	</div>
	<div class="grid-container">
		<nav>
			<ul>
				<li><a href="/">Home Page</a></li>
				<li><a href="pickup">Pet Detail</a></li>
				<li><a href="petshop">Shop</a></li>
				<li><a href="#group">Group</a></li>
				<li><a href="mission">Mission</a></li>
			</ul>
		</nav>
	</div>
	<div class="status">
		<span> Status: {status} </span>
		<span> Level: {level} </span>
		<span> Exp: {exp} </span>
	</div>
	<img class="img_pet" src={cat} alt="cat pet" />

	<div class="function_pet">
		<button on:click={() => (exp += 20)}>Play pet</button>
		<button on:click={() => (exp += 10)}>Feed pet</button>
		<button on:click={() => (exp += 15)}>Clean pet</button>
		<button on:click={() => (exp += 15)}>Train pet</button>
	</div>

	<!--Nút chat-->
	<div class="chat">
		<img src={chat_button} alt="chat button" style="width:60px; height:60px;" />
	</div>
{/if}

<style>
	.chat {
		position: fixed;
		bottom: 25px;
		left: 25px;
	}

	.icon {
		position: fixed;
		top: 10px;
		right: 15px;
	}

	.grid-container {
		display: grid;
		width: 120px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #ff9966;
	}

	li {
		float: center;
	}

	li a {
		display: block;
		color: white;
		text-align: center;
		padding: 12px;
		text-decoration: none;
		display: inline-block;
		font-family: 'Comic Sans MS', cursive;
		font-size: 15px;
	}

	li a:hover {
		background-color: #ff6600;
	}

	.img_pet {
		width: 30%;

		margin-left: 30%;
		margin-top: -40%;
		text-align: center;
	}

	.function_pet {
		border: 1px red;
		position: fixed;
		left: 35%;
		bottom: 7%;
		font-size: 15px;
	}

	button {
		padding: 10px;
		background-color: #ff9966;
		color: white;
		font-family: 'Comic Sans MS', cursive;
		border-radius: 10px;
	}

	.status {
		color: black;
		text-align: center;
		margin: 0 40% 40%;
		font-size: 18px;
		border: 3px cyan solid;
		border-radius: 10px;
		background-color: white;
		
	}
</style>
