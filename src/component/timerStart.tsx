import { Timer } from "./timer"
import { StartBtn } from "./startBtn"
import { useState } from "react"

type TimerStartProps = {
  isGameOver: boolean
}

export const TimerStart = ({ isGameOver }: TimerStartProps) => {
  const [isRunning, setIsRunning] = useState(false)
  const handleStart = () => {
    setIsRunning(true)
  }
  return (
    <>
      <Timer isRunning={isRunning} setIsRunning={setIsRunning} isGameOver={isGameOver} />
      <StartBtn isRunning={isRunning} onStart={handleStart} />
    </>

  )

}