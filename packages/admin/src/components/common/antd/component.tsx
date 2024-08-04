import React from 'react'

const Button = lazy(() => import('antd/es/button'))
const Table = lazy(() => import('antd/es/table'))

const AntdMap = {
	button: Button,
	table: Table
}

export type AntdName = keyof typeof AntdMap

export const  LazyComponent: React.FC<{
	component: AntdName
}> = (props) => {
	const { component } = props

	const Component = AntdMap[component]

	return (
		<React.Suspense fallback="loading">
			<Component {...props} />
		</React.Suspense>
	)
}

