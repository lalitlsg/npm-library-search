import { Provider } from "react-redux";
import { store } from "../state";
import RepositorySearch from "./RepositorySearch";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search Package</h1>
        <RepositorySearch />
      </div>
    </Provider>
  );
};

export default App;
