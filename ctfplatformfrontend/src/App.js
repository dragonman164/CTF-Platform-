import './App.css';
import NavBar from '../src/Components/NavBar'
import Footer from '../src/Components/Footer';
import {Switch,Route} from 'react-router-dom';
import HomePage from '../src/Components/Pages/Home';
import License from '../src/Components/Pages/License';
import About from '../src/Components/Pages/About';
import Team from '../src/Components/Pages/TeamPage';
import Admin from '../src/Components/Pages/AdminLogin';

function App() {
  return (
   <>
  <NavBar/>
<Switch>
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/license" component = {License}/>
  <Route exact path="/about" component = {About}/>
  <Route exact path="/team" component = {Team}/>
  <Route exact path="/admin" component = {Admin}/>

</Switch>
 
   </>
  );
}

export default App;
