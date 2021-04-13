import React from 'react';
import PropTypes from 'prop-types';
import ReduxContext from './Context';

const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

Provider.propTypes = {
  children: PropTypes.node,
  store: PropTypes.any
};

export default Provider;
