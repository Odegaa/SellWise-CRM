/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { ColumnsType } from 'antd/es/table';
import { TPaymentData } from 'src/services/payments/payments.types';
import { useGetStudentsQuery } from 'src/services/students/students.api';

function usePaymentsColumn() {
  const { data } = useGetStudentsQuery();

  const columns: ColumnsType<TPaymentData> = [
    {
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_, _r, index) => index + 1,
      width: 100,
    },
    {
      title: 'Имя Фамилия',
      dataIndex: 'name',
      key: 'name',
      render: (_, payment) =>
        data?.data.map((student) => student.id === payment.student_id && student.name) ||
        'Загрузка',
    },
  ];
  return columns;
}

export { usePaymentsColumn };
