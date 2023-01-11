import './App.scss';
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import MenuPage from './pages/MenuPage'
import PaymentPage from './pages/PaymentPage';
import AboutDevelopersPage from './pages/AboutDevelopersPage';
import { Route,Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import CardCom from './components/CardCom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  
  return (
    
    <>
    <Navbar/>
    <Routes>

      <Route path='/CardCom' element={<CardCom />}/>
     <Route path='/CartPage' element={<CartPage />} />
     <Route path='/PaymentPage' element={<PaymentPage />} />
      <Route path='/' element={<HomePage />}/>
      <Route path='/AboutDeveloperPage' element={<AboutDevelopersPage />}/>
      <Route path='/MenuPage' element={<MenuPage />}/>
      <Route path='/SignupPage' element={<SignUpPage />}/>
      <Route path='/SigninPage' element={<SignInPage />}/>




    </Routes>
    <Footer/>
    
    </>
 
  );
}

export default App;
