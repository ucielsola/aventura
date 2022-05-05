<script>
	import { fade } from 'svelte/transition';
	import fetchStories from '$lib/stores/stories.js';
	import Spinner from '../../lib/utils/spinner.svelte';
	const [stories, loading, error, getStories] = fetchStories();
</script>

<svelte:head>
	<title>Aventura! | All stories</title>
</svelte:head>

<section class="paper container">
	{#if $loading}
		<div class="centered" transition:fade={{ duration: 400 }}><Spinner /></div>
	{:else if $error}
		<h1 transition:fade={{ duration: 400 }}>Error: {$error}</h1>
	{:else}
		{#await $stories then}
			{#each $stories.stories as { id, rated_18, title, description, pages, cover, author, publish_date }}
				<div class="row flex-center" in:fade={{ delay: 500 }}>
					<div class="card">
						<img src={cover.url} alt={title} />

						<div class="card-body">
							<h4 class="card-title">{title}</h4>
							<h5 class="card-subtitle">
								<a href={author.author_link.url}>{author.full_name}</a> - {publish_date}
							</h5>
							<p class="card-text">
								{description}
							</p>
							<a href="/stories/story/{id}"><button>Read story</button></a>
						</div>
					</div>
				</div>
			{/each}
		{/await}
	{/if}
</section>

<style>
	section {
		min-height: 50vh;
	}

	.centered {
		display: grid;
		place-content: center;
		min-height: 90vh;
	}
</style>
