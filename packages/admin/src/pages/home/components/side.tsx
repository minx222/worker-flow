import { DndBox, DndComponent, DndTabel } from '@/components'
import type { Component } from '@/types'
import { ComponentType } from '@common/config';

interface Props {
	onDragStart?: (componet: Component) => void;
}

const Side: React.FC<Props> = () => {

	const [list] = useState<Component[]>([
		{
			label: '输入框',
			code: '01',
			className: 'bg-lime-400',
			type: ComponentType.BOX,
			component: DndBox,
			props: {
				placeholder: '请输入内容',
			},
		},
		{
			label: '表格',
			code: '02',
			className: 'bg-orange-400',
			type: ComponentType.TABLE,
			component: DndTabel,
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
