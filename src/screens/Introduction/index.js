import React from 'react';

//import containers
import IntroductionContainer from '../../container/Introduction';
import BaseLayout from '../../components/layout/base';
import {SafeAreaView} from 'react-native-safe-area-context';
import R from '../../res/R';

const IntroductionScreen = props => {
  return (
    // @ts-ignore
    <BaseLayout>
      <SafeAreaView style={{flex: 1, backgroundColor: R.color.primary}}>
        <IntroductionContainer
          navigation={props.navigation}
          route={props.route}
        />
      </SafeAreaView>
    </BaseLayout>
  );
};

export default IntroductionScreen;
