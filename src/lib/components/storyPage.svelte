<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let handleClick = (pageNum) => {
		dispatch('pageNum', {
			pageNum
		});
	};
	export let page;
</script>

<p>{page.text}</p>

{#each page.actions as { action_id, action_text, action_target }}
	<button on:click={() => handleClick(action_target)}>{action_text}</button>
{/each}
