type StartBtnProps = {
  isRunning: boolean
  onStart: () => void
}

export const StartBtn = ({ isRunning, onStart }: StartBtnProps) => {

  return (
    <>
      {!isRunning && (<button className="start_btn" onClick={onStart}>START</button>)}
    </>
  )
}