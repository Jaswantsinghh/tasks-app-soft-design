import './App.scss';
import EnterPage from './modules/enterPage';
import MainPage from './modules/mainPage';
import {
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Switch>
    <Route path={`/`} component={EnterPage} exact />
    <Route path={`/main`} component={MainPage} />
    </Switch>
    </>
  );
}

export default App;
