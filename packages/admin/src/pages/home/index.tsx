import type { Material } from "@/types";
import { Side, Panel, Setting } from './components'

import { useMaterialContext } from './hooks'


const swap = <T,>(arr: T[], index1: number, index2: number) => {
	const [item1, item2] = [arr[index1], arr[index2]]
	arr[index1] = item2
	arr[index2] = item1
}

const Home = () => {
	const { Provider } = useMaterialContext();
	const [materials, setMaterials] = useState<Material[]>([])

	const setProps = useCallback(() => {

	}, [])

	const swapMeterial = useCallback((index1: number, index2: number) => {
		swap(materials, index1, index2)
		setMaterials([...materials])
	}, [materials])

	const addMaterial = useCallback((material: Material, index?: number) => {
		materials.push(material)
		if (index !== undefined) {
			swap(materials, index, materials.length - 1)
		}
		setMaterials([...materials])
	}, [materials])



	return (
		<Provider value={{ materials, setProps, swapMeterial, addMaterial }}>
			<div className="flex w-full h-full">
				<Side />
				<Panel />
				<Setting />
			</div>
		</Provider>
	)
}

export default Home
