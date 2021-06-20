import R from '../../../res/R';
import React, {Component, Fragment} from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';

const SafeArea = (props) => {
  return (
    <Fragment>
      <SafeAreaView
        style={[
          styles.safeAreaTop,
          {
            backgroundColor: props.statusBarColor
              ? props.statusBarColor
              : R.color.white,
          },
        ]}
      />
      <StatusBar
        backgroundColor={props.statusBarColor}
        barStyle={props.statusBarStyle}
      />
      <SafeAreaView
        style={[
          styles.safeAreaBottom,
          {
            backgroundColor: props.bottomBarColor
              ? props.bottomBarColor
              : R.color.white,
          },
        ]}>
        <View style={styles.container}>{props.children}</View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: R.color.white,
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: R.color.gray1,
  },
  container: {
    flex: 1,
    backgroundColor: R.color.white,
  },
});

export default SafeArea;
