<script>
	import logo from '$lib/images/logo.png';
	import { loggedIn } from '$lib/stores/loggedIn.js';
</script>

<header>
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
				<li class="menu_list"><a href="#group">Forum</a></li>
				{#if !$loggedIn}
				<ul class="top_icon">
					<li class="login"><a href="signin">Login</a></li>

					<li class="signup"><a href="SignUp.html">Signup</a></li>
				</ul>
				{/if}
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
			transition: background 500ms ease-in-out;
		}
	}
</style>
