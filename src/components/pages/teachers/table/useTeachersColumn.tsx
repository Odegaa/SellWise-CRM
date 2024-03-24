/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ColumnsType } from 'antd/es/table';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CustomConfirm } from 'src/components';
import { useDeleteTeacherMutation } from 'src/services/teachers/teachers.api';
import { TTeacherData } from 'src/services/teachers/teachers.types';
import { useFormStorageStore } from 'src/store';

function useTeachersColumn() {
  const { setParamsForm } = useFormStorageStore();
  const { mutate: deleteTeacher } = useDeleteTeacherMutation();

  const columns: ColumnsType<TTeacherData> = [
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
      render: (_, teacher) => teacher.name,
    },
    {
      title: 'Телефон номер',
      dataIndex: 'phone',
      key: 'phone',
      render: (_, teacher) => teacher.phone,
    },
    {
      title: 'Изменено',
      dataIndex: 'updated_at',
      key: 'updated_at',
      render: (_, teacher) => teacher.updated_at,
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
            onConfirm={() => deleteTeacher(Number(teacher.id))}
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

export { useTeachersColumn };
