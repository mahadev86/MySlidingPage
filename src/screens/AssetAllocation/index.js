import React from 'react';

//import containers
import AssetAllocationContainer from '../../container/AssetAllocation';
import BaseLayout from '../../components/layout/base';
import {SafeAreaView} from 'react-native-safe-area-context';
import R from '../../res/R';

const AssetAllocationScreen = (props) => {
  return (
    // @ts-ignore
    <BaseLayout>
      <SafeAreaView style={{flex: 1, backgroundColor: R.color.primary}}>
        <AssetAllocationContainer navigation={props.navigation} route={props.route} />
      </SafeAreaView>
    </BaseLayout>
  );
};

export default AssetAllocationScreen;
