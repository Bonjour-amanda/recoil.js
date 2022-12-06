import { useState } from 'react'
import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'

const list = atom({
  key: "list",
  default: ""
})

function TextInput() {

  // const listState = useRecoilValue(list);
  // const updateList = useSetRecoilState(list);
  
  const [text, setText] = useRecoilState(list);

  const onChange = (event:any) => {
    setText(event.target.value);
  };

  return (
    <div className="TextInput">
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    </div>
  )
}

export default TextInput
