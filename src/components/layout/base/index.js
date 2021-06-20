import React from 'react';
import {connect} from 'react-redux';
import _get from 'lodash.get';

// constant/service
import R from '../../../res/R';

// components
import {
  View,
  ViewStyle,
  StyleSheet,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';

const BaseLayout: React.FC<PropsI> = props => {
  let bodyStyles = {...styles.body};

  const BodyView: React.FC<any> = p => {
    return (
      <View style={{...bodyStyles, ...props.bodyStyles}} {...p}>
        {p.children}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        translucent
        barStyle={props.barStyle ? props.barStyle : 'light-content'}
        backgroundColor={
          props.statusBarColor ? props.statusBarColor : R.color.primary
        }
      />
      <BodyView>{props.children}</BodyView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});


export default BaseLayout;
