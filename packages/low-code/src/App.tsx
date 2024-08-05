import { DndProvider  } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppRouter from './router'
const App = () => {
  return (
		<DndProvider backend={HTML5Backend}>
			<AppRouter />
		</DndProvider>
   
  );
};

export default App;
