import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import ExploreScreen from "./components/tuiter/ExploreScreen"
import HomeScreen from "./components/tuiter/HomeScreen"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
      <div className="container">
         <Routes>
            <Route path="/hello" exact={true} element={<HelloWorld/>}/>
            <Route path="/" exact={true} element={<Labs/>}/>
            <Route path="/tuiter/home" element={<HomeScreen/>}/>
            <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
         </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;