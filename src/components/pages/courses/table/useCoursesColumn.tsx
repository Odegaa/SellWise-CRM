/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ColumnsType } from 'antd/es/table';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CustomConfirm } from 'src/components';
import { useDeleteCourseMuation } from 'src/services/courses/courses.api';
import { TCourse } from 'src/services/courses/courses.types';
import { useFormStorageStore } from 'src/store';

function useCoursesColumn() {
  const { setParamsForm } = useFormStorageStore();
  const { mutate: deleteCourse } = useDeleteCourseMuation();

  const columns: ColumnsType<TCourse> = [
    {
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_, _r, index) => index + 1,
      width: 100,
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      render: (_, student) => student.name,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (_, student) => student.price,
    },
    {
      title: 'Длительность',
      dataIndex: 'duration',
      key: 'duration',
      render: (_, student) => student.duration,
    },
    {
      title: 'Количество студентов',
      dataIndex: 'count_student',
      key: 'count_student',
      render: (_, student) => student.count_student,
    },
    {
      title: 'Учитель',
      dataIndex: 'teacher',
      key: 'teacher',
      render: (_, student) => student.teacher.name,
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
            onConfirm={() => deleteCourse(Number(teacher.id))}
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

export { useCoursesColumn };
