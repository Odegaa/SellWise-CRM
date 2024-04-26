import { Form, Input, Select } from 'antd';
import React from 'react';
import ReactInputMask from 'react-input-mask';
import { CustomButton, CustomForm, CustomModal } from 'src/components';
import { useGetCoursesQuery } from 'src/services/courses/courses.api';
import {
  useCreateStudentMutation,
  useUpdateStudentMutation,
} from 'src/services/students/students.api';
import { TChangeStudent } from 'src/services/students/students.types';
import { useFormStorageStore } from 'src/store';

const StudentsForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsForm, toggleModal } = useFormStorageStore();

  const { mutate: create, isPending: isPendingCreate } = useCreateStudentMutation();
  const { mutate: update, isPending: isPendingUpdate } = useUpdateStudentMutation();

  const { data: courses } = useGetCoursesQuery();

  const onFinish = (values: TChangeStudent) => {
    if (!paramsForm) {
      create({
        name: values.name,
        phone: values.phone.split(' ').join(''),
        course_id: values.course_id,
      });
    } else {
      update({
        id: paramsForm.id,
        name: values.name,
        phone: values.phone.split(' ').join(''),
        course_id: values.course_id,
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
      <h1 className="text-xl">Студенты</h1>
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
              id="phone"
              type="tel"
              required
              // eslint-disable-next-line no-nonoctal-decimal-escape
              mask="+\9\98 99 999 99 99"
              className="w-full !border-slate-300 placeholder:tracking-wider rounded-md py-[5px] px-2 transition-colors !focus:border-blue-700 border-[1px]"
            />
          </Form.Item>
          {!paramsForm && (
            <Form.Item
              label="Курсы"
              name="course_id"
              required
              rules={[{ required: true, message: 'Пожалуйста заполняйте поле, курсы!' }]}
            >
              <Select
                className="w-full"
                options={courses?.data?.map((category) => ({
                  label: category?.name,
                  value: category?.id,
                }))}
              />
            </Form.Item>
          )}
        </CustomForm>
      </CustomModal>
    </div>
  );
};

export { StudentsForm };
