import { useState } from 'react'
import { atom, useRecoilValue, useSetRecoilState, useRecoilState, selector } from 'recoil'

// const charCountState = selector({
//     key: 'charCountState', // unique ID (with respect to other atoms/selectors)
//     get: ({get}) => {
//       const text = get(list);
  
//       return text.length;
//     },
// });

function CharacterCount() {
    // const count = useRecoilValue(charCountState);
  
    return (
        <>
            {/* Character Count: {count} */}
        </>
    );
}

export default CharacterCount;