<script>
	import { spring } from 'svelte/motion';
	import dog from '$lib/images/dog.jpg';
	import cat from '$lib/images/cat.jpg';
	import chinchilla from '$lib/images/chinchilla.jpg';
	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	/**
	 * @param {number} n
	 * @param {number} m
	 */
	function modulo(n, m) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<!-- <div class="counter">
	<button on:click={() => (count -= 1)} aria-label="Decrease the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5" />
		</svg>
	</button>

	<div class="counter-viewport">
		<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong>{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<button on:click={() => (count += 1)} aria-label="Increase the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
		</svg>
	</button>
</div> -->

<!-- Pet detail-->
<table>
	<tr>
		<td colspan="3" id="select-pet">Chọn thú cưng</td>
	</tr>
	<div id="petdetail">
		<tr>
			<td>
				<img src={dog} alt="Norway"/>
			</td>
			<td>
				<img src={chinchilla} alt="Norton" />
			</td>
			<td>
				<img src={cat} alt="Norman" />
			</td>
		</tr>

		<!--mo ta -->
		<tr>
			<td>Chó con</td>
			<td>Chinchilla</td>
			<td>Mèo lười</td>
		</tr>
	</div>

	<div style="display: flex; justify-content: center; margin: 40px;" class="select">
		<button
			type="button"
			style="background-color: #f5dea8; color: brown; padding:6px; border: 1px solid brown; border-radius: 10px">
			<a href="petcare.html">Chọn nuôi</a>
		</button>
	</div>
</table>

<!-- 
<style>
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style> -->

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		border-radius: 13px;
		background-color: #ffcdac;
	}
	#select-pet {
		display: flex;
		justify-content: center;
		margin: 40p;
		font-family: Calibri;
		font-size: 50px;
		color: rgb(233, 107, 23);
	}
	td {
		padding: 8px;
		text-align: center;
		font-family: Calibri;
		font-size: 30px;
		color: rgb(233, 107, 23);
	}
	td>img {
		border-radius: 10px;	
	}

	td>img:hover {
		background-color: #ff6600;
	}
</style>
