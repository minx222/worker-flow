import { Provider } from "react-redux"
import { ReactFlowProvider } from '@xyflow/react'
import '@xyflow/react/dist/style.css';
import { store } from './stores'
import AppRouter from './router'
const App = () => {
  return (
	<Provider store={store}>
		<ReactFlowProvider>
		<AppRouter />
		</ReactFlowProvider>
	</Provider>
  );
};

export default App;
