import { useState, useContext } from 'react'

import { TimerContext } from '../../Contexts/Timer.jsx'

import { Count, CustomTextarea } from './style.js'

export default function Textarea() {
  const { pause } = useContext(TimerContext);
  const [text, setText] = useState('');

  const count = text.length;

  if (count === 100)
    pause();

  return (
    <>
      <Count>Quantidade de caracteres: <span>{count}</span></Count>
      <CustomTextarea
        autoFocus
        value={text}
        onChange={e => setText(e.target.value)}
        maxLength={100}
        placeholder='Digite 100 caracteres' />
    </>
  )
}
