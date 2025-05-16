import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://你的网站域名.com', // 部署时替换为实际域名
  base: '/',
}); 