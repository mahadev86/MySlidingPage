import React, {FC} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

import R from '../../res/R';
import Text from './Text';

const Button = (props) => {
  const {
    text,
    textVariant,
    subText = undefined,
    variant = 'text',
    activeOpacity = 0.8,
    gutterBottom = 0,
    gutterTop = R.unit.scale(15),
    size = 'lg',
    disabled,
    onPress,
    leftComponent,
    rightComponent,

    backgroundColor = 'black',
    borderColor = R.color.white,
    // text props
    color,
    font = 'regular',
    boldTextFont = 'regular',
    align = 'center',
    alignVertical = 'center',
    transform = 'none',

    btnWrapperStyles,
    btnTextStyles,
    btnSubTextStyles,
    leftSectionStyle,
    rightSectionStyle,
    loading,
    boldText,
    ...touchableProps
  } = props;

  const sizes = {sm: 28, md: 32, lg: 40};
  const borderRadius = {sm: 15, md: 25, lg: 10};
  const fontSizes = {sm: 10, md: 12, lg: 14};

  return !loading ? (
    <TouchableOpacity
      {...touchableProps}
      activeOpacity={activeOpacity}
      style={{
        minHeight: R.unit.scale(sizes[size]),
        ...styles.btn,
        ...styles[`btn_${variant}`],
        marginBottom: R.unit.scale(gutterBottom),
        marginTop: R.unit.scale(gutterTop),
        opacity: disabled === true ? 0.8 : 1,
        backgroundColor,
        borderColor,
        borderRadius: R.unit.scale(borderRadius[size]),
        ...btnWrapperStyles,
      }}
      onPress={disabled !== true || !loading ? onPress : undefined}>
      {leftComponent ? (
        <View style={{...styles.leftSection, ...leftSectionStyle}}>
          {leftComponent}
        </View>
      ) : null}
      <Text
        variant={textVariant ? textVariant : 'buttonText'}
        font={font}
        color={color ? color : 'white'}
        align={align}
        alignVertical={alignVertical}
        transform={transform}
        style={{
          ...btnTextStyles,
        }}>
        {text}
      </Text>
      {boldText && (
        <Text
          variant={textVariant ? textVariant : 'buttonText'}
          font={boldTextFont}
          color={color ? color : 'white'}
          align={align}
          alignVertical={alignVertical}
          transform={transform}
          style={[
            {marginStart: R.unit.scale(5)},
            {
              ...btnTextStyles,
            },
          ]}>
          {boldText}
        </Text>
      )}
      {rightComponent ? (
        <View style={{...styles.rightSection, ...rightSectionStyle}}>
          {rightComponent}
        </View>
      ) : null}
    </TouchableOpacity>
  ) : (
    <View
      style={{
        minHeight: R.unit.scale(sizes[size]),
        ...styles.btn,
        ...styles[`btn_${variant}`],
        marginBottom: R.unit.scale(gutterBottom),
        marginTop: R.unit.scale(gutterTop),
        opacity: disabled === true ? 0.8 : 1,
        backgroundColor,
        borderColor,
        borderRadius: R.unit.scale(borderRadius[size]),
        ...btnWrapperStyles,
      }}>
      <ActivityIndicator size="large" color={R.color.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 35,
    height: R.unit.scale(45),
    backgroundColor: 'black',
    width: '80%',
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    backgroundColor: R.color.whiteTrasparent,
  },
  btn_outlined: {
    borderWidth: 2,
    borderColor: R.color.white,
  },
  btn_contained: {
    backgroundColor: R.color.yellow,
  },
  leftSection: {
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: R.unit.scale(15),
    paddingRight: R.unit.scale(8),
  },
  rightSection: {
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: R.unit.scale(15),
    paddingLeft: R.unit.scale(8),
  },
});

export default Button;
