/**
 * Navigation for landing page
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Navigation.css';

const Navigation = props => {
  const { children, className, rootClassName } = props;
  const rootClass = rootClassName || css.root;
  const classes = classNames(rootClass, className);

  return (
    <ul className={classes} role="navigation">
      {children}
    </ul>
  );
};

Navigation.defaultProps = {
  className: null,
  rootClassName: '',
};

const { node, string } = PropTypes;

Navigation.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
};

export default Navigation;
