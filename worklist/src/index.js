import React,{ Component, Fragment,useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import firebase from "./firebase";
import App from "./components/App";
import { setUser, clearUser } from "./redux/users/userActions";
import Spinner from './components/UI/Spinner';


class Root extends Component {
  render() {
    return(
    <Fragment>
        <Routes>
          <Route path='/' element={<PrivateRoute/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </Fragment>
  )
  }
}

const PrivateRoute = () => {
  const [auth, setAuth] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(<App />);
        dispatch(setUser(user))
      } else {
        setAuth(<Login />);
        dispatch(clearUser())
      }
    });
  });
  return auth ? auth : <Spinner></Spinner>;
};


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter >
    <Root />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();