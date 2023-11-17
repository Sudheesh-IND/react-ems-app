
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import View from './Components/View';
import Add from './Components/Add';
import Edit from './Components/Edit';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Pagenotfound from './Components/Pagenotfound';

function App() {
  return (
    <div className="App">
       <Header/>
      {
       
        <Routes>
          {/* localhost 3000 */}
          <Route path='/' element={<Admin/>}/>
          {/* add */}
          <Route path='add' element={<Add/>}/>
          {/* view */}
          <Route path='view/:id' element={<View/>}/>
          {/* edit */}
          <Route path='edit/:id' element={<Edit/>}/>
          {/* pagenotfonund */}
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      }
      <Footer/>
    </div>
  );
}

export default App;
