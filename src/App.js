import React from 'react';
import './App.css';
import Notificacoes from './Notificacoes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exemplo de Notificações com Socket.IO</h1>
      </header>
      <Notificacoes />
    </div>
  );
}

export default App;
