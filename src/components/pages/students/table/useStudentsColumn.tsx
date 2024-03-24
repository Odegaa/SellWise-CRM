/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ColumnsType } from 'antd/es/table';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CustomConfirm } from 'src/components';
import { useDeleteStudentMutation } from 'src/services/students/students.api';
import { TStudents } from 'src/services/students/students.types';
import { useFormStorageStore } from 'src/store';

function useStudentsColumn() {
  const { setParamsForm } = useFormStorageStore();
  const { mutate: deleteStudent } = useDeleteStudentMutation();

  const columns: ColumnsType<TStudents> = [
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
      render: (_, student) => student.name,
    },
    {
      title: 'Телефон номер',
      dataIndex: 'phone',
      key: 'phone',
      render: (_, student) => student.phone,
    },
    {
      title: 'Курс',
      dataIndex: 'course_name',
      key: 'course_name',
      render: (_, student) => student.course.name,
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
      render: (_, teacher) => (
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl cursor-pointer" onClick={() => setParamsForm(teacher)}>
            <CiEdit />
          </span>
          <CustomConfirm
            title="Удалить"
            description="Вы действительно хотите удалить?"
            onConfirm={() => deleteStudent(Number(teacher.id))}
            okText="Удалить"
            cancelText="Отмена"
            okType="danger"
          >
            <span className="text-xl cursor-pointer">
              <RiDeleteBin6Line />
            </span>
          </CustomConfirm>
        </div>
      ),
    },
  ];

  return columns;
}

export { useStudentsColumn };
