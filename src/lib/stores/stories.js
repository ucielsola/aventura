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
			console.log(response);
			// stories.set(await client.request(storiesQuery));
		} catch (e) {
			error.set(e);
		}
		loading.set(false);
	}

	getStories();
	return [stories, loading, error, getStories];
}
