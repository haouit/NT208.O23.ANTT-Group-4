<!--File này chứa thanh điều hướng-->
<script>
	import logo from '$lib/images/logo.png';
	import avatar from '$lib/images/avatar_cat_developer.png';
	import { loggedIn } from '$lib/stores/logged_in.js';
	import { LogOut } from '$lib/stores/user';
	
	const loadHeader = () => {
		let data = localStorage.getItem('id');
		loggedIn.set( data ? true : false );
	}
	
</script>

<header on:load|preventDefault|once={loadHeader}>
	<!--Thanh điều hướng-->
	<div class="menu">
		<nav>
			<ul>
				<li>
					<a href="/">
						<img src={logo} alt="logo" style="height:65px; width:60px" />
					</a>
				</li>
				<li class="menu_list"><a href="pickup">Pet Detail</a></li>
				<li class="menu_list"><a href="petcare">Pet care</a></li>
				<!--<li class="menu_list"><a href="#group">Forum</a></li>-->
				
				<ul class="top_icon">
				{#if !$loggedIn}
					<li><a href="/login">Login</a></li>
					<li><a href="/signup">Signup</a></li>		
				{/if}
				{#if $loggedIn} 
				<ul class="top_icon">
					<li  class="login" style="padding-right: 20px;"><a on:click={LogOut} href="/login">Logout</a></li>
					<a id='icon' href="/user"><img src={avatar} alt="search" style="width:50px; height:50px;" /></a>
				</ul>
				{/if}
				</ul>

			</ul>
		</nav>
	</div>
	
	
</header>
<style>
	header {
		background-color: #f29f6e;
	}
	div.menu {
		width: 120px;
		text-align: center;
		display: inline;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	li {
		float: left;
		font-family: 'Comic Sans MS', cursive;
		font-size: 30px;
	}

	li.menu_list a {
		display: block;
		color: white;
		text-align: center;
		padding: 15px 25px;
		text-decoration: none;

		&:hover {
			background-color: #ff6600;
			transition: background 500ms ease-in-out;
		}
	}

	ul.top_icon {
		float: right;
	}
	.top_icon li a {
		display: flex;
		color: white;
		text-align: center;
		padding: 15px 20px;
		text-decoration: none;
		&:hover {
			background-color: #ff6600;
			transition: background 500ms ease-in-out; /*Giúp cho việc chuyển hiệu ứng mượt mà hơn khi background-color xảy ra sự kiện hover.
			500ms: thời gian chuyển đổi là 500 mili giây
			ease-in out: hàm chuyển đổi điều chỉnh tốc độ của hiệu ứng chuyển đổi */
		}
	}

	#icon {
		position: relative;
		top: 10px;
		right: 15px;
	}
</style>
