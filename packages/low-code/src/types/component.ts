import type { AntdName } from '@/components/common/antd/component'

type Value = Record<string, string | number | boolean>

/**
 * @name ast
 */
export interface AstProps<T extends Value> {
	el?: string | React.FC
	props?: T & {
		style?: React.CSSProperties
		className?: string
	}
	children?: (Ast<T> | string)[],
	_elType?: 'window' | 'antd',
	antdName?: AntdName
}

export type Ast<T extends Value> = AstProps<T> | string

export interface Material<T extends Value = Value> {
	label: string;
	code: string;
	ast: Ast<T>;
}
