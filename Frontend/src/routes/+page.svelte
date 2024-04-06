<script>
	import Pick from './Pick.svelte';
</script>

<svelte:head>
	<title>Home</title>
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
