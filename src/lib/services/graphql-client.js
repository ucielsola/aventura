import { GraphQLClient } from 'graphql-request';
export const client = new GraphQLClient(import.meta.env.VITE_PUBLIC_ENDPOINT);

export const storiesQuery = `query Stories {
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
			}`;

export const storyQuery = `query Story($id: ID!) {
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
			}`;
