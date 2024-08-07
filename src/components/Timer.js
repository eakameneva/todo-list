import React, { useEffect, useState, useRef } from 'react'

export default function Timer({ minutes, seconds }) {
  const timerRef = useRef(null)
  const [isRunning, setIsRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    minutesLeft: minutes,
    secondsLeft: seconds,
  })

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft({
        minutesLeft: minutes,
        secondsLeft: seconds,
      })
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [minutes, seconds])

  const onPlay = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime.secondsLeft < 1 && prevTime.minutesLeft > 0) {
            return {
              minutesLeft: prevTime.minutesLeft - 1,
              secondsLeft: 59,
            }
          }
          if (prevTime.secondsLeft === 0 && prevTime.minutesLeft < 1) {
            clearInterval(timerRef.current)
            setIsRunning(false)
            timerRef.current = null
            return prevTime
          }
          return { ...prevTime, secondsLeft: prevTime.secondsLeft - 1 }
        })
      }, 1000)
      setIsRunning(true)
    }
  }

  const onPause = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    setIsRunning(false)
  }
  return (
    <span className='description'>
      <button type='button' aria-label='Play' className='icon icon-play' onClick={onPlay} disabled={isRunning} />
      <button type='button' aria-label='Pause' className='icon icon-pause' onClick={onPause} disabled={!isRunning} />
      {timeLeft.secondsLeft < 10
        ? ` ${timeLeft.minutesLeft}:0${timeLeft.secondsLeft}`
        : ` ${timeLeft.minutesLeft}:${timeLeft.secondsLeft}`}
    </span>
  )
}
