<script>
	import { spring } from 'svelte/motion';
	import dog from '$lib/images/dog.jpg';
	import cat from '$lib/images/cat.jpg';
	import chinchilla from '$lib/images/chinchilla.jpg';

	let title = '<strong>Chọn thú cưng</strong>'; // Example of using HTML in Svelte

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	/**
	 * @param {number} n
	 * @param {number} m
	 */
	function modulo(n, m) {
		return ((n % m) + m) % m;
	}
</script>


<!-- Pet detail-->
<div id="choose-pet">
	<table>
		<tr>
			<td colspan="3" id="select-pet">{@html title}</td>
		</tr>
		<div id="petdetail">
			<tr id="pet">
				<td>
					<img src={dog} alt="Norway" /> <!-- Example of dynamic attribute -->
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
				type="button"><a href="petcare.html">Chọn nuôi</a>
			</button>
		</div>
	</table>
</div>

<style>
	#choose-pet {
		display: inline;
		border-collapse: collapse;
		border-radius: 13px;
		background-color: #ffcdac;
	}
	#select-pet {
		display: flex;
		justify-content: center;
		margin: 0px auto 10px auto;

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
	td > img {
		border-radius: 10px;
		max-width: 100%;
		vertical-align: middle;
	}

	#pet > td:hover {
		transition: background 500ms ease-in-out;
		background-color: #ff6600;
	}
    button {
        background-color: #ff6600;
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 10px;
    }
    button a {
        color: white;
        text-decoration: none;
    }
</style>
