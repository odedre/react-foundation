import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Icon component.
 *
 * @example
 *
 * <div className="menu-icons-example">
 *  <Menu>
 *    <MenuItem><a><Icon name="fi-list"/> <span>One</span></a></MenuItem>
 *    <MenuItem><a><Icon name="fi-list"/> <span>Two</span></a></MenuItem>
 *    <MenuItem><a><Icon name="fi-list"/> <span>Three</span></a></MenuItem>
 *    <MenuItem><a><Icon name="fi-list"/> <span>Four</span></a></MenuItem>
 *  </Menu>
 *  <Menu iconsOnTop>
 *    <MenuItem><a><Icon name="fi-list"/> <span>One</span></a></MenuItem>
 *    <MenuItem><a><Icon name="fi-list"/> <span>Two</span></a></MenuItem>
 *    <MenuItem><a><Icon name="fi-list"/> <span>Three</span></a></MenuItem>
 *    <MenuItem><a><Icon name="fi-list"/> <span>Four</span></a></MenuItem>
 *  </Menu>
 * </div>
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Icon = (props) => {
  const className = createClassName(
    props.prefix,
    props.prefix ? `${props.prefix}-${props.name}` : props.name,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Icon.propTypes));

  return <i {...passProps} className={className}/>;
};

Icon.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string
};
