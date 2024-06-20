// astro.config.mjs

import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  pages: [{
    path: '/'
  } // Zde definujte cesty vašich stránek, např. '/about', '/blog', atd.
  ],
  async run({
    server
  }) {
    // Endpoint pro získání seznamu obrázků
    server.endpoint('/imglist', async (req, res) => {
      const imgFolderPath = path.join(process.cwd(), 'yung', 'public', 'img');
      try {
        const imageFiles = fs.readdirSync(imgFolderPath).filter(file => file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png'));
        const imagePaths = imageFiles.map(file => `/img/${file}`);
        res.json(imagePaths);
      } catch (err) {
        res.status(500).json({
          error: 'Failed to load images.'
        });
      }
    });
  },
  integrations: [react(), tailwind()]
});