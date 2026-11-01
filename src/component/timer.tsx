import { useEffect, useState } from "react";

type TimerProps = {
  isRunning: boolean
  setIsRunning: (value: boolean) => void
  isGameOver: boolean
}


export const Timer = ({ isRunning, setIsRunning, isGameOver }: TimerProps) => {

  const [timer, setTimer] = useState(10)
  useEffect(() => {
    if (isGameOver) {
      setIsRunning(false)
    }
  }, [isGameOver, setIsRunning])

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          return 0
        }
        return prev - 1
      });
    }, 1000);
    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  return (
    <>
      <div className="timer">{timer}</div>
    </>
  )
}