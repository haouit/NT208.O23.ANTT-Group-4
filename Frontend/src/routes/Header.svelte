<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
</script>

<header>
	<!--Thanh điều hướng-->
	<div class="menu">
		<nav>
			<ul>
				<div style="padding:0">
					<li>
						<a href="Home.html"> <img src={logo} alt="logo" style="height:65px; width:60px" /></a>
					</li>
				</div>
				<li class="menu_list"><a href="#petdetail">Pet Detail</a></li>
				<li class="menu_list"><a href="/petcare">Pet care</a></li>
				<li class="menu_list"><a href="#group">Forum</a></li>
				<div>
					<ul class="top_icon">
						<li class="login"><a href="SignIn.html">Login</a></li>

						<li class="signup"><a href="SignUp.html">Signup</a></li>
					</ul>
				</div>
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

	li a:hover {
		background-color: #ff6600;
		transition: background 500ms ease-in-out;
	}

	li.menu_list a {
		display: block;
		color: white;
		text-align: center;
		padding: 15px 25px;
		text-decoration: none;
	}

	li.login a {
		display: flex;
		color: white;
		text-align: center;
		padding: 15px 20px;
		text-decoration: none;
	}

	li.signup a {
		display: flex;
		color: white;
		text-align: center;
		padding: 15px;
		padding-left: 35px;
		padding-right: 35px;
		text-decoration: none;
	}

	ul.top_icon {
		float: right;
	}
</style>
