import { atom } from "recoil";

//Gallery State
const toggle = atom<boolean>({
	key: 'toggle',
	default: false
})



export default toggle 