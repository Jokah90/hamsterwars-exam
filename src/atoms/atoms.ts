import { atom } from "recoil";
import { Hamster } from "../models/models";


const allHamsters = atom<Hamster[] | null>({
	key: 'allHamsters',
	default: []
})







export { allHamsters }