<script context="module">
	import { GraphQLClient } from 'graphql-request';
	export async function load(ctx) {
		const graphcms = new GraphQLClient(
			'https://api-sa-east-1.graphcms.com/v2/cky0q3buw3y0b01xm3ggfb2te/master',
			{
				headers: {}
			}
		);
		const { story } = await graphcms.request(
			`query Story($id: ID!) {
				story(where: { id: $id }) {
					id
					rated_18
					title
					description
					pages
				}
			}`,
			{
				id: ctx.params.slug
			}
		);
		return {
			props: {
				story
			}
		};
	}
</script>

<script>
	import StoryPage from '$lib/components/storyPage.svelte';

	export let story;
	const { id, rated_18, title, description, pages } = story;
</script>

<svelte:head>
	<title>YoutStory | 📝 {title}</title>
</svelte:head>

<section>
	<article class="container mt-16">
		<div class="text-center">
			<!-- <span><em>{new Date(date).toLocaleDateString()}</em></span> -->
			<h2 class="title text-3xl ">{title}</h2>
			<h4>{description}</h4>
			<hr />
		</div>
		<StoryPage page={pages[0]} />
	</article>
</section>

