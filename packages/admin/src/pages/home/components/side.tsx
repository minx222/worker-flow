import cls from 'classnames';
import type { Component } from '@/types'

interface Props {
	onDragStart?: (componet: Component) => void;
}

const Side: React.FC<Props> = (props) => {
	const { onDragStart: dragStart } = props;
	const [list] = useState<Component[]>([
		{
			id: 1,
			code: '1231',
			name: '输入框',
		},
	]);

	const onDragStart = (e: React.DragEvent, index: number) => {
		dragStart?.(list[index])
	};

	const onDragEnd = (e: React.DragEvent, index: number) => {
		const component = e.target as HTMLDivElement;
		requestAnimationFrame(() => {
			component.classList.remove('invisible');
		});
	};

	return (
		<div className="flex flex-wrap p-2 border-r-2 border-solid border-dark-100 ">
			{list.map((com, index) => {
				return (
					<div
						key={com.id}
						onDragEnd={(e) => onDragEnd(e, index)}
						onDragStart={(e) => onDragStart(e, index)}
						draggable
						className={cls('component flex justify-center items-center w-16 h-16 border border-solid border-light-300 rounded-sm hover:border-blue-300')}
					>
						<span>输入框</span>
					</div>
				);
			})}
		</div>
	);
};

export default Side;
