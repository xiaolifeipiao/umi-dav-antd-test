/*
 * @Author: xiaolifeipiao
 * @Description:
 * @version: 0.0.0
 * @Date: 2022-02-23 17:02:03
 * @LastEditTime: 2022-02-23 17:05:37
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\ProductList.tsx
 */
import { Table, Popconfirm, Button } from 'antd';

const ProductList: React.FC<{
  products: { name: string }[];
  onDelete: (id: string) => void;
}> = ({ onDelete, products }) => {};
