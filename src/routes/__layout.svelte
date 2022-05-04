<script>
	import Footer from '../lib/components/footer.svelte';
	import Nav from '../lib/components/nav.svelte';
</script>

<Nav />

<main>
	<div class="spacer" />
	<slot />
</main>

<Footer />

<style>
	.spacer {
		margin-top: 5rem; /* nav height */
	}
</style>
