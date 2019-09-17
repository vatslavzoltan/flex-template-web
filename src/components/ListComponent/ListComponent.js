import React from 'react';
import PropTypes, { array } from 'prop-types';
import classNames from 'classnames';

import css from './ListComponent.css';

const ListItem = props => {
	const { isMark } = props;
	return (
		<li className={classNames(css.listItem, {
			[css.listItemMarked]: isMark
		})}>{props.value}</li>
	);
}

const ListComponent = props => {
	const { listArr, rootClassName, className, isMark } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <ul className={classes}>
			{listArr.map((item)=>
				<ListItem key={item.value.toString()} isMark={isMark || item.isMark} value = {item.value} />
				)}
		</ul>
  );
};

ListComponent.defaultProps = { rootClassName: null, className: null, listArr: null };

const { string } = PropTypes;

ListComponent.propTypes = {
	rootClassName: string,
	className: string,
	listArr: array,
};

export default ListComponent;
