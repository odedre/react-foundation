import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @example
 *
 * <div className="flex-video-example">
 *  <FlexVideo isWidescreen isVimeo>
 *    <iframe src="//player.vimeo.com/video/60122989" width="400" height="225" frameBorder="0" allowFullScreen/>
 *  </FlexVideo>
 * </div>
 *
 * @param {Object} props
 * @returns {Object}
 */
export const FlexVideo = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'flex-video',
    props.className,
    {
      widescreen: props.isWidescreen,
      vimeo: props.isVimeo
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(FlexVideo.propTypes));

  return <div {...passProps} className={className}/>;
};

FlexVideo.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isWidescreen: PropTypes.bool,
  isVimeo: PropTypes.bool
};
