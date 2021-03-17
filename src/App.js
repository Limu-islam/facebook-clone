import "./App.css";
import Topbar from "./Topbar";
import {Route,BrowserRouter as Router,Switch,Link} from "react-router-dom"
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import Marketplace from "./Pages/Marketplace";
import Groups from "./Pages/Groups";
import Gamming from "./Pages/Gamming";

function App() {
  return (
    <div className="App">
     <Router>
     <Topbar></Topbar>
     <Switch>

       <Route path='/' exact component={Home}></Route>
       <Route path='/watch' exact component={Watch}></Route>
       <Route path='/marketplace' exact component={Marketplace}></Route>
       <Route path='/groups' exact component={Groups}></Route>
       <Route path='/gamming' exact component={Gamming}></Route>

        

       
     </Switch>
     </Router>
    </div>
  );
}

export default App;
