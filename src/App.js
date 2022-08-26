import React from 'react';
import Form from './components/Form'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <p className='title'>
          MV191973<br/>
          Lista de compras para el supermercado
        </p>
        <Form />
      </div>
    </div>
  );
}
export default App;
