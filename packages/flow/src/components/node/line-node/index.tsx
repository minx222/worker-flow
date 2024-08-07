import type { FC, PropsWithChildren } from 'react';

import { useClickAway } from 'ahooks';
import { debounce } from 'radash';

import cls from 'classnames';
// import { cls } from '@packges/common'
import { Handle, Position } from '@xyflow/react';

interface LineNodeProps extends PropsWithChildren {
	className?: string;
	enabelConnect?: boolean;
	isConnectable?: boolean;
}

export const BaseNode: FC<LineNodeProps> = (props) => {
	const { children, className, isConnectable } = props;

	const [showConnectable, setShowConnectable] = useState(false);

	const onHiddenConnectable = useCallback(
		debounce(
			{
				delay: 1000,
			},
			() => {
				setShowConnectable(false);
			},
		),
		[setShowConnectable],
	);

	const warpper = useRef<HTMLDivElement>(null);
	const openConnectable = useCallback(() => {
		setShowConnectable(true);
	}, [showConnectable]);

	useClickAway(() => {
		onHiddenConnectable();
	}, warpper);

	return (
		<div ref={warpper} className="node-warpper relative">
			{showConnectable && (
				<div className="tools-warpper absolute -left-2 -right-2 -top-2 -bottom-2 border border-solid border-blue-600">
					
				</div>
			)}
			<div
				className={cls(
					'relative bg-white border border-solid border-slate-800 rounded-md p-1',
					className,
				)}
				onClick={openConnectable}
				onKeyDown={openConnectable}
			>
				<div className="connect">
					<Handle
						type="target"
						position={Position.Left}
						isConnectable={isConnectable}
					/>
					<Handle
						type="target"
						position={Position.Right}
						isConnectable={isConnectable}
					/>
					<Handle
						type="target"
						position={Position.Top}
						isConnectable={isConnectable}
					/>
					<Handle
						type="target"
						position={Position.Bottom}
						isConnectable={isConnectable}
					/>
				</div>
				<div className={cls('text-sm')}>{children}</div>
			</div>
		</div>
	);
};
