import React, { useState } from "react"
import useAnimationFrame from "./UseAnimationFrame"

const CELL_SIZE = 5 // px
const GRID_COLOR = "#CCCCCC"
const DEAD_COLOR = "#FFFFFF"
const ALIVE_COLOR = "#000000"

const Renderer = ({ universe, wasmMemory }) => {
  // const [scene, setScene] = useState("")
  const [needsDraw, setNeedsDraw] = useState(false)
  const canvasRef = React.useRef(null)

  const [canvasWidth, setCanvasWidth] = useState((CELL_SIZE + 1) * universe.width() + 1)
  const [canvasHeight, setCanvasHeight] = useState((CELL_SIZE + 1) * universe.height() + 1)

  const drawGrid = (ctx) => {
    const width = universe.width()
    const height = universe.height()

    ctx.beginPath()
    ctx.strokeStyle = GRID_COLOR

    // Vertical lines.
    for (let i = 0; i <= width; i++) {
      ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0)
      ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1)
    }

    // Horizontal lines.
    for (let j = 0; j <= height; j++) {
      ctx.moveTo(0, j * (CELL_SIZE + 1) + 1)
      ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1)
    }

    ctx.stroke()
  }

  const getIndex = (row, column) => {
    const width = universe.width()
    return row * width + column
  }

  const drawCells = (ctx) => {
    const width = universe.width()
    const height = universe.height()

    const cellsPtr = universe.cells()
    const cells = new Uint8Array(wasmMemory.memory.buffer, cellsPtr, width * height)

    ctx.beginPath()

    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const idx = getIndex(row, col)

        ctx.fillStyle = cells[idx] === 0 ? DEAD_COLOR : ALIVE_COLOR

        ctx.fillRect(col * (CELL_SIZE + 1) + 1, row * (CELL_SIZE + 1) + 1, CELL_SIZE, CELL_SIZE)
      }
    }

    ctx.stroke()
  }

  React.useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    drawGrid(ctx)
    drawCells(ctx)
    setNeedsDraw(false)
  })

  useAnimationFrame((deltaTime) => {
    universe.tick()
    setNeedsDraw(true)
  })

  return (
    <div>
      <label className="label">test</label>
      <canvas id="game-of-life-canvas" ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  )
}

export default Renderer
