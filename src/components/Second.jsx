import React, { useContext } from 'react'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import TimerContext from '../context/TimerContext'

function Second() {
  const { showIcon, second, increaseSecond, decreaseSecond } = useContext(TimerContext)
  return (
    <div className="center flex-col">
      {showIcon && (
        <button onClick={increaseSecond}>
          <GoTriangleUp />
        </button>
      )}
      <h1 className="time-val">{second < 10 ? '0' + second : second}</h1>
      {showIcon && (
        <button onClick={decreaseSecond}>
          <GoTriangleDown />
        </button>
      )}
    </div>
  )
}

export default Second
