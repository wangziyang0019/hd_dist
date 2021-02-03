import { defineConfig } from 'dumi';

const repo = 'hd_dist';
const repoa = '文档库';

export default defineConfig({
  title: repoa,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    {
      title: '技术文档',
      path: '/document',
    },
    {
      title: '会议记录',
      path: '/record',
    },
    {
      title: '开发约定',
      path: '/standard',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/wangziyang0019/testn',
    },
  ],
  // more config: https://d.umijs.org/config
});
