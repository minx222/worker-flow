import { useDrop  } from 'react-dnd'
import { v4 as uuid } from 'uuid'
import type { Component } from '@/types'
import { DndComponent } from '@/components'
import { Side } from './components'

const Home = () => {
	const [boxes, setBoxes] = useState<Component[]>([]);

  const ref = useRef(null);

  const [,drop] = useDrop(() => {
    return {
      accept: 'component',
      drop(item: Component) {
				console.log(item);
        setBoxes((boxes) => [...boxes, item])
      }
    }
  });
	
	drop(ref);

	return (
		<div className="flex w-full h-full">
			<Side />
			<div ref={ref} className='panel flex flex-1 w-0'>
				{
					boxes.map((item) => {
						return <DndComponent key={item.code} className={item.className} />
					})
				}
			</div>
		</div>
	)
}

export default Home
