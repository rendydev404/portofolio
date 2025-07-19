import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = '2024-07-18'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` jika Anda ingin data yang paling baru setiap saat
})