import type { Json } from '@packges/common'

import type { NodeProps as ImgNodeProps} from './img-node/types'
import type { NodeProps as StartNodeProps} from './start-node/types'
import type { NodeProps as TextNodeProps} from './text-node/types'

import type { NodeType } from './node'


export interface BaseNodeProps<T extends Json = Json> {
	isConnectable: boolean
	data: T
}


/**
 * @name 节点类型的类型
 */
export interface NodePropsTypeMap {
	[NodeType.Image]: ImgNodeProps;
	[NodeType.Text]: TextNodeProps;
	[NodeType.Start]: StartNodeProps;
	[NodeType.Rectangle]: StartNodeProps;
}

/**
 * 节点类型
 */
export interface Node<T extends NodeType = NodeType> {
	id: string;
	position: {
		x: number;
		y: number;
	};
	type?: T;
	data: T extends NodeType ? NodePropsTypeMap[T] : NodePropsTypeMap[NodeType.Text];
}
