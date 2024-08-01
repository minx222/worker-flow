/**
 * @name ast
 */
export interface Ast<T extends Record<string, string | number | boolean>> {
	el: string | React.FC
	props?: T & {
		style?: React.CSSProperties
		className?: string
	}
	children?: Ast<T>[]
}

export interface Material<T extends Record<string, string | number | boolean> = Record<string, string | number | boolean>> {
	label: string;
	code: string;
	ast: Ast<T>;
}
