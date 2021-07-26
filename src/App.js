import './SCSS/main.scss';
import HomeHeader from './Components/HomeHeader/HomeHeader';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Contact from './Components/Contact/Contact';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import About from './Components/About/About';
import ProjectNav from './Components/Projects/ProjectNav';
function App() {
  return (
    <div>
      <Router>
    <div className="app">
     <Switch>

        <Route path="/home">
        <NavigationBar/>
          <HomeHeader />
        </Route>
        <Route path="/" exact>
        <NavigationBar/>
          <HomeHeader />
        </Route>

        <Route path="/Contact">
          <NavigationBar/>
          <Contact />
        </Route>

        <Route path="/about">
          <NavigationBar/>
          <About />
        </Route>
        <Route path="/projects">
          <NavigationBar/>
          <ProjectNav />
        </Route>
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
