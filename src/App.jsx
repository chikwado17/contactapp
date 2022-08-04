import React from 'react';
import { Route, Routes } from 'react-router';
import AddEdit from './components/AddEdit';
import Dashboard from './components/Dashboard';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
        <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/add' element={<AddEdit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
