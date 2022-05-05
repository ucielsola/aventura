<script context="module">
	import { client } from '$lib/services/graphql-client.js';
	export async function load(ctx) {
		const { story } = await client.request(
			`query Story($id: ID!) {
				story(where: { id: $id }) {
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
	const { id, rated_18, title, description, pages, cover, publish_date, author } = story;
	let activePage = pages[0];
	const goToPage = (event) => {
		let page = event.detail.pageNum;
		activePage = pages[Number(page)];
	};
</script>

<svelte:head>
	<title>Aventura! | 📝 {title}</title>
</svelte:head>

<article class="container mt-16">
	<div class="text-center">
		<!-- <span><em>{new Date(date).toLocaleDateString()}</em></span> -->
		<header class="paper">
			<img src={cover.url} alt={title} />
			<div class="col">
				<h2 class="title text-3xl ">{title}</h2>
				<h4>{description}</h4>
				<div class="author">
					<img src={author.author_avatar.url} alt={author.full_name} />
					<p>
						Writen by <a href={author.author_link.url} title={author.author_link.text}
							>{author.full_name}</a
						>
					</p>
				</div>
			</div>
		</header>
		<hr />
	</div>
	<div class="paper">
		<StoryPage page={activePage} on:pageNum={goToPage} />
	</div>
</article>

<style>
	header {
		display: flex;
		align-items: center;
	}
	hr {
		margin-block: 2rem;
	}
	img {
		width: 10rem;
		height: 10rem;
	}
	h2,
	h4 {
		margin: 0.5rem;
	}

	.author {
		display: flex;
	}
	.author img {
		width: 5rem;
		height: 5rem;
	}
</style>
