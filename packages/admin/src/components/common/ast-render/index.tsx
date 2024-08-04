import { createElement, type ReactElement } from 'react'

import { AntdWarpper } from '../antd'

import type { AstProps } from '@/types'

/**
 * @name ast渲染组件
 * @param props 
 * @returns 
 */
export const AstRender = <T extends Record<string, string | number | boolean>,>(props: AstProps<T> | string): ReactElement => {
	if (typeof props === 'string') {
		// @ts-ignore
		return props
	}
	const children: ReactElement | ReactElement[] = props.children ? props.children.map((child) => AstRender(child)) : []
	if(props._elType && props.antdName) {
		return <AntdWarpper name={props.antdName} {...props} />
	}

	if(!props.el) {
		return <div>1</div>
	}
	return createElement(props.el, props.props, children)
}
