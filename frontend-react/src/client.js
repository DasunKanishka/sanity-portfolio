import sanityClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	dataset: process.env.REACT_APP_SANITY_DATA_SET,
	apiVersion: process.env.REACT_APP_SANITY_APP_VERSION,
	useCdn: process.env.REACT_APP_SANITY_USE_CDN,
});

const builder = createImageUrlBuilder(client);

const urlFor = source => builder.image(source);

export { client, urlFor };
