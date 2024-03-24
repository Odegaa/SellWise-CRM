import { Form, Input } from 'antd';
import React from 'react';
import ReactInputMask from 'react-input-mask';
import { CustomButton, CustomForm, CustomModal } from 'src/components';
import {
  useCreateTeacherMutation,
  useUpdateTeacherMutation,
} from 'src/services/teachers/teachers.api';
import { TChangeTeacher } from 'src/services/teachers/teachers.types';
import { useFormStorageStore } from 'src/store';

const TeachersForm: React.FC = () => {
  const [form] = Form.useForm();
  const { toggleModal, paramsForm } = useFormStorageStore();
  const { mutate: create, isPending: isPendingCreate } = useCreateTeacherMutation();
  const { mutate: update, isPending: isPendingUpdate } = useUpdateTeacherMutation();

  const onFinish = (values: TChangeTeacher) => {
    if (!paramsForm) {
      create({
        name: values.name,
        phone: values.phone.split(' ').join(''),
        password: values.password,
      });
    } else {
      update({
        id: paramsForm.id,
        name: values.name,
        phone: values.phone.split(' ').join(''),
        password: values.password,
      });
    }

    form.resetFields();
    toggleModal();
  };

  React.useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue({ ...paramsForm });
    }
  }, [paramsForm, form]);

  return (
    <div className="flex justify-between px-2">
      <h1 className="text-xl">Преподователи</h1>
      <CustomButton toggleModal={toggleModal} />
      <CustomModal form={form} isLoading={paramsForm ? isPendingUpdate : isPendingCreate}>
        <CustomForm form={form} onFinish={onFinish}>
          <Form.Item
            label="Имя Фамилия"
            name="name"
            required
            rules={[{ required: true, message: 'Пожалуйста заполняйте поле, Имя Фамилия!' }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            label="Телефон номер"
            name="phone"
            required
            rules={[{ required: true, message: 'Пожалуйста заполняйте поле, телефон номер!' }]}
          >
            <ReactInputMask
              // eslint-disable-next-line no-nonoctal-decimal-escape
              mask="+\9\98 99 999 99 99"
              className="w-full !border-slate-300 placeholder:tracking-wider rounded-md py-[5px] px-2 transition-colors !focus:border-blue-700 border-[1px]"
            />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            required
            rules={[{ required: true, message: 'Пожалуйста заполняйте поле, пароль!' }]}
          >
            <Input className="w-full" type="password" />
          </Form.Item>
        </CustomForm>
      </CustomModal>
    </div>
  );
};

export { TeachersForm };
