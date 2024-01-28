import { Route, Switch, Link } from 'react-router-dom';
import CreatePetPage from './../../pages/CreatePetPage';
import PetsListPage from './../../pages/PetsListPage';

function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/pet/create'>Add pet</Link>
          </li>
          <li>
            <Link to='/pets'>Pet list</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>
          home
        </Route>
        <Route path='/pets'>
          <PetsListPage />
        </Route>
        <Route path='/pet/create'>
          <CreatePetPage />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
