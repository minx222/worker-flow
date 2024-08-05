import { Provider } from "react-redux"
import '@xyflow/react/dist/style.css';
import { store } from './stores'
import AppRouter from './router'
const App = () => {
  return (
	<Provider store={store}>
		<AppRouter />
	</Provider>
  );
};

export default App;
