import 'swiper/swiper.min.css';
// import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './Assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';

import { BrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Header from './Componenets/Header/Header';
import Routes, { router } from './Routes/Routes';
import Footer from './Componenets/Footer/Footer';




function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;