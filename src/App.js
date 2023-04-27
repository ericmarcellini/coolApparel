import React from 'react';
import NavBar from './components/Navbar';
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Button>sup</Button>
      <h1> Hello World</h1>
    </div>
  );
}

export default App;
