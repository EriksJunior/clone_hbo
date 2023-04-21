import { Dimensions, Image, ScrollView, View } from "react-native"
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { ContentBanner } from "./styles"
import { useEffect, useRef, useState } from "react";

export function Banner() {
  const windowWidth = Dimensions.get('window').width;
  const [oldValueScroll, setOldValueScroll]= useState(0);
  const [isScrollViewReady, setIsScrollViewReady] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);


  useEffect(() => {
    const interval = setInterval(() => {
      startAutoScroll();
    }, 3000);

    return () => clearInterval(interval);
  }, [isScrollViewReady, oldValueScroll]);

  const handleScrollViewReady = () => {
    setIsScrollViewReady(!isScrollViewReady);
  };

  const startAutoScroll = () => {
    if (isScrollViewReady) {
      scrollViewRef.current?.scrollTo({x: oldValueScroll + windowWidth,  animated: true});
    }
  };

  const teste = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    setOldValueScroll(contentOffset.x)
  }



  return (
    <ContentBanner>
      <ScrollView ref={scrollViewRef} horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false} onContentSizeChange={handleScrollViewReady} onScroll={(e) => teste(e)} >
        <Animated.View>
          <Image source={require("../../../Header/components/assets/venom.jpg")} style={{ width: windowWidth, height: "100%" }} />
        </Animated.View>

        <Animated.View>
          <Image source={require("../../../Header/components/assets/miranha.jpg")} style={{ width: windowWidth, height: "100%" }} />
        </Animated.View>

        <Animated.View>
          <Image source={require("../../../Header/components/assets/deadPool2.jpg")} style={{ width: windowWidth, height: "100%" }} />
        </Animated.View>

        <Animated.View>
          <Image source={require("../../../Header/components/assets/jhonWilson4.jpg")} style={{ width: windowWidth, height: "100%" }} />
        </Animated.View>
      </ScrollView>
    </ContentBanner>
  )
}