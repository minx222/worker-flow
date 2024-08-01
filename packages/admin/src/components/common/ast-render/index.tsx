import { createElement, type ReactElement } from 'react'

import type { Ast } from '@/types'

/**
 * @name ast渲染组件
 * @param props 
 * @returns 
 */
export const AstRender = <T extends Record<string, string | number | boolean>,>(props: Ast<T>): ReactElement => {
	const children: ReactElement | ReactElement[] = props.children ? props.children.map((child) => AstRender(child)) : []
	return createElement(props.el, props.props, children)
}
