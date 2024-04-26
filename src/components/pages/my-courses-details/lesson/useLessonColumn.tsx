import { ColumnsType } from 'antd/es/table';
import { CiCircleMore } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { TDetails } from 'src/services/my-course-details/details.types';

function useLessonColumn() {
  const columns: ColumnsType<TDetails> = [
    {
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_, _r, index) => index + 1,
      width: 100,
    },
    {
      title: 'Нзавание',
      dataIndex: 'name',
      key: 'name',
      render: (_, lesson) => lesson.name,
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      render: (_, lesson) => lesson.date,
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
      render: (_, course) => (
        <div className="flex items-center justify-center gap-2">
          <Link className="text-2xl cursor-pointer" to={`${course.id}`}>
            <CiCircleMore />
          </Link>
        </div>
      ),
    },
  ];

  return columns;
}

export { useLessonColumn };
