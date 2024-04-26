/* eslint-disable implicit-arrow-linebreak */
import { useQuery } from '@tanstack/react-query';

import { axiosGetPayments } from './payments.services';

const useGetPaymentsQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetPayments(id),
    queryKey: ['payments'],
  });

export { useGetPaymentsQuery };
