import './SCSS/main.scss';
import { Helmet } from 'react-helmet';
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

    <Helmet>
      <title>Protfolio page</title>
      <meta 
        name="desssssssss"
        content="yeeeeeeeeeeeeeeeeeeeeeeet"
      />
    </Helmet>



     <Switch>

        <Route path="/home">
        <Helmet>
          <title>home page</title>
          <meta 
            name="desssssssss"
            content="yeeeeeeeeeeeeeeeeeeeeeeet"
          />
        </Helmet>
        <NavigationBar/>
          <HomeHeader />
        </Route>
        <Route path="/" exact>
        <Helmet>
          </Helmet>
        <NavigationBar/>
          <HomeHeader />
        </Route>

        <Route path="/Contact">
          <NavigationBar/>
          <Contact />
        </Route>

        <Route path="/about">
        <Helmet>
          <title>about page</title>
          <meta 
            name="desssssssss111"
            content="page/about"
          />
        </Helmet>
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
