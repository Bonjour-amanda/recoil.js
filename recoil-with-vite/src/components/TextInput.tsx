import { useState } from 'react'
import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import { list } from './Atoms'

function TextInput() {

  // const textState = useRecoilValue(list); //read only
  // const updateText = useSetRecoilState(list); //write only

  const [text, setText] = useRecoilState(list);

  const onChange = (event:any) => {
    setText(event.target.value);
  };

  return (
    <div className="TextInput">
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Text: {text}
        </div>
    </div>
  )
}

export default TextInput
