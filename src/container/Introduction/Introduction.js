// main imports
import React, {useState, useEffect, useRef} from 'react';
import R from '../../res/R';
import HorizontalStepIndicator from '../../components/common/HorizontalStepIndicator';
import VerticalStepIndicator from '../../components/common/VerticalStepIndicator';
import Button from '../../components/common/Button';
// components
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

const Introduction = props => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.root}>
          <VerticalStepIndicator />
          <Button
            gutterBottom={R.unit.scale(10)}
            backgroundColor={R.color.blue}
            text={'Keep learning'}
            onPress={() => {
              props.navigation.navigate('AssetAllocation');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: R.color.white},
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkContainer: {
    marginTop: R.unit.scale(25),
  },
  txtError: {
    textAlign: 'center',
    color: R.color.black,
    marginTop: R.unit.scale(10),
  },
});

export default Introduction;
