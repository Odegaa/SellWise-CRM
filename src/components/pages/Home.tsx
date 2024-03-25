import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetMeQuery } from 'src/services';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetMeQuery();

  React.useEffect(() => {
    if (data?.data.role_id === 2) {
      navigate('/my-courses');
    } else if (data?.data.role_id === 1) {
      navigate('/teachers');
    }
  }, [navigate, isLoading, data]);

  return <> </>;
};

export { Home };
