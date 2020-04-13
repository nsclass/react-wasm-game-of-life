import React, {useState} from 'react';
import './App.css';
import Renderer from './components/Renderer';

const App = () => {
  const [loading, setLoading] = useState(false)
  const [universe, setUniverse] = useState(null)

  const loadWasm = async () => {
    try {
      setLoading(true)
      console.log("loading...")      
      const wasm = await import('wasm-game-of-life');
      setUniverse(wasm.Universe.new());
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    } finally {
      setLoading(false)
    }
  };

  if (!universe && !loading) {
    loadWasm()
  }

  if (!universe) {
    return (
      <div className="container">
        <h1 className="title">loading...</h1>
      </div>
    )
  }
  
  return (
    <section>
      <div className="container">
        <Renderer universe={universe} />
      </div>      
    </section>
  );
}

export default App;
