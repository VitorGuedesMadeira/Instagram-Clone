import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './reducer/user';

export const useIsAuthenticated = () => !!localStorage.getItem('token');

export const useCurrentUser = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getPosts());
  }, []);

  return currentUser;
};
