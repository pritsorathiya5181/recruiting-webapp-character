import { useState } from 'react';
import './App.css';
import Main from './pages/main/Main';


function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Prit Sorathiya</h1>
      </header>
      <section className="App-section">
        <Main />
      </section>
    </div>
  );
}

export default App;
