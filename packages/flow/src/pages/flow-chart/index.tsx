import {
	ReactFlow,
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	BackgroundVariant,
	useReactFlow,
	addEdge,
} from '@xyflow/react';
import type { Connection } from '@xyflow/react';


import { Side } from './side';
import { NodeEls, NodeType, type Node } from '@/components/node';

const initialNodes: Node[] = [
	{
		id: '1',
		position: { x: 0, y: 0 },
		type: NodeType.Image,
		data: {
			label: 'text1',
			image:
				'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
	},
	{ id: '2', position: { x: 0, y: 300 }, data: { label: 'Flow', image: '' } },
	{
		id: '3',
		position: { x: 200, y: 100 },
		type: NodeType.Text,
		data: { label: 'Nocode/WEP' },
	},
	{
		id: '4',
		position: { x: 200, y: 300 },
		type: NodeType.Text,
		data: { label: 'text2' },
	},
];

const initialEdges = [
	{ id: 'e1-2', source: '1', target: '2' },
	{ id: 'e1-3', source: '1', target: '3' },
];

let id = 0;
const getId = () => `dndnode_${id++}`;
const Home = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const { screenToFlowPosition } = useReactFlow();

	const onConnect = useCallback(
		(params: Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);

	const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}, []);

	const onDrop = useCallback(
		(event: React.DragEvent<HTMLDivElement>) => {
			event.preventDefault();
			console.log(event);
			const type = event.dataTransfer.getData(
				'application/reactflow',
			) as NodeType;

			// check if the dropped element is valid
			if (typeof type === 'undefined' || !type) {
				return;
			}
			const position = screenToFlowPosition({
				x: event.clientX,
				y: event.clientY,
			});
			const newNode: Node = {
				id: getId(),
				type,
				position,
				data: { label: `${type} node` },
			};

			setNodes((nds) => nds.concat(newNode));
		},
		[screenToFlowPosition],
	);

	return (
		<div className="flex gap-3 items-center justify-center w-full h-full">
			<Side />
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={NodeEls}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onDrop={onDrop}
				onDragOver={onDragOver}
				className="flex-1 w-0"
				fitView
			>
				<Controls />
				<MiniMap />
				<Background variant={BackgroundVariant.Lines} gap={12} size={1} />
			</ReactFlow>
			<div className="right-warpper">
				<div>配置项</div>
			</div>
		</div>
	);
};

export default Home;
