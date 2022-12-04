import './App.css';
import {Routes , Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Inventory from './Components/Inventory/Inventory';
import Manage from './Components/Manage/Manage';
import AddProduct from './Components/AddProduct/AddProduct';
import { useState } from 'react';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

function App() {
  const [editId,setEditId]=useState("")
  return (
    <div>
    <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/manage' element={<Manage setEditId={setEditId}></Manage>}></Route>
        <Route path='/addproduct' element={<AddProduct editId={editId} setEditId={setEditId}></AddProduct>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;

