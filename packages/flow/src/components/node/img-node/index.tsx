import type { FC } from 'react';

import { Image } from 'antd';

import { Handle, Position } from '@xyflow/react';

import type { ImgNodeProps } from './types';
export const ImgNode: FC<ImgNodeProps> = (props) => {
	const {
		isConnectable,
		data: { label, image },
	} = props;

	return (
		<div className="text-updater-node">
			<Handle
				type="target"
				position={Position.Top}
				isConnectable={isConnectable}
			/>
			<div className="flex flex-col p-1 w-32 h-auto border-2 border-solid border-red-100 bg-white hover:border-blue-300">
				<label className="title text-center text-sm" htmlFor="text">
					{label}
				</label>
				<Image className="w-full h-full" src={image} />
			</div>
			<Handle
				type="source"
				position={Position.Bottom}
				isConnectable={isConnectable}
			/>
		</div>
	);
};
