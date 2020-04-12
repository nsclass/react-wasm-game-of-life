import React, {useState} from 'react';
import './App.css';


const App = () => {
  const [loading, setLoading] = useState(false)
  const [wasm, setWasm] = useState(null)

  const loadWasm = async () => {
    try {
      setLoading(true)
      console.log("loading...")
      const wasm = await import('wasm-game-of-life');
      setWasm(wasm);
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    } finally {
      setLoading(false)
    }
  };

  if (!wasm && !loading) {
    loadWasm()
  }

  if (!wasm) {
    return (
      <div>
        <label className="label">load...</label>
      </div>
    )
  }
  
  const hello = wasm.greet('Nam');
  return (
    <label className="label">{`${hello}`}</label>
  );
}

export default App;
