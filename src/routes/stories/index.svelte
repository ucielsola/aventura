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
	<title>YoutStory | All stories</title>
</svelte:head>

<section>
	{#each stories as { id, rated_18, title, description, pages }}
		<ul>
			<li>{id}</li>
			<li>{rated_18}</li>
			<li>{title}</li>
			<li>{description}</li>
			<li>{pages}</li>

			<a href="/stories/story/{id}">Read Story</a>
		</ul>
	{/each}
</section>
