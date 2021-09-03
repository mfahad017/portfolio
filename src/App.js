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
     <Switch>

        <Route path="/home">
          <Helmet>
            <title>Home Page</title>
            <meta
              name="page/home"
              content="this is the home page of my portfolio"
            />
          </Helmet>
        <NavigationBar/>
          <HomeHeader />
        </Route>
        <Route path="/" exact>
        <Helmet>
            <title>Home Page</title>
            <meta
              name="page/home"
              content="this is the home page of my portfolio"
            />
          </Helmet>
        <NavigationBar/>
          <HomeHeader />
        </Route>

        <Route path="/Contact">
        <Helmet>
            <title>Contact </title>
            <meta
              name="page/contact"
              content="A page where you can contact me"
            />
          </Helmet>
          <NavigationBar/>
          <Contact />
        </Route>

        <Route path="/about">
        <Helmet>
            <title>about page</title>
            <meta
              name="page/about"
              content="this is a page about me"
            />
          </Helmet>
          <NavigationBar/>
          <About />
        </Route>
        <Route path="/projects">
        <Helmet>
            <title>Project Page</title>
            <meta
              name="page/project"
              content="this is a page about my projects"
            />
          </Helmet>
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
