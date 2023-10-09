import React from 'react';
import { Routes, Route } from 'react-router';npm 
import Ordenes from './components/pages/Ordenes';
import Menu from './components/pages/Menu';
import Plato from './components/pages/Plato';
import Sidebar from './components/ui/Sidebar';


function App() {
  return (
    <div >
      <Sidebar>
        <Routes>
          <Route path= '/'element = {<Ordenes/>}/>
          <Route path= '/menu'element = {<Menu/>}/>
          <Route path= '/plato'element = {<Plato/>}/>
        </Routes>
        </Sidebar>
    </div>
  );
}

export default App;
