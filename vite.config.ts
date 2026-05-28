import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { blogPosts } from './src/data/blogData'
import { locationData } from './src/data/locationData'

const generateSitemap = () => {
  const baseUrl = 'https://www.flexophysio.com';
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/conditions',
    '/faq',
    '/blog',
    ...blogPosts.map(p => `/blog/${p.slug}`),
    ...Object.keys(locationData).map(loc => `/physiotherapy-${loc}`)
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n')}
</urlset>`;
};

const sitemapPlugin = () => {
  return {
    name: 'sitemap-plugin',
    writeBundle(options: any) {
      const outDir = options.dir || 'dist';
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      const sitemapPath = path.normalize(path.resolve(outDir, 'sitemap.xml'));
      const robotsPath = path.normalize(path.resolve(outDir, 'robots.txt'));
      
      fs.writeFileSync(sitemapPath, generateSitemap());
      fs.writeFileSync(robotsPath, `User-agent: *\nAllow: /\n\nSitemap: https://www.flexophysio.com/sitemap.xml`);
      console.log('✅ Generated sitemap.xml and robots.txt');
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemapPlugin()
  ],
  server: {
    proxy: {
      '/api/extension': {
        target: 'https://extension.flash.co',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
