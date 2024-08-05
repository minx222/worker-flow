import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
	BackgroundVariant
} from '@xyflow/react';

import type { Node } from '@xyflow/react';

import { NodeTypes } from '@/components/node'
 
const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, type: 'img', data: { label: 'text1', image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' } },
  { id: '2', position: { x: 0, y: 300 }, data: { label: 'Flow' } },
  { id: '3', position: { x: 200, y: 100 }, data: { label: 'Nocode/WEP' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' }
  ];

const Home = () => {

	const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);
 

	return (
		<div className="flex flex-col gap-3 items-center justify-center w-full h-full">
			<ReactFlow
        nodes={nodes}
        edges={edges}
				nodeTypes={NodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
		</div>
	)
}

export default Home
