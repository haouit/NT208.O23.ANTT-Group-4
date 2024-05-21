<!--File con mèo nhảy ra nhảy vô-->
<script>
	import cat from "$lib/images/meo_play.gif";
	let hereKitty = false;

	const handleMouseenter = () => (
		setTimeout(() => (hereKitty = true), 1000));
	const handleMouseleave = () => (
		setTimeout(() => (hereKitty = false), 1000));

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo pet care app" />
</svelte:head>

<svelte:body on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave} />

<img
	class:curious={hereKitty}
	alt="Kitten wants to know what's going on"
	src={cat}
/>

<section></section>

<style>
	img {
		position: absolute;
		left: 0;
		bottom: -60px;
		transform: translate(-80%, 0) rotate(-50deg);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
		padding-left: 100px;
	}

	.curious {
		transform: translate(-15%, 0) rotate(0deg);
	}

	:global(body) {
		overflow: hidden;
	}
	section {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
