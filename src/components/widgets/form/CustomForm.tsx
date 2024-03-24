import { Form, FormInstance } from 'antd';
import React from 'react';

const CustomForm: React.FC<{
  form: FormInstance<any>;
  onFinish: (values: any) => void;
  children: React.ReactNode;
}> = ({ form, onFinish, children }) => (
  <Form
    name="basic"
    form={form}
    labelCol={{ span: 30 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    layout="vertical"
    autoComplete="off"
    className="min-h-full w-full"
  >
    {children}
  </Form>
);

export { CustomForm };
