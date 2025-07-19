import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import project from './sanity/schemas/project'

export default defineConfig({
  name: 'default',
  title: 'Portofolio Final', // Anda bisa ganti judul ini

  // ↓↓↓ TAMBAHKAN DUA BARIS INI ↓↓↓
  projectId: 'xmff7vbu',
  dataset: 'production',
  // ↑↑↑ ------------------------- ↑↑↑

  plugins: [structureTool()],

  schema: {
   types: [project],
  },
})