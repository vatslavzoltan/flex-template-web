import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import { NamedLink } from '../../components';
import classNames from 'classnames';

import css from './SectionHowItWorks.css';
import how1 from './how1.svg';
import how2 from './how2.svg';
import how3 from './how3.svg';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />
      </div>
      <h2 className={css.subTitleText}> 
        <FormattedMessage id="SectionHowItWorks.titleLineTwo" />
      </h2>

      <div className={css.steps}>
        <div className={css.step}>
          <img src={how1} className={css.howImg} alt="#" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part1Text" />
          </p>
        </div>

        <div className={css.step}>
        <img src={how2} className={css.howImg} alt="#" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part2Text" />
          </p>
        </div>

        <div className={css.step}>
        <img src={how3} className={css.howImg} alt="#" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part3Text" />
          </p>
        </div>
      </div>

      <div className={css.learnMoreBtn}>
        <NamedLink name="AboutPage" className={css.heroButton}>
          Learn more
        </NamedLink>
      </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
