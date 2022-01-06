<script>
	import { onMount } from 'svelte';

	let darkMode = false;
	let toggleMode;
	onMount(() => {
		const html = document.querySelector('html');
		toggleMode = () => {
			html.classList.toggle('dark');
			darkMode = !darkMode;
			console.log(darkMode);
		};
	});
</script>

<button on:click={toggleMode}>{!darkMode ? '🌙' : '🔆'}</button>
