import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Routing/BrowserRouting/Home';
import About from './Routing/BrowserRouting/About';
import End from './Routing/BrowserRouting/End';
import DashBoard from './Routing/HashRouting/DashBoard';
import FinalPage from './Routing/HashRouting/FinalPage';
import PageOne from './Path Params/PageOne';
import PageTwo from './Path Params/PageTwo';

function App() {
  return (
    <div>
      {/* <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path = '/about' element={<About/>}/>
            <Route path = '/end' element={<End/>} />
          </Routes>
        </BrowserRouter>
      </div>  */}
      {/* <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/final' element={<FinalPage/>}/>
        </Routes>
      </HashRouter>
      </div> */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/pageone' element={<PageOne/>}/>
            <Route path='/pagetwo/:name' element={<PageTwo/>} />
          </Routes>
        </BrowserRouter>
     
      </div>

    </div> 
  );
}

export default App;
