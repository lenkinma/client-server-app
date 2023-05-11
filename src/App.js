import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "./store/usersSlice";




function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="App">
      <div>{user?.id}</div>
      <div>{user?.email}</div>
      <div>{user?.login}</div>
      <div>{user?.name}</div>
      <div>{user?.birthday}</div>
    </div>
  );
}

export default App;
