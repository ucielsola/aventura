import { writable } from 'svelte/store';
import { client, storiesQuery } from '$lib/services/graphql-client.js';

export default function () {
	const loading = writable(false);
	const error = writable(false);
	const stories = writable([]);

	async function getStories() {
		loading.set(true);
		error.set(false);
		try {
			const response = await client.request(storiesQuery);
			stories.set(await response);
			// console.log(response);
		} catch (e) {
			error.set(e);
		}
		loading.set(false);
	}

	async function getStoryById() {
		loading.set(true);
		error.set(false);
		try {
			const response = await client.request(storiesQuery);
			stories.set(await response);
			// console.log(response);
		} catch (e) {
			error.set(e);
		}
		loading.set(false);
	}

	return [stories, loading, error, getStories, getStoryById];
}
