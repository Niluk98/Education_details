
import './App.css';
import Contact from './Components/DataForm/Contact';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Login from './Components/Login/Login';

function App() {
  return (
    
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Navbar />}>
      <Route path='contacts' element={<Contact/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='categories' element={<Categories/>}/>
      </Route>
      <Route path='/login'  element={<Login/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
