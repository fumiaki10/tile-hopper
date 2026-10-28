import { useEffect, useState } from "react"
import "./App.css"



function App() {
  const [playerPos, setPlayerPos] = useState({ x: 1, y: 4 })
  const [stageMap, setStageMap] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
  const isGameOver = stageMap[4][playerPos.x] === 1

  const handleReset = () => {
    setPlayerPos({ x: 1, y: 4 })
    setStageMap([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  }



  useEffect(() => {
    const handleKeyDown = ((e: KeyboardEvent) => {
      e.preventDefault()

      if (isGameOver) return
      let newX = playerPos.x;
      let movedX = false;


      if ((e.key === 'ArrowUp' || e.key === 'w') && playerPos.y > 0) {
        setStageMap((prev) => {
          const newRow = [0, 0, 0];

          if (Math.random() > 0.7) {
            const trapX = Math.floor(Math.random() * 3)

            newRow[trapX] = 1;
          }
          const nextMap = [newRow, ...prev]
          nextMap.pop()
          return nextMap
        })
      }
      if ((e.key === 'ArrowLeft' || e.key === 'a') && playerPos.x > 0) {
        newX--;
        movedX = true;
      }
      if ((e.key === 'ArrowRight' || e.key === 'd') && playerPos.x < 2) {
        newX++;
        movedX = true;
      }



      if (movedX) {
        setPlayerPos((prev) => ({ ...prev, x: newX }));
      }
    })
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerPos, stageMap])


  return (
    <>


      <div className="stage">
        <button className="reset_btn" onClick={handleReset}>リセット</button>
        {isGameOver && <div className="game-over">GAME OVER</div>}

        <div className="player_position">
          {stageMap.map((row, y) =>
            row.map((cellValue, x) => {
              const isPlayerHere = x === playerPos.x && y === playerPos.y
              const isTrap = cellValue === 1
              return (
                <div key={`${x}-${y}`} className="cell">
                  {isPlayerHere && <div className="player"></div>}
                  {isTrap && <div className="trap"></div>}
                </div>
              )
            }))}
        </div>
      </div>


    </>
  )
}

export default App






