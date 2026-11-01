import { Timer } from "./timer"
import { StartBtn } from "./startBtn"

type TimerStartProps = {
  timer: number
  isRunning: boolean
  setIsRunning: (value: boolean) => void
}

export const TimerStart = ({ timer, isRunning, setIsRunning }: TimerStartProps) => {
  return (
    <>
      <Timer timer={timer} />
      <StartBtn isRunning={isRunning} onStart={() => setIsRunning(true)} />
    </>

  )

}