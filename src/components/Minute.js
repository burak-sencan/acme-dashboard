import React, { useContext } from 'react'
import TimerContext from '../context/TimerContext'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'

function Minute() {
  const { showIcon, minute, increaseMinute, decreaseMinute } = useContext(TimerContext)
  return (
    <div className="center flex-col">
      {showIcon && (
        <button onClick={increaseMinute}>
          <GoTriangleUp />
        </button>
      )}
      <h1 className="time-val">{minute < 10 ? '0' + minute : minute}</h1>
      {showIcon && (
        <button onClick={decreaseMinute}>
          <GoTriangleDown />
        </button>
      )}
    </div>
  )
}

export default Minute
