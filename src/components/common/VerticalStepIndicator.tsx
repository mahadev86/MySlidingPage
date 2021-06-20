import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import dummyData from './data';

const stepIndicatorStyles = {
  stepIndicatorSize: 15,
  currentStepIndicatorSize: 20,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: 'green',
  separatorFinishedColor: 'green',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: 'green',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 8,
  currentStepIndicatorLabelFontSize: 8,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: 'black',
  labelSize: 14,
  currentStepLabelColor: 'black',
  textAlign: 'left',
};

export default function VerticalStepIndicator() {
  const [currentPage, setCurrentPage] = React.useState<number>(2);

  const onViewableItemsChanged = React.useCallback(({viewableItems}) => {
    const visibleItemsCount = viewableItems.length;
    if (visibleItemsCount !== 0) {
      setCurrentPage(viewableItems[visibleItemsCount - 1].index);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={6}
          direction="vertical"
          currentPosition={currentPage}
          labels={dummyData.data.map(item => item.title)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
});
