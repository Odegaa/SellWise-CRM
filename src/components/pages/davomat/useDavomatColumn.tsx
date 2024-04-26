import { ColumnsType } from 'antd/es/table';
import { TDavomat } from 'src/services/davomat/davomat.types';

function useDavomatColumn() {
  const columns: ColumnsType<TDavomat> = [
    {
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_, _r, index) => index + 1,
      width: 100,
    },
    {
      title: 'Нзавание',
      dataIndex: 'name',
      key: 'name',
      render: (_, davomat) => davomat.name,
    },
    {
      title: 'Телефон номер',
      dataIndex: 'phone',
      key: 'phone',
      render: (_, davomat) => davomat.phone,
    },
  ];
  return columns;
}

export { useDavomatColumn };
