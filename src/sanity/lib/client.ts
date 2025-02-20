import { createClient } from 'next-sanity';

export const client = createClient({
  projectId:"pohrmv4b",
  dataset:"production",
  apiVersion:"2023-10-24",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
