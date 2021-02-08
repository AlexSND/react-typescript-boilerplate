import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import ExamplePageOne from './pages/ExamplePageOne';
import ExamplePageTwo from './pages/ExamplePageTwo';
import './styles/style.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <h1>
          Happy coding!
        </h1>
      </Route>
      <Route path="/page-one" component={ ExamplePageOne } />
      <Route path="/page-two" component={ ExamplePageTwo } />
    </Switch>
  </BrowserRouter>
);

export default App;
