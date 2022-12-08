import { atom, selector } from "recoil";

export const list = atom({
    key: "list",
    default: ""
})

export const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(list);
  
      return text.length;
    },
});