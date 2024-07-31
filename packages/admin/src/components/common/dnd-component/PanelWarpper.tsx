
import type { PropsWithChildren } from 'react';
import { debounce } from 'radash'
import { ComponentType } from '@common/config';
import type { Component } from '@/types';
import classNames from 'classnames';

import { useDrag, useDrop } from 'react-dnd'


const PanelWarpper: React.FC<PropsWithChildren<{
	className?: string
	index: number
	onChangeIndex: (start: number, end: number) => void
}>> = (props) => {
	const { index, onChangeIndex } = props
	const warpper = useRef<HTMLDivElement>(null)

	const [{ isDragging }, drag] = useDrag(() => ({
    type: ComponentType.PANEL,
		item: {
			...props,
			type: ComponentType.PANEL,
		},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));



	const [{ isOver }, drop] = useDrop<Component, HTMLDivElement, {
		isOver: boolean;
	}>({
		accept: ComponentType.PANEL,
		collect: (monitor) => ({
				// 是否放置在目标上
			isOver: monitor.isOver(),
		}),
		hover(item, monitor) {
			const didHover = monitor.isOver({ shallow: true });
			if (item.index === undefined) {
				return;
			}
			onChangeIndex(index, item.index)
		},
	});
	
	drop(drag(warpper))

	return (
		<div className={classNames(props.className, { 'border-2': isOver, 'opacity-20': isDragging }, 'border-0 border-solid border-blue-700 box-content')} ref={warpper}>
			{props.children}
		</div>
	);
}

export default PanelWarpper;
