import { Dimensions, Image, Pressable, ScrollView } from "react-native"
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { ContentBanner } from "./styles"
import { useEffect, useRef, useState } from "react";

export function Banner() {
  const [pressStart, setPressStart] = useState(false);
  const [isLastItem, setIsLastitem] = useState(false);
  const [oldValueScroll, setOldValueScroll] = useState(0);
  const [isScrollViewReady, setIsScrollViewReady] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const windowWidth = Dimensions.get('window').width;
  const banners = [
    { source: require("../../../Header/components/assets/venom.jpg") },
    { source: require("../../../Header/components/assets/miranha.jpg") },
    { source: require("../../../Header/components/assets/deadPool2.jpg") },
    { source: require("../../../Header/components/assets/jhonWilson4.jpg") },
  ]

  useEffect(() => {
    if (pressStart) {
      return
    }

    if (isLastItem) {
      const timeout = setTimeout(() => {
        setOldValueScroll(0)
        scrollViewRef.current?.scrollTo({ x: 0, animated: true });
      }, 3000)

      return () => clearInterval(timeout);
    } else {
      const interval = setInterval(() => {
        startAutoScroll();
      }, 3000);

      return () => clearInterval(interval);
    }

  }, [isScrollViewReady, oldValueScroll, pressStart, isLastItem]);

  const handleScrollViewReady = () => {
    setIsScrollViewReady(!isScrollViewReady);
  };

  const startAutoScroll = () => {
    if (isScrollViewReady) {
      scrollViewRef.current?.scrollTo({ x: oldValueScroll + windowWidth, animated: true });
    }
  };

  const handlePressIn = () => {
    setPressStart(true)
  }

  const handlePressOut = () => {
    setPressStart(false)
  }

  const returnFistBanner = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    
    setOldValueScroll(contentOffset.x)

    const offsetX = event.nativeEvent.contentOffset.x.toFixed(2);
    const finalValue = (event.nativeEvent.contentSize.width - event.nativeEvent.layoutMeasurement.width).toFixed(2)

    if (offsetX === finalValue) {
      setIsLastitem(true)
    } else {
      setIsLastitem(false)
    }
  }

  return (
    <ContentBanner>
      <ScrollView ref={scrollViewRef} horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false} onContentSizeChange={handleScrollViewReady} onScroll={(e) => returnFistBanner(e)} >

        {banners.map((banner, index) =>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} key={index}>
            <Animated.View>
              <Image source={banner.source} style={{ width: windowWidth, height: "100%" }} />
            </Animated.View>
          </Pressable>
        )}

      </ScrollView>
    </ContentBanner>
  )
}