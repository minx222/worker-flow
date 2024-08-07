import type { FC } from 'react';
import type { StartNodeProps } from './types';

import { BaseNode } from '../line-node'

export const StartNode:FC<StartNodeProps> = (props) => {

	const { data: { label = '开始' } } = props

	return (
		<BaseNode className="bg-white">
			<div className="text-center">
				<div className="text-xl font-bold">{label}</div>
			</div>
		</BaseNode>
	)
}
