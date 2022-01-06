<script context="module">
	import { GraphQLClient } from 'graphql-request';

	export async function load(ctx) {
		const graphcms = new GraphQLClient(
			'https://api-sa-east-1.graphcms.com/v2/cky0q3buw3y0b01xm3ggfb2te/master',
			{
				headers: {}
			}
		);

		const { stories } = await graphcms.request(
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
	const loading = stories ? false : true;
	console.log(stories);
</script>

<svelte:head>
	<title>YoutStory | All stories</title>
</svelte:head>

<section class="paper container">
	{#if loading}
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

<style>
	.card {
		widows: 20rem;
	}
</style>
