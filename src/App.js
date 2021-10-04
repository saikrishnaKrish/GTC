import './App.css';

//importing components
import RoutingComponent from './Components/RouterComponent'
import ErrorPage from './Components/ErrorPageComponent'

//importing GlobalContext to pass params over child componenents
import {withGlobalContext} from './Context/GlobalContextProvider'

function App(props) {
  return (
    <div className="App">
      <div className={'dataContainer'}>
                {props.error ? <ErrorPage {...props}/> : <RoutingComponent /> }
            </div>

    </div>
  );
}
export default withGlobalContext(App);
