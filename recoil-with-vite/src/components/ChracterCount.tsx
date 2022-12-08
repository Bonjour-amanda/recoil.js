import { useState } from 'react'
import { atom, useRecoilValue, useSetRecoilState, useRecoilState, selector } from 'recoil'
import { charCountState } from './Atoms'

function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return (
        <>
            Character Count: {count}
        </>
    );
}

export default CharacterCount;