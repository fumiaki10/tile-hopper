type TimerProps = {
  timer: number
}
export const Timer = ({ timer }: TimerProps) => {
  return (
    <>
      <div className="timer">{timer}</div>
    </>
  )
}