import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    'primary-color': '#1DA57A',
  },
  antd: {
    dark: true,
    compact: true,
  },
  layout: {},
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/products', component: '@/pages/products' },
  ],
  fastRefresh: {},
});
