import { Form, Input, Select } from 'antd';
import React from 'react';
import { CustomButton, CustomForm, CustomModal } from 'src/components';
import { useCreateCourseMutation, useUpdateCourseMutation } from 'src/services/courses/courses.api';
import { TChangeCourse } from 'src/services/courses/courses.types';
import { useGetTeachersQuery } from 'src/services/teachers/teachers.api';
import { useFormStorageStore } from 'src/store';

const CoursesForm: React.FC = () => {
  const [form] = Form.useForm();

  const { paramsForm, toggleModal } = useFormStorageStore();
  const { mutate: create, isPending: isPendingCreate } = useCreateCourseMutation();
  const { mutate: update, isPending: isPendingUpdate } = useUpdateCourseMutation();

  const { data } = useGetTeachersQuery(1);

  const onFinish = (values: TChangeCourse) => {
    if (!paramsForm) {
      create({
        name: values.name,
        price: values.price,
        duration: values.duration,
        count_student: values.count_student,
        user_id: values.user_id,
      });
    } else {
      update({
        id: paramsForm.id,
        name: values.name,
        duration: values.duration,
        price: values.price,
        count_student: values.count_student,
        user_id: values.user_id,
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
      <h1 className="text-xl">Курсы</h1>
      <CustomButton toggleModal={toggleModal} />
      <CustomModal form={form} isLoading={paramsForm ? isPendingUpdate : isPendingCreate}>
        <CustomForm form={form} onFinish={onFinish}>
          <Form.Item
            label="Название"
            name="name"
            required
            rules={[{ required: true, message: 'Пожалуйста заполняйте поле, Название!' }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            label="Цена"
            name="phone"
            required
            rules={[{ required: true, message: 'Пожалуйста заполняйте поле, цена!' }]}
          >
            <Input type="number" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Выбрать преподователя"
            name="course_id"
            required
            rules={[{ required: true, message: 'Пожалуйста заполняйте поле, курсы!' }]}
          >
            <Select
              className="w-full"
              options={data?.data.data.map((teacher) => ({
                label: teacher.name,
                value: teacher.id,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Количество студентов"
            name="count_student"
            required
            rules={[
              { required: true, message: 'Пожалуйста заполняйте поле, количество студентов!' },
            ]}
          >
            <Input type="number" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Длительность"
            name="duration"
            required
            rules={[{ required: true, message: 'Пожалуйста заполняйте поле, длительность!' }]}
          >
            <Input type="number" className="w-full" />
          </Form.Item>
        </CustomForm>
      </CustomModal>
    </div>
  );
};

export { CoursesForm };
