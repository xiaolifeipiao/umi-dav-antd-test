/**
@Author: xiaolifeipiao
@Description:
@version: 0.0.0
@Date: 2022-02-23 17:12:56
@LastEditTime: 2022-02-23 17:22:10
@LastEditors: xiaolifeipiao
@FilePath: \src\models\useProductList.ts
 */
import { useRequest } from 'umi';
import { queryProductList } from '@/services/product';
import { message } from 'antd';

export default function useProductList(params: {
  pageSize: number;
  current: number;
}) {
  const msg = useRequest(() => queryProductList(params));

  const deleteProducts = async (id: string) => {
    try {
      await removeProducts(id);
      message.success('success');
      msg.run();
    } catch (error) {
      message.error('fail');
    }
  };

  return {
    dataSource: msg.data,
    reload: msg.run,
    loading: msg.loading,
    deleteProducts,
  };
}
