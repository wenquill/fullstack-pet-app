import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePetPage from './pages/CreatePetPage';
import PetsListPage from './pages/PetsListPage';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/404';
import Footer from './components/Footer';

function App () {
  return (
    <Router>
      <Header />
      <main>
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
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
