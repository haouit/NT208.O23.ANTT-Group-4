<!--File này dùng cho petcare-->
<script>
	import { loggedIn } from '$lib/stores/logged_in.js';
	
	import avatar from '$lib/images/avatar_cat_developer.png';
	
	import cat from '$lib/images/cat.png';
	import chat_button from '$lib/images/chat.png';

	const status = 'Happy';
	$: exp = 0;
	$: level = 1;

	$: if (exp >= 100) {
		level += 1;
		exp -= 100;
	}


</script>
<body>
	

{#if $loggedIn}
	<!--Nút User-->
	<div class="icon">
		<a href="/user"><img src={avatar} alt="search" style="width:60px; height:60px;" /></a>
	</div>
	<!--Thanh điều hướng của pet care-->
	<div class="grid-container">
		<nav>
			<ul>
				
				<li><a href="/shop">Shop</a></li>
				<li><a href="#group">Group</a></li>
				<li><a href="/mission">Mission</a></li>
			</ul>
		</nav>
	</div>
<!--Thanh trạng thái của pet-->
	<div class="status">
		<span> Status: {status} </span>
		<span> Level: {level} </span>
		<span> Exp: {exp} </span>
	</div>
	<img class="img_pet" src={cat} alt="cat pet" />
<!--Tăng exp sau mỗi lần click đối với mỗi chức năng-->
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
</body>
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
		width: 75px;
	}
	
	

	body {
		background-image: url("$lib/images/pet_room.gif");
		background-size: cover;
		background-repeat: no-repeat;
		min-height: 100vh;
		margin: 0;
		background-attachment: fixed;
		background-color: var(--color-bg-1);
		background-size: 100vw 100vh;
		/*background-image: radial-gradient(
				50% 50% at 50% 50%,
				rgba(255, 255, 255, 0.75) 0%,
				rgba(255, 255, 255, 0) 100%
		),
		linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);*/
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
		padding-right: 100%;
		
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
		color: brown;
		text-align: center;
		margin: 0 35% 30%; /*margin đầu tiên là top-bottom, giá trị thứ 2 là left-right, giá trị cuối là vs con mèo	 */
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 20px;
		border: 3px cyan solid;
		border-radius: 15px;
		background-color: white;
		font-weight: bold;
		text-transform: uppercase;	
	}
	span {
		padding-inline: 10px;
	}
</style>
