import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import ExploreScreen from "./components/tuiter/ExploreScreen"
import HomeScreen from "./components/tuiter/HomeScreen"
import ProfileScreen from "./components/tuiter/ProfileScreen"
import EditProfile from "./components/tuiter/EditProfile"
import Tuiter from "./components/tuiter"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
      <div className="container">

      <Routes>
           <Route index
                  element={<Labs/>}/>
           <Route path="hello"
                  element={<HelloWorld/>}/>
           <Route path="tuiter"
                  element={<Tuiter/>}>
             <Route index
                    element={<HomeScreen/>}/>
             <Route path="explore"
                    element={<ExploreScreen/>}/>
             <Route path="profile"
                    element={<ProfileScreen/>}/>
             <Route path="editProfile" element={<EditProfile/>}/>

         </Route>
       </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;