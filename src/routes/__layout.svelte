<script>
	import Footer from '../lib/components/footer.svelte';
	import Nav from '../lib/components/nav.svelte';
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		margin-top: 5rem; /* nav height */
	}
</style>