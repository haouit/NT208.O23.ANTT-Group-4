<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
</script>

<!-- 
<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header> -->

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
				<li class="menu_list"><a href="petcare.html">Pet care</a></li>
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

<!-- 
<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style> -->

<style>
	header {
		background-color: #f29f6e;
	}
	div.menu {
		display: grid;
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
