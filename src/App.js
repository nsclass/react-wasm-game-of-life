import React, { useState , useEffect} from "react"
import "./App.css"
import Renderer from "./components/Renderer"

const App = () => {
  const [loading, setLoading] = useState(true)
  const [universe, setUniverse] = useState(null)
  const [wasmMemory, setWasmMemory] = useState(null)

  const loadWasm = async () => {
    try {
      setLoading(true)
      console.log("loading...")
      const wasm = await import("wasm-game-of-life")
      setUniverse(wasm.Universe.new())

      const memory = await import("wasm-game-of-life/wasm_game_of_life_bg")
      setWasmMemory(memory)
    } catch (err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadWasm()
  }, [])

  if (loading) {
    return (
      <div className="container">
        <h1 className="title">loading...</h1>
      </div>
    )
  }

  if (!universe || !wasmMemory) {
    return (
        <div className="container">
          <h1>Failed to load WASM</h1>
        </div>
    )
  }

  return (
      <Renderer universe={universe} wasmMemory={wasmMemory} />
  )
}

export default App
