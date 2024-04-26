/* eslint-disable @typescript-eslint/indent */
import { Table } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Section } from 'src/components';
import { useGetDavomatQuery, usePostDavomatMutation } from 'src/services/davomat/davomat.api';

import { useDavomatColumn } from './useDavomatColumn';

const Davomat: React.FC = () => {
  const [saveButton, setSaveButton] = React.useState(false);
  const [checking, setChecking] = React.useState(false);
  const { id, lessonId } = useParams();
  const { data, isLoading } = useGetDavomatQuery(Number(id));
  const { mutate, isSuccess } = usePostDavomatMutation(Number(lessonId));
  const columns = useDavomatColumn();

  const dataSourse = data?.data.map((el: any) => ({
    ...el,
    key: el.id,
  }));

  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleClick = () => {
    mutate({ students: selectedRowKeys });
  };

  const handleChecking = () => {
    setChecking(true);
    setSaveButton(true);
  };

  React.useEffect(() => {
    if (isSuccess) {
      setSelectedRowKeys([]);
      setChecking(false);
      setSaveButton(false);
    }
  }, [isSuccess, data]);

  return (
    <Section>
      <div className="flex items-center justify-end">
        <button
          onClick={handleChecking}
          className="bg-slate-500 py-2 px-8 text-white rounded-xl text-md"
        >
          Перечислять
        </button>
      </div>
      <Table
        loading={isLoading}
        dataSource={dataSourse}
        columns={columns}
        pagination={{
          defaultPageSize: data?.data?.length,
        }}
        rowSelection={
          checking
            ? {
                selectedRowKeys,
                onChange: onSelectChange,
              }
            : false
        }
        className="relative rounded-lg overflow-auto lg:w-full bg-white p-2"
      />
      {saveButton && (
        <div className="flex items-center justify-end pr-5">
          <button
            onClick={handleClick}
            className="p-2 rounded-lg text-white bg-slate-500 transition-colors hover:bg-slate-600"
          >
            Сохранить
          </button>
        </div>
      )}
    </Section>
  );
};

export { Davomat };
