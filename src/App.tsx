import React from 'react';
import { Helmet } from 'react-helmet';
import './styles/style.scss';

const App: React.FC = () => (
  <>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="app description" />
      <title>React boilerplate</title>
    </Helmet>
    <h1>
      Happy coding!
      <span role="img" aria-label="emoji">😎</span>
    </h1>
  </>
);

export default App;
