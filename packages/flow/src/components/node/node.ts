import { ImgNode } from './img-node'
import { StartNode } from './start-node'
import { TextNode } from './text-node'

export {
	ImgNode,
	StartNode
}

export enum NodeType {
	/**
	 * @name 图片节点
	 */
	Image = 'Image',
	/**
	 * @name 开始节点
	 */
	Start = 'Start',
	/**
	 * @name 文字节点
	 */
	Text = 'Text',
	/**
	 * @name 开始节点
	 */
	Rectangle = 'Rectangle',
}

export const NodeEls = {
	/**
	 * @name 图片节点
	 */
	[NodeType.Image]: ImgNode,
	/**
	 * @name 文字节点
	 */
	[NodeType.Start]: TextNode,
	/**
	 * @name 开始节点
	 */
	[NodeType.Rectangle]: StartNode
}
