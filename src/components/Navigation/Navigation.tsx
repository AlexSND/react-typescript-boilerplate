import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <>
    <Link to="/page-one">Page One</Link>
    <Link to="/page-two">Page Two</Link>
  </>
);

export default Navigation;
