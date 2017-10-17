import React from 'react';
import PropTypes from 'prop-types';
import { LabelColors } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Label component.
 * http://foundation.zurb.com/sites/docs/label.html
 *
 * @example
 *
 * <div className="label-colors-example">
 *  <Label color={Colors.SECONDARY}>Secondary Label</Label>
 *  <Label color={Colors.SUCCESS}>Success Label</Label>
 *  <Label color={Colors.ALERT}>Alert Label</Label>
 *  <Label color={Colors.WARNING}>Warning Label</Label>
 * </div>
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Label = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'label',
    props.className,
    props.color,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Label.propTypes));

  return <span {...passProps} className={className}/>;
};

Label.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(LabelColors))
};
