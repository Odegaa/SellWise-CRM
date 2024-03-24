// eslint-disable-next-line object-curly-newline
import { Button, Flex, FormInstance, Modal, Space } from 'antd';
import React from 'react';
import { useFormStorageStore } from 'src/store';

interface IProps {
  children: React.ReactNode;
  form: FormInstance<any>;
  isLoading: boolean;
}

const CustomModal: React.FC<IProps> = (props) => {
  const { form, isLoading } = props;
  // eslint-disable-next-line object-curly-newline
  const { modal, paramsForm, setParamsItem, toggleModal } = useFormStorageStore();

  const onClose = () => {
    if (modal) toggleModal();
    if (paramsForm) {
      form.resetFields();
      setParamsItem(null);
    }
  };

  React.useEffect(() => {
    if (!isLoading) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, isLoading]);

  return (
    <Modal
      open={modal}
      onCancel={onClose}
      title={paramsForm ? 'Изменить' : 'Добавить'}
      footer={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <Flex className="justify-end">
          <Space>
            <Button className="border-slate-800 " onClick={onClose}>
              Отмена
            </Button>
            <Button type="primary" onClick={form.submit} loading={isLoading}>
              Сохранить
            </Button>
          </Space>
        </Flex>
      }
      {...props}
    />
  );
};

export { CustomModal };
