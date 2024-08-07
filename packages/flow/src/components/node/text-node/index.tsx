import type { FC } from 'react';
import type { TextNodeProps } from './types';
import { BaseNode } from '../line-node';

export const TextNode:FC<TextNodeProps> = (props) => {

	const { data: { label = '文字' } } = props

	return (
		<BaseNode className="bg-white rounded-md p-2">
			<div className="text-center">
				<div className="text-xs">{label}</div>
			</div>
		</BaseNode>
	)
}
