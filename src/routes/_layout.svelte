<script>
	import Title from '../components/Title.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	.container {
		font-size: 100%;
		font-size-adjust: .6;
		font-family: Lora, 'Palatino Linotype', 'Book Antiqua', 'New York', 'DejaVu serif', serif;
		align-content: center;
		background-color: white;
		text-rendering: optimizeLegibility;
		line-height: 200%;
		word-break: break-word;
	}

	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<div class="container">
	<Title />
	<Nav { segment } />

	<main>
		<slot></slot>
</main>
</div>
