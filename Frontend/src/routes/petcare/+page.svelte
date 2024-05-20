	<!--File này dùng cho petcare-->
<script>
		import { loggedIn } from '$lib/stores/logged_in.js';
		import avatar from '$lib/images/avatar_cat_developer.png';		
		import chat_button from '$lib/images/chat.png';
		import { pet_chosen } from '$lib/stores/pet_chosen';
		import chin_clean from '$lib/images/chin_clean.gif'
		import chin_sleep from '$lib/images/chin_sleep.gif'
		import chin_play from '$lib/images/chin_play.gif'
		import chin_train from '$lib/images/chin_train.gif'
		import chin_eat from '$lib/images/chin_eat.gif'
		import dog from '$lib/images/dog.gif'
		import dog_clean from '$lib/images/dog_clean.gif'
		import dog_feed from '$lib/images/dog_feed.gif'
		import dog_play from '$lib/images/dog_play.gif'
		import dog_train from '$lib/images/dog_train.gif'
		import cat from '$lib/images/cat.gif'
		import cat_clean from '$lib/images/cat_clean.gif'
		import cat_eat from '$lib/images/cat_eat.gif'
		import cat_play from '$lib/images/cat_play.gif'
		import cat_train from '$lib/images/cat_train.gif'
		
	
		/*Cài đặt của Feed*/
		let canFeed = true;
		function enableFeed() {canFeed = true}
		function clickFeed () {
			if (!canFeed) return;
			exp += 10;
			if (exp >= 100) {
				level += 1;
				exp -= 100;
			}
			canFeed = false;
			setTimeout(enableFeed, 10000);
		}
		
		/*Cài đặt của Play*/
		let canPlay = true;
		function enablePlay() {canPlay = true}
		function clickPlay () {
			if (!canPlay) return;
			exp += 20;
			if (exp >= 100) {
				level += 1;
				exp -= 100;
			}
			canPlay = false;
			setTimeout(enablePlay, 15000);
		}

		/*Cài đặt của Clean*/
		let canClean = true;
		function enableClean() {canClean = true}
		function clickClean () {
			if (!canClean) return;
			exp += 15;
			if (exp >= 100) {
				level += 1;
				exp -= 100;
			}
			canClean = false;
			setTimeout(enableClean, 15000);
		}


		/*Cài đặt của Train*/
			let canTrain = true;
		function enableTrain() {canTrain = true}
		function clickTrain () {
			if (!canTrain) return;
			exp += 15;
			if (exp >= 100) {
				level += 1;
				exp -= 100;
			}
			canTrain = false;
			setTimeout(enableTrain, 15000);
		}

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

		const status = 'Happy';
		$: exp = 0;
		$: level = 1;

		$: if (exp >= 100) {
			level += 1;
			exp -= 100;
		}
		
</script>
<div class="background">
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
					<li ><a href="/chat">Group</a></li>
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
		
		{#if sad}
			{#if $pet_chosen == 1}
				<img class="img_pet" src={dog} alt="cat pet" />
			{:else if $pet_chosen == 2} 
				<img class="img_pet" src={chin_sleep} alt="cat pet" />
			{:else if $pet_chosen == 3}
				<img class="img_pet" src={cat} alt="cat pet" />
			{/if}
 	 	{:else if play}
		  	{#if $pet_chosen == 1}
		  		<img class="img_pet" src={dog_play} alt="cat pet" />
	  		{:else if $pet_chosen == 2} 
		  		<img class="img_pet" src={chin_play} alt="cat pet" />
	  		{:else if $pet_chosen == 3}
		  		<img class="img_pet" src={cat_play} alt="cat pet" />
			{/if}
		{:else if feed}
			{#if $pet_chosen == 1}
				<img class="img_pet" src={dog_feed} alt="cat pet" />
			{:else if $pet_chosen == 2} 
				<img class="img_pet" src={chin_eat} alt="cat pet" />
			{:else if $pet_chosen == 3}
				<img class="img_pet" src={cat_eat} alt="cat pet" />
  			{/if}
		{:else if clean }
			{#if $pet_chosen == 1}
				<img class="img_pet" src={dog_clean} alt="cat pet" />
			{:else if $pet_chosen == 2} 
				<img class="img_pet" src={chin_clean} alt="cat pet" />
			{:else if $pet_chosen == 3}
				<img class="img_pet" src={cat_clean} alt="cat pet" />
			{/if}
		{:else if train }
			{#if $pet_chosen == 1}
				<img class="img_pet" src={dog_train} alt="cat pet" />
			{:else if $pet_chosen == 2} 
				<img class="img_pet" src={chin_train} alt="cat pet" />
			{:else if $pet_chosen == 3}
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
		</div>
		
		
		<!--Nút chat-->
		<div class="chat">
			<img src={chat_button} alt="chat button" style="width:60px; height:60px;" />
		</div>
	{/if}	

</div>

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
