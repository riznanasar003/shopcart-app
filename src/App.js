import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProduct';
import Search from './Components/Search';
import Delete from './Components/Delete';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewProduct from './Components/ViewProduct';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Delete' element={<Delete/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      <Route path='/ViewProduct' element={<ViewProduct/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
