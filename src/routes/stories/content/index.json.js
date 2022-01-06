import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
	try {
		const query = gql`
			query Stories {
				stories {
					id
					rated_18
					title
					pages
					description
				}
			}
		`;
		const { stories } = await client.request(query);
		return {
			status: 200,
			body: { stories }
		};
	} catch (error) {
		console.log(error);
		return {
			status: 500,
			body: { error: 'There was a server error.' }
		};
	}
};
