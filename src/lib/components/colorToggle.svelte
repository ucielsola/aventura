<script>
	import { onMount } from 'svelte';
	let emoji;
	let darkMode;
	let toggleMode;
    
	onMount(async () => {
		const htmlTag = document.querySelector('html');
		emoji = darkMode === 'dark' ? '🌙 ' : '☀';
		let darkMode = false;
		toggleMode = () => {
			darkMode = !darkMode;
		};
	});
</script>

<button on:click={toggleMode}>{emoji}</button>
