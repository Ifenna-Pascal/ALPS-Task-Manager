import sanityClient from "@sanity/client"
export default sanityClient({
    projectId: 'qzkegmxx',
    dataset: 'production',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN
});