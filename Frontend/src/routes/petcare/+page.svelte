	<!--File này dùng cho petcare-->
<script>
		import { onMount } from 'svelte';
		import { checkToken } from '../../lib/stores/checkToken';
		import { loggedIn } from '$lib/stores/user';
		import { pet, checkPet, expUp } from '$lib/stores/pet';
		import ChatBox from '../ChatBox.svelte';
		import chat_button from '$lib/images/chat.png';
		import chin_clean from '$lib/images/chin_clean.gif';
		import chin_sleep from '$lib/images/chin_sleep.gif';
		import chin_play from '$lib/images/chin_play.gif';
		import chin_train from '$lib/images/chin_train.gif';
		import chin_eat from '$lib/images/chin_eat.gif';
		import dog from '$lib/images/dog.gif';
		import dog_clean from '$lib/images/dog_clean.png';
		import dog_feed from '$lib/images/dog_feed.gif';
		import dog_play from '$lib/images/dog_play.gif';
		import dog_train from '$lib/images/dog_train.gif';
		import cat from '$lib/images/cat.png';
		import cat_clean from '$lib/images/cat_clean.png';
		import cat_eat from '$lib/images/cat_eat.gif';
		import cat_play from '$lib/images/cat_play.gif';
		import cat_train from '$lib/images/cat_train.gif';

		onMount(async () => {
			await checkToken();
			let id;
			if (typeof localStorage !== 'undefined') {
				id = localStorage.getItem('id') || undefined;
			}
			await checkPet(id, false); 
		});

		/*Cài đặt của Feed*/ 
		let canFeed = true;
		function enableFeed() {canFeed = true}
		async function clickFeed () {
			if (!canFeed) return;
			const petIndex = petNames.indexOf($pet.name);
			if (await expUp(id, 50, petIndex)) {
				canFeed = false;
				setTimeout(enableFeed, 20000); // Cho ăn 4 tiếng 1 lần = 14.400.000
			}
		}
		
		/*Cài đặt của Play*/
		let canPlay = true;
		function enablePlay() {canPlay = true}
		function clickPlay () {
			if (!canPlay) return;
			expUp(id, 20);
			canPlay = false;
			setTimeout(enablePlay, 20000); // Chơi có thể 1 tiếng 1 lần = 3.600.000
		}

		/*Cài đặt của Clean*/
		let canClean = true;
		function enableClean() {canClean = true}
		function clickClean () {
			if (!canClean) return;
			expUp(id, 30);
			canClean = false;
			setTimeout(enableClean, 30000); // Cho 3 ngày tắm 1 lần = 259.200.000
		}


		/*Cài đặt của Train*/
		let canTrain = true;
		function enableTrain() {canTrain = true}
		function clickTrain () {
			if (!canTrain) return;
			expUp(id, 25);
			canTrain = false;
			setTimeout(enableTrain, 15000); // Huấn luyện 1 lần 1 ngày = 86.400.000
		}

		/*Cài đặt của ChatBox*/
		function openchat() {
			popupOpened = true;
		}
		function closechat() {
			popupOpened = false;
		}

	let popupOpened = false;

		let sad = true;
		let play = false;
		let feed = false;
		let clean = false;
		let train = false;

 		const Play = () => {
    		sad = false;
			play = true;
  		};

		const Feed = () => {
    		sad = false;
			play = false;
			feed = true;
  		};
		const Clean = () => {
    		sad = false;
			play = false;
			feed = false;
			clean = true;
  		};
		const Train = () => {
    		sad = false;
			play = false;
			feed = false;
			clean = false;
			train = true;
  		};


		const petNames = ['Chó con', 'Chinchilla', 'Mèo lười'];

		const id = localStorage.getItem('id') || undefined;
		const status = 'Happy';
		$: level = Math.floor($pet.exp / 100);
		$: exp = $pet.exp % 100;
		
</script>

	

<div class="background">
	{#if $loggedIn}	
		<!--Thanh điều hướng của pet care-->
		<div class="grid-container">
			<nav>
				<ul>	
					<li><a href="/shop">Shop</a></li>
					<li><a href="/mission">Mission</a></li>
				</ul>
			</nav>
		</div>

		
		<!--Thanh trạng thái của pet-->
		<div class="status">
			<span> {$pet.name} </span>
			<br>
			<span> Status: {status} </span>
			<span> Level: {level} </span>
			<span> Exp: {exp} </span>
		</div>
		
		{#if sad}
			{#if $pet.name == 'Chó con'}
				<img class="img_pet" src={dog} alt="dog pet" />
			{:else if $pet.name == 'Chinchilla'} 
				<img class="img_pet" src={chin_sleep} alt="chinchilla pet" />
			{:else if $pet.name == 'Mèo lười'}
				<img class="img_pet" src={cat} alt="cat pet" />
			{/if}
		{:else if play}
			{#if $pet.name == 'Chó con'}
				<img class="img_pet" src={dog_play} alt="dog pet" />
			{:else if $pet.name == 'Chinchilla'} 
				<img class="img_pet" src={chin_play} alt="chinchilla pet" />
			{:else if $pet.name == 'Mèo lười'}
				<img class="img_pet" src={cat_play} alt="cat pet" />
			{/if}
		{:else if feed}
			{#if $pet.name == 'Chó con'}
				<img class="img_pet" src={dog_feed} alt="dog pet" />
			{:else if $pet.name == 'Chinchilla'} 
				<img class="img_pet" src={chin_eat} alt="chinchilla pet" />
			{:else if $pet.name == 'Mèo lười'}
				<img class="img_pet" src={cat_eat} alt="cat pet" />
			{/if}
		{:else if clean }
			{#if $pet.name == 'Chó con'}
				<img class="img_pet" src={dog_clean} alt="dog pet" />
			{:else if $pet.name == 'Chinchilla'} 
				<img class="img_pet" src={chin_clean} alt="chinchilla pet" />
			{:else if $pet.name == 'Mèo lười'}
				<img class="img_pet" src={cat_clean} alt="cat pet" />
			{/if}
		{:else if train }
			{#if $pet.name == 'Chó con'}
				<img class="img_pet" src={dog_train} alt="dog pet" />
			{:else if $pet.name == 'Chinchilla'} 
				<img class="img_pet" src={chin_train} alt="chinchilla pet" />
			{:else if $pet.name == 'Mèo lười'}
				<img class="img_pet" src={cat_train} alt="cat pet" />
			{/if}
		{/if}
		
		<!--Tính năng-->
		<!--Tăng exp sau mỗi lần click đối với mỗi chức năng-->
		
		<div class="function_pet">
			{#if canPlay}
			<button on:click={Play} on:click={clickPlay} >Play </button>
			{/if}
			{#if canFeed}
			<button on:click={Feed} on:click={clickFeed} >Feed </button>
			{/if}
			{#if canClean}
			<button on:click={Clean} on:click={clickClean}>Clean</button>
			{/if}
			{#if canTrain}
			<button on:click={Train} on:click={clickTrain} >Train</button>
			{/if}
			{#if !popupOpened}
				<button on:click={openchat}>Chat</button>
			{/if}
			{#if popupOpened}
				<button on:click={closechat}>Close Chat</button>
			{/if}
		</div>
		<!--ChatBox-->
		{#if popupOpened}
		<div class="Popup">
			<ChatBox />
		</div>
		{/if}
	{/if}
</div>

<style>
		.Popup{
			cursor: pointer;
			position: fixed;
			bottom: 23px;
			right: 15px;
		}


		.grid-container {
			display: grid;
			width: 150px;
			text-align: center;
			
		}
		

		.background{
			background-image: url("$lib/images/room.png");
			background-size: cover;
			background-repeat: no-repeat;
			min-height: 100vh;
			margin: 0;
			background-attachment: fixed;
			background-size: 100vw 100vh;
		}

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			overflow: hidden;
			background-color: #f29f6e;
			
		}

		li {
			float: center;
		}

		li a {
			display: block;
			color: white;
			text-align: center;
			padding: 12px;
			width: 150px;
			text-decoration: none;
			display: inline-block;
			font-family: 'Comic Sans MS', cursive;
			font-size: 22px;
		}


		li a:hover {
			background-color: #ff6600;
			padding-right: 100%;	
			
		}	
		

		.img_pet {
			width: 20%;

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
			padding: 0 30px;
		}

		button {
			padding: 10px 30px;
			background-color: #ff9966;
			color: white;
			font-family: 'Comic Sans MS', cursive;
			border-radius: 10px;
			font-size: 20px;
		}

		.status {
			color: brown;
			text-align: center;
			margin: 0 35% 25%; /*margin đầu tiên là top, giá trị thứ 2 là left-right, giá trị cuối là vs con mèo	 */
			padding-top: 20px;
			padding-bottom: 20px;
			font-size: 20px;
			border: 3px yellowgreen solid;
			border-radius: 15px;
			background-color: white;
			font-weight: bold;
			text-transform: uppercase;	
		}
		span {
			padding-inline: 10px;
		}
</style>
