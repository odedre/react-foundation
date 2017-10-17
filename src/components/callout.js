import React from 'react';
import PropTypes from 'prop-types';
import { CalloutColors, CalloutSizes } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Callout component.
 * http://foundation.zurb.com/sites/docs/callout.html
 *
 * @example
 *
 * <div className="callout-basics-example">
 *  <Callout>
 *    <h5>This is a callout.</h5>
 *    <p>It has an easy to override visual style, and is appropriately subdued.</p>
 *    <a>It's dangerous to go alone, take this.</a>
 *  </Callout>
 * </div>
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Callout = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'callout',
    props.className,
    props.color,
    props.size,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Callout.propTypes));

  return <div {...passProps} className={className}/>;
};

Callout.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(CalloutColors)),
  size: PropTypes.oneOf(objectValues(CalloutSizes))
};
