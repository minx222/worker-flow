
import { useDrag } from 'react-dnd'
import { ComponentType } from '@packges/common'

const DndBox = () => {
	const [, drag] = useDrag(() => ({
    type: ComponentType.BOX,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

	return (
		<div ref={drag}>
			<div className="w-16 h-16 bg-yellow-400">Box盒子</div>
		</div>
	);
}

export default DndBox;
