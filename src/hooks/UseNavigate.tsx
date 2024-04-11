import { useNavigate } from 'react-router-dom';

const UseNavigation = () => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    return () => navigate(path);
  };

  return goTo;
};

export default UseNavigation;
