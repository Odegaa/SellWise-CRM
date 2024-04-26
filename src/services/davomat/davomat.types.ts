import { Key } from 'react';

export type TResponseDavomat = {
  success: string;
  data: TDavomat[];
};

export type TDavomat = {
  id: number;
  name: string;
  phone: string;
  created_at: string;
  updated_at: string;
};

export type TDavomatChange = {
  id: number;
};

export type TPostDavomat = {
  students: number[] | Key[];
};
