import { useEffect, useState } from "react";



export const Timer = () => {

  const [timer, setTimer] = useState(10)
  const [isRunning, setIsRunning] = useState(false)

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