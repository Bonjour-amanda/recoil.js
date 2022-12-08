import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TextInput from './components/TextInput'
import CharacterCount from './components/ChracterCount'
import { atom, useRecoilValue, useSetRecoilState, useRecoilState, RecoilRoot } from 'recoil'


function App() {

  return (
    <RecoilRoot >
      <div className="App">
        <TextInput />
        <CharacterCount />
      </div>
    </RecoilRoot>
  )
}

export default App
