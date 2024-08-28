import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {Provider} from 'react-redux';
import Header from './Header';
import Home from './Home';
import Abouts from './Abouts';
import Contact from './Contact';
import { myStore } from './linux/config';

let routerPaths=createBrowserRouter([
  {"path":"/Header","element":<Header/>},
  {"path":"/Home","element":<Home/>},
  {"path":"/Abouts","element":<Abouts/>},
  {"path":"/Contact","element":<Contact/>},
])
function App() {
  return (
    <Provider store={myStore}>
    <div className="App">
      <RouterProvider router={routerPaths}/>
     
    </div>
    </Provider>
    
  );
}

export default App;