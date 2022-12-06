import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'

const list = atom({
  key: "list",
  default: []
})

function App() {

  const listState = useRecoilValue(list);
  const updateList = useSetRecoilState(list);
  const [textList, setTextList] = useRecoilState(list);

  return (
    <div className="App">
      {
        listState.map((item:any) => 
          <p key={item.id}>{item.value}</p>
        )
      }
    </div>
  )
}

export default App
