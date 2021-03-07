import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import SignUpPage from './components/pages/SignUp/SignUpPage';
import LoginPage from './components/pages/Login/LoginPage';
import AboutPage from './components/pages/About/AboutPage';
import Dashboard from './dashboard/Dashboard';
import EditForm from './dashboard/editform/EditForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signup'  exact component={SignUpPage}/>
        <Route path='/login'  exact component={LoginPage}/>
        <Route path='/about'  exact component={AboutPage}/>
        <Route path='/dashboard'  exact component={Dashboard}/>
        <Route path='/editform'  exact component={EditForm}/>
      </Switch>
    </Router>
  );
}

export default App;
