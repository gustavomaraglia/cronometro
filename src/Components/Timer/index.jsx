import { useEffect, useState, useContext } from 'react'

import { TimerContext } from '../../Contexts/Timer.jsx'

import { CustomTimer } from './style.js'

export default function Timer() {
  const { time } = useContext(TimerContext);

  const padTrunc = (time, length) => {
    return Math.trunc(time).toString().padStart(length, '0');
  }

  const min = padTrunc(time / 60000, 2);
  const sec = padTrunc((time - (min * 60000)) / 1000, 2);
  const mil = padTrunc(time % 1000, 3);

  return (
    <CustomTimer>
      {min}:{sec}:{mil}
    </CustomTimer>
  )
}
