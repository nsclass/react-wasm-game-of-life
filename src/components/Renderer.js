import React, {useState} from "react"
import useAnimationFrame from "./UseAnimationFrame"

const Renderer = ({universe}) => {
  const [scene, setScene] = useState("")

  useAnimationFrame(deltaTime => {
    const current = universe.render()
    universe.tick()
    setScene(current)
  })

  return (
    <div className="container">
      <div id="game-of-life-canvas">{scene}</div>
    </div>
  )
}

export default Renderer