<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import StoryPage from '$lib/components/storyPage.svelte';
	import fetchStories from '$lib/stores/stories.js';
	import Spinner from '../../../lib/utils/spinner.svelte';
	const [getStories, stories, getStoryById, story] = fetchStories();

	getStoryById($page.params.slug);

	const goToPage = (event) => {
		let page = event.detail.pageNum;
		activePage = $story.pages[Number(page)];
	};

	let activePage;
	$: {
		if ($story) activePage = $story.pages[0];
	}
</script>

<svelte:head>
	<title>Aventura! | 📝 {$story?.title || 'Loading...'}</title>
</svelte:head>

<section class="paper container">
	{#if !$story}
		<div class="centered" transition:fade={{ duration: 400 }}><Spinner /></div>
	{:else}
		{#await $story then}
			<article class="mt-16" in:fade={{ delay: 500 }}>
				<div class="text-center">
					<header class="paper">
						<img src={$story.cover.url} alt={$story.title} />
						<div class="col">
							<h2 class="title text-3xl ">{$story.title}</h2>
							<h4>{$story.description}</h4>
							<div class="author">
								<img src={$story.author.author_avatar.url} alt={$story.author.full_name} />
								<p>
									Writen by <a
										href={$story.author.author_link.url}
										title={$story.author.author_link.text}>{$story.author.full_name}</a
									>
								</p>
							</div>
						</div>
					</header>
					<hr />
				</div>
				<StoryPage page={activePage} on:pageNum={goToPage} />
			</article>
		{/await}
	{/if}
</section>

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

	.centered {
		display: grid;
		place-content: center;
		min-height: 50vh;
	}
</style>
