<script>
	import fetchStories from '$lib/stores/stories.js';
	const [stories, loading, error, getStories] = fetchStories();
</script>

<svelte:head>
	<title>Aventura! | All stories</title>
</svelte:head>

<section class="paper container">
	{#if $loading}
		<h1>Loading...</h1>
	{:else if $error}
		<h1>Error: {$error}</h1>
	{:else}
		{#await $stories}
			<h1>Loading...</h1>
		{:then name}
			{#each $stories.stories as { id, rated_18, title, description, pages, cover, author, publish_date }}
				<div class="row flex-center">
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
