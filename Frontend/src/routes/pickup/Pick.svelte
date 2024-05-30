<script>
	import { onMount } from 'svelte';
	import { checkToken } from '$lib/stores/checkToken';
	import { IChooseYouPokemon, checkPet } from '$lib/stores/pet';
	import dog from '$lib/images/dog.jpg';
	import cat from '$lib/images/cat.jpg';
	import chinchilla from '$lib/images/chinchilla.jpg';
    import dog_sound from '$lib/sounds/happy-puppy-barks-741.wav';
    import cat_sound from '$lib/sounds/cartoon-little-cat-meow.wav';
    import chinchilla_sound from '$lib/sounds/chinchilla-bquiek1.mp3';

	onMount(async () => {
		await checkToken();
		const id = localStorage.getItem('id') || undefined;
		await checkPet(id);
	});

	$: title = `<strong>Chọn thú cưng</strong>`;
	const pets = [
		{ id:'', name: 'Chó con', exp: 0, level: 0 },
		{ id:'', name: 'Chinchilla', exp: 0, level: 0 },
		{ id:'', name: 'Mèo lười', exp: 0, level: 0 }
	];

	let pet_choosen = -1;
    function dogClick() {
        const audio = new Audio(dog_sound);
        audio.play();
        pet_choosen = 0;
    }
    function chinchillaClick() {
        const audio = new Audio(chinchilla_sound);
        audio.play();
        pet_choosen = 1;
    }
    function catClick() {
        const audio = new Audio(cat_sound);
        audio.play();
        pet_choosen = 2;
    }
	function choosePet() {
		if (pet_choosen === -1) {
			alert('Bạn chưa chọn thú cưng');
			return;
		}
		IChooseYouPokemon(pets[pet_choosen].name);
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
				<!--Cài đặt khi bấm vào thì sẽ phát ra tiếng-->
				<td on:click={dogClick}>
					<img src={dog} alt="Norway"/> <!-- Example of dynamic attribute -->
				</td>
				<td on:click={chinchillaClick}>
                    <img src={chinchilla} alt="Norton"/>
				</td>
				<td on:click={catClick}>
					<img src={cat} alt="Norman"/>
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
			<!--Đã nối được sang petcare-->
			<!--Vấn đề là làm sao để chọn con gì thì chọn hình con đó đặt vào-->
			<button type="button" on:click={choosePet}>
				Chọn nuôi
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
		padding: 1rem;
		width: 75%;
		max-width: 95rem; /*Xem lại thuộc tính này*/
		margin: 1.5em;
		box-sizing: border-box;

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
        font-size: 20px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 10px;
    }
</style>
