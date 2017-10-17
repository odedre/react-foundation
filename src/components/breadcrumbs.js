import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Breadcrumbs component.
 * http://foundation.zurb.com/sites/docs/breadcrumbs.html
 *
 * @example
 *
 * <div className="breadcrumbs-example">
 *  <nav aria-label="You are here:" role="navigation">
 *    <Breadcrumbs>
 *      <BreadcrumbItem><a>Home</a></BreadcrumbItem>
 *      <BreadcrumbItem><a>Features</a></BreadcrumbItem>
 *      <BreadcrumbItem isDisabled>Gene Splicing</BreadcrumbItem>
 *      <BreadcrumbItem>
 *        <Inline showForSr>Current: </Inline> Cloning
 *      </BreadcrumbItem>
 *    </Breadcrumbs>
 *  </nav>
 * </div>
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Breadcrumbs = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'breadcrumbs',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Breadcrumbs.propTypes));

  return <ul {...passProps} className={className}/>;
};

Breadcrumbs.propTypes = {
  ...GeneralPropTypes
};

/**
 * Breadcrumb item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const BreadcrumbItem = (props) => {
  const className = createClassName(
    props.className,
    {
      'disabled': props.isDisabled
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(BreadcrumbItem.propTypes));

  return <li {...passProps} className={className}/>;
};

BreadcrumbItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isDisabled: PropTypes.bool
};
