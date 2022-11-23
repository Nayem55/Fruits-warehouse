import './App.css';
import {Routes , Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div>
    <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
