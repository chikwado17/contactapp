import React from 'react';
import { Route, Routes } from 'react-router';
import About from './components/About';
import AddEdit from './components/AddEdit';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import ViewContact from './components/ViewContact';


function App() {
  return (
    <div className="App">
        <Header />
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/add' element={<AddEdit />} />
          <Route path='/update/:id' element={<AddEdit />} />
          <Route path='/view/:id' element={<ViewContact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
