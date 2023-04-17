import logo from './logo.svg';
import './App.css';

import { useRoutes } from 'react-router-dom';
import router from './router';
function App() {
  const routers = useRoutes(router)
  return (
    <>
      {routers}
    </>

  );
}

export default App;
