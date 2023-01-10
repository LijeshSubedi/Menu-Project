import './App.css';
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import MenuPage from './pages/MenuPage'
import PaymentPage from './pages/PaymentPage';
import AboutDevelopersPage from './pages/AboutDevelopersPage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    
    <>
    <Routes>
     <Route path='/CartPage' element={<CartPage />} />
     <Route path='/PaymentPage' element={<PaymentPage />} />
      <Route path='/' element={<HomePage />}/>
      <Route path='/AboutDeveloperPage' element={<AboutDevelopersPage />}/>
      <Route path='/MenuPage' element={<MenuPage />}/>
    </Routes>
    
    </>
 
  );
}

export default App;
