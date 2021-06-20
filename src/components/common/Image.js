import React from 'react';

import {
  View,
  StyleSheet,
  Animated,
  ImageProps,
  ImageURISource,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

const Image = (props) => {
  const {
    thumbnailSource,
    source,
    resizeMode,
    containerStyles = {},
    thumbnailStyles = {},
    imageStyles = {},
    resizeMethod = 'scale',
    isDisableOnPress = false,
    onPressImage,
    ...restProps
  } = props;

  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  const handleThumbnailLoaded = () => {
    // @ts-ignore
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleImageLoad = () => {
    // @ts-ignore
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={isDisableOnPress ? 1 : 0.5}
      onPress={isDisableOnPress ? undefined : onPressImage}>
      <View
        style={{
          ...styles.container,
          ...containerStyles,
        }}>
        <Animated.Image
          {...restProps}
          source={thumbnailSource}
          style={{
            ...thumbnailStyles,
            opacity: thumbnailAnimated,
          }}
          onLoad={handleThumbnailLoaded}
          blurRadius={1}
        />
        <Animated.Image
          // {...restProps}
          source={source}
          style={{
            ...imageStyles,
            ...styles.imageOverlay,
            opacity: imageAnimated,
          }}
          resizeMode={resizeMode ? resizeMode : 'contain'}
          onLoad={handleImageLoad}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  imageOverlay: {
    backgroundColor: 'transparent',
  },
});

export default Image;
