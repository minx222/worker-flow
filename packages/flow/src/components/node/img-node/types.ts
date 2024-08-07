import type { Json } from "@packges/common";

import type { BaseNodeProps } from '../types'

export interface NodeProps extends Json {
	image: string;
	label: string
}


export type ImgNodeProps = BaseNodeProps<NodeProps>
