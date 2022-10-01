import React, { useContext } from 'react'
import TimerContext from '../context/TimerContext'
import Hour from './Hour'
import Minute from './Minute'
import Second from './Second'

const SemiColumn = () => {
  return <p className="time-val">:</p>
}

function CountDown() {
  const { timerStart, timerEdit, timerReset, timerStop } = useContext(TimerContext)

  return (
    <div className="w-[250px] md:w-[450px]  custom-shadow p-8 rounded-sm">
      <div className="center  gap-2 mb-4 ">
        <Hour />
        <SemiColumn />
        <Minute />
        <SemiColumn />
        <Second />
      </div>
      <div className="grid grid-cols-2 md:flex flex-wrap  items-center justify-between gap-4">
        <button onClick={timerStart} className="custom-button">
          START
        </button>
        <button onClick={timerEdit} className="custom-button">
          EDIT
        </button>
        <button onClick={timerReset} className="custom-button">
          RESET
        </button>
        <button onClick={timerStop} className="custom-button">
          STOP
        </button>
      </div>
    </div>
  )
}

export default CountDown
