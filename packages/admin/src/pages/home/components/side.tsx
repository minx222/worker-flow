import { DndComponent } from '@/components'
import type { Component } from '@/types'

interface Props {
	onDragStart?: (componet: Component) => void;
}

const Side: React.FC<Props> = (props) => {

	const [list] = useState<Component[]>([
		{
			id: 1,
			code: '1231',
			name: '输入框',
			className: 'bg-lime-400'
		},
		{
			id: 2,
			code: '1231',
			name: '输入框',
			className: 'bg-orange-400'
		},
	]);

	return (
		<div className="flex flex-wrap p-2 border-r-2 border-solid border-dark-100 ">
			{
				list.map((com) => {
					return (
						<DndComponent label={com.name} key={com.id} className={com.className} />
					)
				})
			}
		</div>
	);
};

export default Side;
