import { useDrop  } from 'react-dnd'
import type { Component } from '@/types'
import { ComponentType, ComponentDropType } from '@common/config';
export const Panel = () => {
	const [boxes, setBoxes] = useState<Component[]>([]);

  const ref = useRef(null);

  const [,drop] = useDrop(() => {
    return {
      accept: [...Object.values(ComponentType), ...Object.values(ComponentDropType)],
      drop(item: Component, monitor) {
				console.log(item, monitor, 'item');
        setBoxes((boxes) => [...boxes, item])
      }
    }
  });
	
	drop(ref);

	return (
		<div ref={ref} className='panel flex flex-1 w-0'>
		{
			boxes.map((com, index) => {
				return (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} >
						<com.component {...com.props} />
					</div>
				)
			})
		}
		</div>
	)
}


export default Panel
