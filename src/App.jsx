import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Success from './pages/Success';
import Home from './pages/Home';
import Error from './pages/Error';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<ProtectedRoute element={<Success />}/>} />
         <Route path='/*' element={<Error/>} />   {/*after default path if he types anything it wiull throw an error */}
      </Routes>
    </BrowserRouter>
  )
}

export default App