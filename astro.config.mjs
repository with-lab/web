import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import astroI18next from 'astro-i18next'
import deno from '@deno/astro-adapter'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: deno(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    astroI18next(),
    sitemap(),
  ],
})
