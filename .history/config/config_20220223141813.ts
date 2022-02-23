/**
@Author: xiaolifeipiao
@Description:
@version: 0.0.0
@Date: 2022-02-23 14:04:11
@LastEditTime: 2022-02-23 14:18:13
@LastEditors: xiaolifeipiao
@FilePath: \config\config.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},

作者：Jimmy_fx
链接：https://juejin.cn/post/7021358536504393741
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  mfsu: {},
});
