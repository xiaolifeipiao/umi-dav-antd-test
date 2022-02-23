/**
@Author: xiaolifeipiao
@Description:
@version: 0.0.0
@Date: 2022-02-23 17:10:37
@LastEditTime: 2022-02-23 17:21:21
@LastEditors: xiaolifeipiao
@FilePath: \src\services\product.ts
 */

/**
 export function queryProductList() {
  return fetch('/api/products').then((res) => res.json());
}
 */

// 先用 setTimeout 模拟一个请求，正常的写法如上所示
export function queryProductList(params?: {
  pageSize: number;
  current: number;
}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'dva',
        },
        {
          id: 2,
          name: 'antd',
        },
      ]);
    }, 2000);
  });
}
