<script context="module">
	import { client } from '$lib/services/graphql-client.js';

	export async function load(ctx) {
		const { stories } = await client.request(
			`query Stories {
				stories {
					id
					rated_18
					title
					description
					pages
					cover {
      					id
      					url
    				}
					author {
						id
						full_name
						author_link
						author_avatar {
       						 url
      					} 
    				}
					publish_date
				}
			}`
		);
		return {
			props: {
				stories
			}
		};
	}
</script>

<script>
	export let stories;
</script>

<svelte:head>
	<title>Aventura! | All stories</title>
</svelte:head>

<section class="paper container">
	{#if !stories}
		<h1>Loading...</h1>
	{:else}
		{#each stories as { id, rated_18, title, description, pages, cover, author, publish_date }}
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
	{/if}
</section>
