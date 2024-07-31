import { v4 as uuid } from 'uuid'
import type { Component } from '@/types'
import { ComponentType } from '@common/config';
import classNames from 'classnames';

import { useDrag } from 'react-dnd'


const DndComponent: React.FC<Component> = (props) => {
	const [, drag] = useDrag(() => ({
    type: ComponentType.MENUD,
		item: {
			...props,
			type: ComponentType.MENUD,
		},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

	return (
		<div className={classNames("w-16 h-16", props.className)} ref={drag}>
			<div className='flex items-center justify-center w-full h-full text-sm'>{props.label}</div>
		</div>
	);
}

export default DndComponent;
