<script>
    import Pick from './Pick.svelte';
	import { onMount } from 'svelte';
	import { checkToken } from '../checkToken';

	onMount(async () => {
		await checkToken();
	});
</script>

<svelte:head>
	<title>Pet detail</title>
	<meta name="description" content="Svelte demo pet care app" />
</svelte:head>

<section>
    <Pick />
</section>

<style>
	section {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
