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
    <Route path={`${process.env.PUBLIC_URL}/`} component={EnterPage} exact />
    <Route path={`${process.env.PUBLIC_URL}/main`} component={MainPage} />
    </Switch>
    </>
  );
}

export default App;
