/**
@Author: xiaolifeipiao
@Description:
@version: 0.0.0
@Date: 2022-02-23 17:10:37
@LastEditTime: 2022-02-23 17:11:39
@LastEditors: xiaolifeipiao
@FilePath: \src\services\product.ts
 */
export function queryProductList() {
  return fetch('/api/products').then((res) => res.json());
}
