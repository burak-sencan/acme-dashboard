import React, { useContext } from 'react'
import TimerContext from '../context/TimerContext'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'

function Hour() {
  const { showIcon, hour, increaseHour, decreaseHour } = useContext(TimerContext)
  return (
    <div className="center flex-col">
      {showIcon && (
        <button onClick={increaseHour}>
          <GoTriangleUp />
        </button>
      )}
      <h1 className="time-val">{hour < 10 ? '0' + hour : hour}</h1>
      {showIcon && (
        <button onClick={decreaseHour}>
          <GoTriangleDown />
        </button>
      )}
    </div>
  )
}

export default Hour
