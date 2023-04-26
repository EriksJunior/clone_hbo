import { Dimensions, Pressable, ScrollView, View, ImageBackground, PanResponder } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { ContentBanner, Indicator } from "./styles"
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
    const ms = 3000
    if (pressStart) {
      return
    }

    if (isLastItem) {
      const timeout = setTimeout(() => {
        setOldValueScroll(0)
        scrollViewRef.current?.scrollTo({ x: 0, animated: true });
      }, ms)

      return () => clearInterval(timeout);
    } else {
      const interval = setInterval(() => {
        startAutoScroll();
      }, ms);

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
    stopScrollIfFingerSwiper(contentOffset.x)

    const offsetX = event.nativeEvent.contentOffset.x.toFixed(2);
    const finalValue = (event.nativeEvent.contentSize.width - windowWidth).toFixed(2)

    if (offsetX === finalValue) {
      setIsLastitem(true)
    } else {
      setIsLastitem(false)
    }
  }

  const getIndexIndicator = () => {
    let indexIndicator = Math.round(oldValueScroll / windowWidth)
    return indexIndicator
  }

  const stopScrollIfFingerSwiper = (sizeScroll: number) => {
    const index = getIndexIndicator()
    let result = (sizeScroll / index).toFixed();
    
    if (sizeScroll === 0) {
      result = windowWidth.toFixed()
    }

    if (result !== windowWidth.toFixed()) {
      setPressStart(true)
    } else {
      setPressStart(false)
    }
  }


  return (
    <ContentBanner>
      <ScrollView ref={scrollViewRef} horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false} onContentSizeChange={handleScrollViewReady} onScroll={(e) => returnFistBanner(e)}>
        {banners.map((banner, index) =>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} key={index}>
            <ImageBackground source={banner.source} style={{ width: windowWidth, height: "100%" }} >
              <LinearGradient
                colors={["rgba(255, 255, 255, 0)", "#000000"]}
                style={{ height: '100%', width: '100%' }}
                start={{ x: 0, y: 0.70 }}
                end={{ x: 0, y: 0.94 }}
              />
            </ImageBackground>
          </Pressable>
        )}
      </ScrollView>

      <View style={{ width: "100%", position: "absolute", bottom: 0, flexDirection: "row", justifyContent: "center", gap: 15 }}>
        {banners.map((_, index) =>
          <Indicator key={index} style={[index === getIndexIndicator() ? { backgroundColor: "white" } : { backgroundColor: "gray" }]} />
        )}
      </View>
    </ContentBanner>
  )
}