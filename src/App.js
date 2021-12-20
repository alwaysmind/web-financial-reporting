import { useEffect } from 'react';

import './App.css';

import {
  BrowserRouter,
} from 'react-router-dom'
import Routing from './routes';
import Cookies from 'js-cookie';
import { setToken } from './utils';

const App = () => {

  if (Cookies.get("token")) {
    setToken(Cookies.get("token"))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="App">

      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
