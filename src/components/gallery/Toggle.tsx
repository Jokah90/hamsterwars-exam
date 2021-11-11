import { useRecoilState } from "recoil"
import  toggle  from "../../atoms/allHamsters";

const Toggle = () => {
	// const [toggle, setToggle] = useRecoilState<boolean>(toggle)

	return (
		<div>
			button onClick={() => toggle}
		</div>
	)
}

export default Toggle