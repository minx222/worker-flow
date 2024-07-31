import { useDrop  } from 'react-dnd'
import { v4 as uuid } from 'uuid'
import { PanelWarpper } from '@/components'
import type { Component } from '@/types'
import { ComponentType, ComponentDropType } from '@common/config';
export const Panel = () => {
	const [boxes, setBoxes] = useState<Component[]>([]);

	const cacheIndexs = useRef<number[]>([]);
	const changeIndex = (start: number, end: number) => {
		cacheIndexs.current = [start, end]
	}

  const ref = useRef(null);

  const [,drop] = useDrop(() => {
    return {
      accept: [...Object.values(ComponentType), ...Object.values(ComponentDropType)],
      drop(item: Component) {
				if(item.type === ComponentType.MENUD) {	
					setBoxes((boxes) => {
						return [...boxes, {
							...item,
							code: uuid(),
						}]
					})
				} else {
					swap()
				}
      }
    }
  }, [boxes]);

	const swap = useCallback(() => {
		const ast = [...boxes]
		const [start, end] = cacheIndexs.current
		const [drapAst, dropAst] = [ast[start], ast[end]]
		ast[start] = dropAst
		ast[end] = drapAst
		setBoxes(ast)
	}, [boxes])

	useEffect(() => {
		console.log(boxes, 'box')
	}, [boxes])
	
	drop(ref);

	return (
		<div ref={ref} className='panel flex flex-1 flex-wrap w-0'>
		{
			boxes.map((com, index) => {
				return (
					<div key={com.code} className='h-fit'>
						<PanelWarpper onChangeIndex={changeIndex} index={index}>
							<com.component {...com.props} />
						</PanelWarpper>
					</div>
				)
			})
		}
		</div>
	)
}


export default Panel
