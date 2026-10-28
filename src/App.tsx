import { useEffect, useState } from "react"
import "./App.css"

const cols = [0, 1, 2]
const rows = [0, 1, 2, 3, 4]




function App() {
  const [playerPos, setPlayerPos] = useState({ x: 1, y: 4 })


  useEffect(() => {
    const handleKeyDown = ((e: KeyboardEvent) => {
      e.preventDefault()
      let newX = playerPos.x;
      let newY = playerPos.y;
      let moved = false;


      if ((e.key === 'ArrowUp' || e.key === 'w') && playerPos.y > 0) {
        newY--;
        moved = true;
      }
      if ((e.key === 'ArrowDown' || e.key === 's') && playerPos.y < 4) {
        newY++;
        moved = true;
      }
      if ((e.key === 'ArrowLeft' || e.key === 'a') && playerPos.x > 0) {
        newX--;
        moved = true;
      }
      if ((e.key === 'ArrowRight' || e.key === 'd') && playerPos.x < 2) {
        newX++;
        moved = true;
      }



      if (moved) {
        setPlayerPos({ x: newX, y: newY });
      }
    })
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerPos])


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






