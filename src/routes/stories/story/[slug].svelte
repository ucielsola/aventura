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
	export let story;
	const { id, title } = story;
</script>

<svelte:head>
	<title>U.S. | 📝 {title}</title>
</svelte:head>

<section>
	<article class="container mt-16">
		<div class="text-center">
			<h3 class="title text-3xl ">{title}</h3>
			<!-- <span><em>{new Date(date).toLocaleDateString()}</em></span> -->
		</div>
	</article>
</section>
