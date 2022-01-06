<script>
	import PageActions from './pageActions.svelte';

	export let page;
	console.log(page);
</script>

<p>{page.text}</p>

<PageActions action={page.actions} />
