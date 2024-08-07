import type { FC } from "react"
import { BaseNode } from "."
import type { TextNodeProps } from "./types"

export const RectangleNode: FC<TextNodeProps> = (props) => {
	const {
		data: { label },
	} = props;

	return (
		<BaseNode {...props}>
			<div>{label}</div>
		</BaseNode>
	)
}
