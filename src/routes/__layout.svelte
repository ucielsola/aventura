<script>
	import Nav from '../lib/components/nav.svelte';
</script>

<header>
	<Nav />
</header>

<main>
	<slot />
</main>

<style>
	header {
		min-height: 5rem;
	}
</style>
