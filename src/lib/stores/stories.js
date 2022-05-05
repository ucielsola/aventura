import { writable } from 'svelte/store';
import { client, storiesQuery, storyQuery } from '$lib/services/graphql-client.js';

export default function () {
	const stories = writable();
	const story = writable();

	async function getStories() {
		try {
			const response = await client.request(storiesQuery);
			const array = await response.stories;
			stories.set(array);
		} catch (e) {
			console.log(e);
		}
	}

	async function getStoryById(storyId) {
		try {
			const response = await client.request(storyQuery, { id: storyId });
			const object = await response.story;
			story.set(object);
		} catch (e) {
			console.log(e);
		}
	}

	return [getStories, stories, getStoryById, story];
}
