import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUser from '../redux/thunks/userThunk';

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.loading === null) {
      dispatch(getUser());
    }
  }, []);

  return user.data;
};

export default useCurrentUser;
