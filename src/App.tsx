import { Provider } from 'react-redux';
import { store } from './state';
import './index.css';
import RepositoriesList from './components/RepositoriesList';
//import UserSearch from './practice/refs/UserSearch';

function App() {
  return <Provider store={store}>
    <div>
      <h1>Search for a Package</h1>
      <RepositoriesList/>
    </div>
  </Provider>
}

export default App;
