import React from 'react';

import {StyleSheet, Text as TextC, TextProps} from 'react-native';

import R, {Font} from '../../res/R';

const Text = (props) => {
  const {
    variant = 'content',
    color = R.color.fontPrimary,
    style = {},
    font = 'regular',
    gutterBottom = 0,
    gutterTop = 0,
    align = 'auto',
    alignVertical = 'auto',
    transform = 'none',
    ...restProps
  } = props;

  let defaultStyles = styles[variant];

  return (
    <TextC
      style={{
        ...styles[font],
        ...defaultStyles,
        color,
        textAlign: align,
        textAlignVertical: alignVertical,
        marginBottom: R.unit.scale(gutterBottom),
        marginTop: R.unit.scale(gutterTop),
        textTransform: transform,
        ...style,
      }}
      {...restProps}>
      {props.children}
    </TextC>
  );
};

const styles = StyleSheet.create({
  heading_42: {
    fontSize: R.unit.scale(42),
  },
  heading_35: {
    fontSize: R.unit.scale(35),
  },
  title: {
    fontSize: R.unit.scale(22),
  },
  title0: {
    fontSize: R.unit.scale(20),
  },
  title1: {
    fontSize: R.unit.scale(18),
  },
  title2: {
    fontSize: R.unit.scale(16),
  },
  title3: {
    fontSize: R.unit.scale(15),
  },
  title4: {
    fontSize: R.unit.scale(14),
  },
  content: {
    fontSize: R.unit.scale(12),
  },
  content2: {
    fontSize: R.unit.scale(10),
  },
  small: {
    fontSize: R.unit.scale(8),
  },
  h1: {
    fontSize: R.unit.scale(28),
  },
  h2: {
    fontSize: R.unit.scale(24),
  },
  h3: {
    fontSize: R.unit.scale(18),
  },
  h4: {
    fontSize: R.unit.scale(16),
  },
  h5: {
    fontSize: R.unit.scale(13),
  },
  h6: {
    fontSize: R.unit.scale(10),
  },
  buttonText: {
    fontSize: R.unit.scale(12),
  },
  
  _19: {
    fontSize: R.unit.scale(18),
  },
});

/*
title - 18dp - main top title 
title2 - 16dp will be used in tab or section
title4 - 15dp will be used in tab or section
title3 - 14dp will be used in tab or section
small - 8dp below title small gray text
content - 12 dp , black
content2 - 10 dp, black
h1 - 32dp
h2 - 24dp
h3 - 18dp
h4 - 16dp
h5 - 13dp
h6 - 10dp
buttonText - 12dp
*/


export default Text;
