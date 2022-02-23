/**
@Author: xiaolifeipiao
@Description:
@version: 0.0.0
@Date: 2022-02-23 17:12:56
@LastEditTime: 2022-02-23 17:15:46
@LastEditors: xiaolifeipiao
@FilePath: \src\models\useProductList.ts
 */
import { useRequest } from 'umi';
import { queryProductList } from '@/services/product';

export const useProductList = (params: {
  pageSize: number;
  current: number;
}) => {
  const msg = useRequest(() => queryProductList(params));
};
