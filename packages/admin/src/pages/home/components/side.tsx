import { DndBox, DndComponent, DndTabel } from '@/components'
import type { Component } from '@/types'

interface Props {
	onDragStart?: (componet: Component) => void;
}

const Side: React.FC<Props> = () => {

	const [list] = useState<Component[]>([
		{
			label: '表格',
			code: '02',
			className: 'bg-orange-400',
			component: DndTabel,
			props: {
				size: 'small'
			}
		},
		{
			label: 'box',
			code: '01',
			className: 'bg-orange-400',
			component: DndBox,
			props: {
				size: 'small'
			}
		},
	]);

	return (
		<div className="flex gap-1 flex-wrap p-2 border-r-2 border-solid border-dark-100 w-42">
			{
				list.map((com) => {
					return (
						<DndComponent {...com} key={com.code} />
					)
				})
			}
		</div>
	);
};

export default Side;
