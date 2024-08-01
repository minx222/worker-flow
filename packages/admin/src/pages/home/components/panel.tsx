import { useDrop  } from 'react-dnd'
import { v4 as uuid } from 'uuid'
import { MaterialType, } from '@common/config';

import { PanelWarpper, AstRender } from '@/components'
import type { Material } from '@/types'

import { useMaterialContext } from '../hooks'
export const Panel = () => {

	const { ctx } = useMaterialContext()
	const { materials, swapMeterial, addMaterial } = ctx

	const cacheIndexs = useRef<number[]>([]);

  const ref = useRef(null);

  const [,drop] = useDrop(() => {
    return {
      accept: [MaterialType.MENUD, MaterialType.PANEL],
      drop(item: Material) {
				addMaterial?.(item)
      }
    }
  }, [materials]);
	
	drop(ref);

	return (
		<div ref={ref} className='panel flex flex-1 flex-wrap w-0'>
		{
			materials?.map((com, index) => {
				return (
					<div key={com.code} className='h-fit'>
						<PanelWarpper index={index}>
							<AstRender {...com.ast} />
						</PanelWarpper>
					</div>
				)
			})
		}
		</div>
	)
}


export default Panel
