import { SanityClient } from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url';

const client = SanityClient({
	projectID: process.env.REACT_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2022-04-07',
	useCdn: true,
	token: process.env.REACT_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

const urlFor = source => builder.image(source);

export { client, urlFor };
