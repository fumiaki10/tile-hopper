type StartBtnProps = {
  isRunning: boolean
  onStart: () => void
  isTimerEnd: boolean
  isGameOver: boolean
}

export const StartBtn = ({
  isRunning,
  isTimerEnd,
  isGameOver,
  onStart
}: StartBtnProps) => {
  const shouldShowButton = !isRunning && !isGameOver && !isTimerEnd

  return (
    <>
      {shouldShowButton && (<button className="start_btn" onClick={onStart}>START</button>)}
    </>
  )
}