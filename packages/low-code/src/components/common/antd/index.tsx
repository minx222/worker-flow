import type { AntdName } from './component'
import { LazyComponent } from './component'

export * from './index.tsx'

export const AntdWarpper: React.FC<{
	name: AntdName
}> = (props) => {
	return <LazyComponent {...props} component={props.name}  />
}
