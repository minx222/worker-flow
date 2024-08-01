import { DndBox, DndTabel, MaterialMenu } from '@/components'
import type { Material } from '@/types'



const materials: Material[] = [
	{
		label: '表格',
		code: '01',
		ast: {
			el: DndTabel,
			props: {}
		}
	},
	{
		label: 'box',
		code: '02',
		ast: {
			el: 'div',
			props: {
				className: 'flex justify-center items-center w-32 h-32 bg-red-500',
				text: 'box'
			},
			children: [
				{
					el: 'div',
					props: {
						className: 'flex justify-center items-center w-16 h-16 bg-blue-500',
						text: 'box'
					},
				}
			]
		}
	}
]


const Side = () => {

	const [list, setList] = useState<Material[]>([]);

	useEffect(() => {
		setList(materials)
	}, [])

	return (
		<div className="flex gap-1 flex-wrap p-2 border-r-2 border-solid border-dark-100 w-42">
			{
				list.map((material) => <MaterialMenu {...material} key={material.code} />)
			}
		</div>
	);
};

export default Side;
