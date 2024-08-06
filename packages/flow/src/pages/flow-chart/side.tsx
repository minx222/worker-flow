
export const Side = () => {
	const onDragStart = (event:  React.DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="grid grid-cols-2 gap-1 content-start justify-center h-full p-1">
      <div className="flex items-center justify-center w-20 h-20 p-1 text-sm border border-blue-200 border-solid" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="flex items-center justify-center w-20 h-20 p-1 text-sm border border-red-200 border-solid" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="flex items-center justify-center w-20 h-20 p-1 text-sm border border-yellow-200 border-solid" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
    </aside>
  );
}
