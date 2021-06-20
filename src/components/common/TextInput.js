import React, {useState, useEffect} from 'react';
import {
  TextInput as TextInputR,
  View,
  StyleSheet,
  TextInputProps,
} from 'react-native';

import R from '../../res/R';
import Text from './Text';

const TextInput = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    // update value when receives from parent
    setValue(props.value);
  }, [props.value]);

  const handleChangeText = (text) => {
    setValue(text);

    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  const handleClear = () => {
    handleChangeText('');
    if (props.onHandleClear) {
      props.onHandleClear();
    }
  };

  const handleVerifiedClick = () => {
    handleChangeText('');
  };
  return (
    <View
      style={{
        ...styles.container,
        ...props.containerStyle,
      }}>
      <View
        style={{
          ...styles.inputContainer,
          ...props.inputContainer,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInputR
            {...props}
            ref={props.forwardedRef}
            style={{
              ...styles.input,
              ...props.style,
              paddingRight: props.rightComponent ? R.unit.scale(35) : 0,
            }}
            selectionColor={R.color.white}
            placeholderTextColor={
              props.placeholderTextColor
                ? props.placeholderTextColor
                : R.color.white
            }
            onChangeText={(e) => handleChangeText(e)}
          />
          {props.rightComponent ? (
            <View style={{...styles.rightSection, ...props.rightSectionStyle}}>
              {props.rightComponent}
            </View>
          ) : null}
        </View>
      </View>
      {props.error && (
        <Text
          color={R.color.red}
          variant="content"
          style={{
            width: '90%',
            textAlign: 'left',
            marginTop: R.unit.scale(5),
            marginHorizontal: R.unit.scale(20),
          }}>
          {'' + props.error}
        </Text>
      )}
    </View>
  );
};
export default TextInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: R.unit.scale(16),
  },
  inputContainer: {
    alignItems: 'center',
    height: R.unit.scale(50),
    borderRadius: R.unit.scale(25),
    flexDirection: 'row',
    borderColor: R.color.white,
    backgroundColor: R.color.whiteTrasparent,
    borderWidth: 2,
    paddingHorizontal: R.unit.scale(10),
  },
  input: {
    flex: 1,
    fontFamily: R.font.Regular,
    fontSize: R.unit.fontSize(1.2),
    color: R.color.white,
  },
  textButton: {
    color: R.color.primary,
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(10),
  },
  textInputHeading: {
    color: R.color.fontColor1,
  },
  rightSection: {
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: R.unit.scale(5),
    //position: "absolute",
    //right: R.unit.scale(5),
    //top: R.unit.scale(2),
  },
});
