import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TextInput from './components/TextInput'
import CharacterCount from './components/ChracterCount'
import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'


function App() {

  return (
    <div className="App">
      <TextInput />
      <CharacterCount />
    </div>
  )
}

export default App
