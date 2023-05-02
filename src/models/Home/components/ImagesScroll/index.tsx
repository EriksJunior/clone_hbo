import { Text, View, ScrollView, Image, Pressable, Dimensions, ImageSourcePropType, StyleProp, ImageStyle } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

interface IDataItens {
  source: ImageSourcePropType,
  title?: string,
}

interface IDataImageScroll {
  itens: Array<IDataItens>
  widthItens?: string | number;
  heightItens?: string | number;
  type: string
  viewMore?: boolean
  enableGradientFistItem?: boolean
  arrow?: boolean
  enableTitle?: boolean
  enableMargin?: boolean
  snapToAlignment?: "end" | "start" | "center" | undefined
}

export function ImageScroll({ itens, widthItens = 176, heightItens = 180, type, viewMore, enableGradientFistItem = false, arrow = false, enableTitle = false, enableMargin = false, snapToAlignment = "end" }: IDataImageScroll) {
  const { width } = Dimensions.get("window")

  return (
    <>
      {enableGradientFistItem ?
        <LinearGradient colors={["#000000", "transparent"]}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 0, y: 0.85 }}
        >
          <View>
            <Pressable style={{ flexDirection: "row", marginBottom: 10, marginTop: 15, marginHorizontal: 18, gap: 10, alignItems: "center" }} >
              <Text style={{ color: "white", fontWeight: "600" }}>
                {type}
              </Text>

              {arrow &&
                <SimpleLineIcons name="arrow-right" color={"white"} />
              }
            </Pressable>

            <ScrollView showsHorizontalScrollIndicator={false}
              horizontal={true}
              scrollEventThrottle={16}
              snapToAlignment={snapToAlignment}
              pagingEnabled
              decelerationRate="fast"
            >
              {itens.map((item, index) =>
                <Pressable style={{ marginLeft: 18 }} key={index}>
                  <Image source={item.source} style={[{ width: widthItens, height: heightItens, resizeMode: "stretch" }, enableMargin ? index === (itens.length - 1) && { marginRight: 18 } : {}]} />
                  {item.title && enableTitle &&
                    <Text style={{ color: "#fffaf0c4", marginTop: 20, fontWeight: "600", width: width / 2.45 }}
                    >
                      {item.title}
                    </Text>
                  }
                </Pressable>
              )}

              {viewMore &&
                <Pressable style={{ marginHorizontal: 18, width: 176, height: 180, backgroundColor: "#6464786e", justifyContent: "center", alignItems: "center" }}>
                  <View>
                    <Text style={{ color: "#fffaf0ad", fontWeight: "bold" }}
                    >
                      Ver mais
                    </Text>
                  </View>
                </Pressable>
              }
            </ScrollView>
          </View>
        </LinearGradient>
        :
        <View>
          <Pressable style={{ flexDirection: "row", marginBottom: 10, marginHorizontal: 18, gap: 10, alignItems: "center" }} >
            <Text style={{ color: "white", fontWeight: "600" }}>
              {type}
            </Text>

            {arrow &&
              <SimpleLineIcons name="arrow-right" color={"white"} />
            }
          </Pressable>

          <ScrollView showsHorizontalScrollIndicator={false}
            horizontal={true}
            scrollEventThrottle={16}
            snapToAlignment={snapToAlignment}
            pagingEnabled
            decelerationRate="fast"
          >
            {itens.map((item, index) =>
              <Pressable style={{ marginLeft: 18 }} key={index}>
                <Image source={item.source} style={[{ width: widthItens, height: heightItens, resizeMode: "stretch" }, enableMargin ? index === (itens.length - 1) && { marginRight: 18 } : {}]} />
                {item.title && enableTitle &&
                  <Text style={{ color: "#fffaf0c4", marginTop: 20, fontWeight: "600", width: width / 2.45 }}
                  >
                    {item.title}
                  </Text>
                }
              </Pressable>
            )}

            {viewMore &&
              <Pressable style={{ marginHorizontal: 18, width: 176, height: 180, backgroundColor: "#6464786e", justifyContent: "center", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#fffaf0ad", fontWeight: "bold" }}
                  >
                    Ver mais
                  </Text>
                </View>
              </Pressable>
            }
          </ScrollView>
        </View>
      }

    </>
  )
}