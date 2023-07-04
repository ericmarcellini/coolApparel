import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar /> 
        {/* <RegisterForm /> */}
        <Routes>
          <Route path ="/" />
          <Route path="/cart"/>

        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
