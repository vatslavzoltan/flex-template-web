import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import { NamedLink } from '../../components';
import { ListComponent } from '../../components';
import classNames from 'classnames';

import css from './SectionAppAbout.css';

const list = [{
  value: 'Calendar'
}, {
  value: 'Diary'
},
{
  value: 'Task list'
},
{
  value: 'Chat'
},
{
  value: 'Notifications'
}];

const SectionAppAbout = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionAppAbout.titleLineOne" />
      </div>
      <div className={css.prodAbout}>
        <div className={css.prodAboutCol}>
          <h3 className={css.textHeader}>
            <FormattedMessage id="SectionAppAbout.textHeader" />
          </h3>
          <p className={css.textDescr}>
            <FormattedMessage id="SectionAppAbout.textDescription" />
          </p>
          <ListComponent className = {css.descrList} listArr = {list} isMark/>
        </div>
        <div className={css.prodAboutCol}>
          2
        </div>
      </div>

      <div className={css.learnMoreBtn}>
        <NamedLink name="ProductPage" className={css.heroButton}>
          Learn more
        </NamedLink>
      </div>
    </div>
  );
};

SectionAppAbout.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionAppAbout.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionAppAbout;
