import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/404NotFound/NotFound';
import Homepage from './Components/Homepage/Homepage';
import Nav from './Components/Navbar/Nav';
import Blogs from './Components/Blogs/Blogs'
import Reviews from './Components/Reviews/Reviews'
import Analytics from './Components/Analytics/Analytics';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      
      <Nav></Nav>
      

      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>

        <Route path='/reviews' element={<Reviews></Reviews>}></Route>

        <Route path='/analytics' element={<Analytics></Analytics>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      
    </div>
  );
}

export default App;
