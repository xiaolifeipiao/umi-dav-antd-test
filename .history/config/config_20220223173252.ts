/**
@Author: xiaolifeipiao
@Description:
@version: 0.0.0
@Date: 2022-02-23 14:04:11
@LastEditTime: 2022-02-23 17:32:52
@LastEditors: xiaolifeipiao
@FilePath: \config\config.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: true,
    compact: true,
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  mfsu: {},
});
