import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const MyCustomComponent = props => {
  const { priority, resizeMode, style, source } = props;
  const { uri } = source;
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  return (
    <>
      {showPlaceholder ? (
        <Image source={source} style={style} />
      ) : (
        <FastImage
          style={style}
          source={{
            uri: uri,
            priority: priority,
          }}
          resizeMode={resizeMode}
          onLoad={setShowPlaceholder(false)}
          onError={setShowPlaceholder(true)}
        />
      )}
    </>
  );
};

export default MyCustomComponent;

MyCustomComponent.propTypes = {
  priority: PropTypes.string,
  resizeMode: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

MyCustomComponent.defaultProps = {
  priority: 'normal',
  resizeMode: 'contain',
  style: { width: '100%', height: '100%' },
  placeholder: '',
  source: '',
};
