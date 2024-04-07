<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!DOCTYPE html>
<html>
	<head>
		<title>Web nuôi thú cưng</title>
		<link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="Web nuôi thú cưng" content="Nuôi thú cưng cùng nhau" />
	</head>

	<body>
		<!--Nút User-->
		<div class="icon">
			<a href="user.html"
				><img
					src="https://i.pinimg.com/736x/02/38/e8/0238e8400880ff5533eacbfa6cf916ac.jpg"
					alt="search"
					style="width:60px; height:60px;"
				/></a
			>
		</div>
		<div class="grid-container">
			<nav>
				<ul>
					<li><a href="/">Home Page</a></li>
					<li><a href="Home.html">Pet Detail</a></li>
					<li><a href="Pet shop.html">Shop</a></li>
					<li><a href="#group">Group</a></li>
					<li><a href="mission.html">Mission</a></li>
				</ul>
			</nav>
		</div>
		<div class="status">
			<span class="status_list"> Status: Happy </span>
			<span class="status_list"> Level: 10 </span>
			<span class="status_list"> Exp: 90/100 </span>
		</div>
		<img
			class="img_pet"
			src="https://z-p3-scontent.fsgn5-11.fna.fbcdn.net/v/t1.15752-9/431617719_917774529800812_4136666370522186060_n.png?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGl_u2HhoQi9FjpgOFMGmbTPvvn8U3rqSA---fxTeupIJkOVYPOdr-eyOlkqoH49fCpces03YjtI7rrI_GiKWzN&_nc_ohc=3f6YcvRRfkUAX9O6mR1&_nc_ht=z-p3-scontent.fsgn5-11.fna&oh=03_AdT0r-FimJKmOXBhZRwrcmL5GTWmHzg_LyfUrLSaroAChQ&oe=66166377"
		/>

		<div class="function_pet">
			<a href="#" class="function_pet_list">Play pet</a>
			<a href="#" class="function_pet_list">Feed pet</a>
			<a href="#" class="function_pet_list">Clean pet</a>
			<a href="#" class="function_pet_list">Train pet</a>
		</div>

		<!--Nút chat-->
		<div class="chat">
			<a href="#chat"
				><img
					src="https://freepngimg.com/thumb/chat/158654-pic-chat-icon-free-clipart-hq.png"
					alt="Image"
					style="width:60px; height:60px;"
				/></a
			>
		</div>
	</body>
</html>

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
		font-family: Calibri;
		font-size: 15px;
	}

	li a:hover {
		background-color: #ff6600;
	}

	body {
		background-image: url('https://i.pinimg.com/736x/5f/34/4a/5f344a5ed98b21597e0b1658f2cc3129.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: 100% 100%;
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

	.function_pet_list {
		margin-left: 4%;
		list-style-type: none;
		margin: 0;
		padding: 10px;
		overflow: hidden;
		background-color: #ff9966;
		text-decoration: none;
		display: inline-block;
		color: white;
		font-family: Calibri;
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
