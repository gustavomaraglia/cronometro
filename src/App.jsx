import { useState } from 'react'

import { TimerProvider } from './Contexts/Timer.jsx'

import Textarea from './Components/Textarea'
import Timer from './Components/Timer'

import GlobalStyles from './Styles/GlobalStyles.js'

function App() {

  return (
    <>
      <TimerProvider>
        <Textarea />
        <Timer />
      </TimerProvider>
      <GlobalStyles />
    </>
  )
}

export default App
