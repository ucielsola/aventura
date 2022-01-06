<script>
	export let action;
</script>

{#each action as { action_id, action_text, action_goToNumber }}
<button>{action_text}</button>
{/each}
