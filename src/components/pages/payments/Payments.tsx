import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomTable, Section } from 'src/components';
import { useGetPaymentsQuery } from 'src/services/payments/payments.api';

import { usePaymentsColumn } from './usePaymentsColumn';

const Payments: React.FC = () => {
  const { id } = useParams();
  const { data: payments, isLoading } = useGetPaymentsQuery(Number(id));
  const columns = usePaymentsColumn();

  return (
    <Section>
      <CustomTable
        loading={isLoading}
        dataSource={payments?.data}
        columns={columns}
        pagination={{
          total: payments?.data.length,
        }}
      />
    </Section>
  );
};

export { Payments };
