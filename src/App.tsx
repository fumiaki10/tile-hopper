import { useState } from "react"
import "./App.css"

const cols = [0, 1, 2]
const rows = [0, 1, 2, 3, 4]

function App() {
  const [playerPos, setPlayerPos] = useState({ x: 1, y: 4 })


  return (
    <>
      <div className="stage">
        <div className="player_position">
          {rows.map((y) =>
            cols.map((x) => {
              const isPlayerHere = x === playerPos.x && y === playerPos.y
              return (
                <div key={`${x}-${y}`} className="cell">
                  {isPlayerHere && <div className="player"></div>}
                </div>
              )
            })
          )}
        </div>
      </div>
    </>
  )
}

export default App






