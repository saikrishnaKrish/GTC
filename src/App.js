import './App.css';

//importing components
import HomeComponent from './Components/HomeComponent.js';

import GlobalContextProvider from './Context/GlobalContextProvider';

function App() {
  return (
    <div className="App">
    <GlobalContextProvider>
      <HomeComponent/>
    </GlobalContextProvider>
    </div>
  );
}
export default App;
