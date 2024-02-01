import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePetPage from './pages/CreatePetPage';
import PetsListPage from './pages/PetsListPage';
import Header from './components/Header';
import Home from './pages/Home';

function App () {
  return (
    <Router>
        <Header />
        <main className='container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/pets'>
              <PetsListPage />
            </Route>
            <Route path='/pet/create'>
              <CreatePetPage />
            </Route>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
