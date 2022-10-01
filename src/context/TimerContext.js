import { createContext, useEffect, useState } from 'react'

const TimerContext = createContext()

export const TimerProvider = ({ children }) => {
  const [isStarted, setIsStarted] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [hour, setHour] = useState(10)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  const increaseHour = () => {
    if (hour < 23) {
      setHour((prev) => prev + 1)
    }
  }
  const decreaseHour = () => {
    if (hour > 0) {
      setHour((prev) => prev - 1)
    }
  }
  const increaseMinute = () => {
    if (minute < 59) {
      setMinute((prev) => prev + 1)
    }
  }
  const decreaseMinute = () => {
    if (minute > 0) {
      setMinute((prev) => prev - 1)
    }
  }
  const increaseSecond = () => {
    if (second < 59) {
      setSecond((prev) => prev + 1)
    }
  }
  const decreaseSecond = () => {
    if (second > 0) {
      setSecond((prev) => prev - 1)
    }
  }

  useEffect(() => {
    let interval

    if (isStarted) {
      interval = setInterval(() => {
        if (hour === 0 && minute === 0 && second === 0) {
          clearInterval(interval)
        } else {
          if (second === 0) {
            setSecond(59)
            if (minute === 0) {
              setMinute(59)
              decreaseHour()
            } else {
              decreaseMinute()
            }
          } else {
            decreaseSecond()
          }
        }
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
    // }, [decreaseSecond, hour, minute, second, isStarted])
  }, [second, isStarted])

  const timerStart = () => {
    setShowIcon(false)
    setIsStarted(true)
  }

  const timerEdit = () => {
    setShowIcon(true)
    setIsStarted(false)
  }
  const timerReset = () => {
    setHour(10)
    setMinute(0)
    setSecond(0)
  }
  const timerStop = () => {
    setIsStarted(false)
  }

  return (
    <TimerContext.Provider
      value={{
        showIcon,
        hour,
        minute,
        second,
        increaseHour,
        decreaseHour,
        increaseMinute,
        decreaseMinute,
        increaseSecond,
        decreaseSecond,
        timerStart,
        timerEdit,
        timerReset,
        timerStop,
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}
export default TimerContext
