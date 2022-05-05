<script>
	import Hand from '../assets/hand.svg';
</script>

<svelte:head>
	<title>Aventura! - Uciel Sola</title>
</svelte:head>

<section class="paper section container">
	<h1>Welcome to Aventura!</h1>
	<p>
		If you loved the <span class="bold">Choose Your Own Adventure</span> books (or any other
		simliar), this is your place. Here you will find amazing adventures to read online, or perhaps a
		place to <span class="bold">publish your own stories!</span>
	</p>
	<img src={Hand} alt="" />
    
</section>

<style section>
	.bold {
		font-weight: 600;
	}
	img {
		max-width: 75%;
		margin-inline: auto;
	}
</style>
