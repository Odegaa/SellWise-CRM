import { ColumnsType } from 'antd/es/table';
import { CiCircleMore } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { TTeacherMyCoursesData } from 'src/services/my-courses/myCourses.types';

function useMyCoursesColumn() {
  const columns: ColumnsType<TTeacherMyCoursesData> = [
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
      render: (_, courses) => courses.name,
    },
    {
      title: 'Время',
      dataIndex: 'time',
      key: 'time',
      render: (_, courses) => courses.time,
    },
    {
      title: 'Дата',
      dataIndex: 'days',
      key: 'days',
      render: (_, courses) => courses.days,
    },
    {
      title: 'Старт',
      dataIndex: 'start',
      key: 'start',
      render: (_, courses) => courses.start,
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

export { useMyCoursesColumn };
