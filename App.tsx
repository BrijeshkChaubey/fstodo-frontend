

import React, { useRef } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Animated,
  Dimensions,
  View,
} from 'react-native';
import { Headercomponent } from './src/components/headerComponent';
import { FormSelectorBtn } from './src/components/Formselector';
import { Loginform } from './src/screen/Login';
import { Registerform } from './src/screen/Register';


const { width } = Dimensions.get('window');


const App = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef()
  const Righheaderopacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0]
  })
  const LeftheaderTranslatex = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40]
  })
  const RighheaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20]
  })
  const Logincolorinterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)']
  })
  const Signupcolorinterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)']
  })
  return (
    <View style={{ flex: 1, paddingTop: 80 }}>
      <View style={{ height: 80 }}>
        <Headercomponent leftheading='Welcome ' rightheading='Home'
          bottomheading='welcome to my world'
          Righheaderopacity={Righheaderopacity}
          LeftheaderTranslatex={LeftheaderTranslatex}
          RighheaderTranslateY={RighheaderTranslateY} />

      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20 }}>
        <FormSelectorBtn backgroundColor={Logincolorinterpolate} title='Login'
         onPress={()=>scrollView.current.scrollTo({x:0})} />
        <FormSelectorBtn backgroundColor={Signupcolorinterpolate} title='SignUp' onPress={()=>scrollView.current.scrollTo({x:width})} />
      </View>
      <ScrollView
       ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: animation } } }], {
          useNativeDriver: false
        })}>
        <Loginform />
        <ScrollView>
          <Registerform />
        </ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  borderRight: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  }
});

export default App;
