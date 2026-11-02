import { Timer } from "./timer"
import { StartBtn } from "./startBtn"

type TimerStartProps = {
  timer: number
  isRunning: boolean
  setIsRunning: (value: boolean) => void
  isTimerEnd: boolean
  isGameOver: boolean
}

export const TimerStart = ({
  timer,
  isRunning,
  setIsRunning,
  isTimerEnd,
  isGameOver
}: TimerStartProps) => {
  return (
    <>
      <Timer timer={timer} />
      <StartBtn
        isRunning={isRunning}
        isTimerEnd={isTimerEnd}
        isGameOver={isGameOver}
        onStart={() => setIsRunning(true)} />

    </>

  )

}