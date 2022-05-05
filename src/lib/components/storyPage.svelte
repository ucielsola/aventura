<script>
	import PageActions from './pageActions.svelte';

	export let page;
	console.log(page);
</script>

<p>{page.text}</p>

{#each page.actions as { action_id, action_text, action_target }}
	<button>{action_text}</button>
{/each}
