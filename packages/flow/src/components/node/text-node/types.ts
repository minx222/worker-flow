import type { Json } from "@packges/common";

import type { BaseNodeProps } from '../types'

export interface NodeProps extends Json {
	label: string
}


export type TextNodeProps = BaseNodeProps<NodeProps>
