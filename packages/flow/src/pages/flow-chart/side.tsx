import { NodeType } from '@/components/node';


export const Side = () => {
	const onDragStart = (
		event: React.DragEvent<HTMLDivElement>,
		nodeType: NodeType,
	) => {
		event.dataTransfer.setData('application/reactflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};
	return (
		<aside className="grid grid-cols-2 gap-1 content-start justify-center h-full p-1">
			<div
				className="flex items-center justify-center w-20 h-20 p-1 text-sm border border-blue-200 border-solid"
				onDragStart={(event) => onDragStart(event, NodeType.Start)}
				draggable
			>
				<div>开始</div>
			</div>
			<div
				className="flex items-center justify-center w-20 h-20 p-1 text-sm border border-blue-200 border-solid"
				onDragStart={(event) => onDragStart(event, NodeType.Image)}
				draggable
			>
			</div>
		</aside>
	);
};
