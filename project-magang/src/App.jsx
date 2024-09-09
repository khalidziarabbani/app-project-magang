import { useState } from 'react'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <Header author="Header TEST"/>
      <button onClick={increment}>Increment ({count})</button>
    </div>
  );
}

export default App
