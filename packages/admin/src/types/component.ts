import type { ComponentType } from '@packges/common'

export interface Component {
	type: ComponentType;
	label: string;
	className: string;
	code: string;
	component: React.FC;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	props?: any
}
