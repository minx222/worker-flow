import type { Json } from '@packges/common'


export interface BaseNodeProps<T extends Json = Json> {
	isConnectable: boolean
	data: T
}
