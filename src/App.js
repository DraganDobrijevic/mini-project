import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Zadatak1 from './pages/zadatak1/zadatak1.component';
import Zadatak2 from './pages/zadatak2/zadatak2.component';
import Zadatak3 from './pages/zadatak3/zadatak3.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/zadatak1' component={Zadatak1} />
        <Route path='/zadatak2' component={Zadatak2} />
        <Route path='/zadatak3' component={Zadatak3} />
      </Switch>
    </div>
  );
}

export default App;
