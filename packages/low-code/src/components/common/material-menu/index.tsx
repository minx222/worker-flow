import type { FC } from "react";
import { useDrag, useDragLayer } from 'react-dnd'

import { MaterialType } from '@common/config';

import type { Material } from '@/types'

export const MaterialMenu: FC<Material> = (props) => {
	const [, drag] = useDrag(() => ({
    type: MaterialType.MENUD,
		item: {
			...props,
			type: MaterialType.MENUD,
		},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
	return (
		<div className="w-16 h-16 border border-solid" ref={drag}>
			<div className='flex items-center justify-center w-full h-full text-sm'>{props.label}</div>
		</div>
	);
}
