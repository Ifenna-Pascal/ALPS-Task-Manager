import sanityClient from "@sanity/client"
export default sanityClient({
    projectId: 'qzkegmxx',
    dataset: 'production',
    useCdn: true
});