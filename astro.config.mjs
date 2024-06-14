import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  base: '/security/compliances',
  // server: { host: "prod.foo.redhat.com", port: 8080, open: true },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [tailwind(), react(), astroI18next()],
});
