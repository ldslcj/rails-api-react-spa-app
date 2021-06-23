import './App.css'
import {Route, Switch} from 'react-router-dom'
import AppUsers from './AppUsers'
import About from './About'
import UserForm from './components/UserForm'
import NavBar from './components/NavBar'

const App = () => {
  return (
  <>
  <NavBar />
  <Switch>
    <Route exact path='/' component={AppUsers} />
    <Route exact path='/about' component={About} />
    <Route exact path='/newUser' component={UserForm} />
  </Switch>
  </>
  )
}

export default App;
