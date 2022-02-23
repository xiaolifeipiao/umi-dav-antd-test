/*
 * @Author: xiaolifeipiao
 * @Description:
 * @version: 0.0.0
 * @Date: 2022-02-23 17:02:03
 * @LastEditTime: 2022-02-23 17:06:56
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\components\ProductList.tsx
 */
import { Table, Popconfirm, Button } from 'antd';

const ProductList: React.FC<{
  products: { name: string }[];
  onDelete: (id: string) => void;
}> = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;
