
import type { PropsWithChildren } from 'react';
import { MaterialType } from '@common/config';
import type { Material } from '@/types';
import classNames from 'classnames';

import { useDrag, useDrop } from 'react-dnd'


export const PanelWarpper: React.FC<PropsWithChildren<{
	className?: string
	index: number
	onChangeIndex?: (start: number, end: number) => void
}>> = (props) => {
	const warpper = useRef<HTMLDivElement>(null)

	const [{ isDragging }, drag] = useDrag(() => ({
    type: MaterialType.PANEL,
		item: {
			...props,
			type: MaterialType.PANEL,
		},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));



	const [{ isOver }, drop] = useDrop<Material, HTMLDivElement, {
		isOver: boolean;
	}>({
		accept: [MaterialType.PANEL, MaterialType.MENUD],
		collect: (monitor) => ({
				// 是否放置在目标上
			isOver: monitor.isOver(),
		}),
		hover: () => {
			console.log('1231')
		}
	});
	
	drop(drag(warpper))

	return (
		<div className={classNames(props.className, { 'shadow-lg shadow-blue-500/50': isOver, 'opacity-20': isDragging }, ' border-0 border-solid border-blue-700 box-content')} ref={warpper}>
			{props.children}
		</div>
	);
}
