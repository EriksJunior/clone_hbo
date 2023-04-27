import { Text, View, ScrollView, Image, Pressable, Dimensions } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";


export function ContinueWatching() {
  const itens = [
    { source: require("../../../Header/components/assets/venom.jpg"), title: "Venom" },
    { source: require("../../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
    { source: require("../../../Header/components/assets/deadPool2.jpg"), title: "DeadPool 2" },
    { source: require("../../../Header/components/assets/jhonWilson4.jpg"), title: "Jhon Wick 4" },
    { source: require("../../../Header/components/assets/venom.jpg"), title: "Venom" },
    { source: require("../../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
  ]

  const { width } = Dimensions.get("window")

  return (
    <View>
      <Pressable style={{ flexDirection: "row", marginBottom: 10, marginTop: 15, marginHorizontal: 15, gap: 10, alignItems: "center" }} >
        <Text style={{ color: "#fffaf0", fontWeight: "bold" }}>
          Continue Assistindo
        </Text>

        <SimpleLineIcons name="arrow-right" color={"white"} />
      </Pressable>

        <ScrollView showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEventThrottle={16}
          snapToAlignment="end"
          decelerationRate={"fast"}
          pagingEnabled
        >
          {itens.map((item, index) =>
            <Pressable style={{ marginLeft: 10 }} key={index}>
              <Image source={item.source} style={{ width: 176, height: 176, resizeMode: "stretch" }} />
              <Text style={{ color: "#fffaf0c4", marginTop: 20, fontWeight: "600", width: width / 2.45 }}
              >
                {item.title}
              </Text>
            </Pressable>
          )}

          <Pressable style={{ marginLeft: 15, width: width / 2.45, height: 170, backgroundColor: "#6464786e", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#fffaf09a", fontWeight: "bold" }}
            >
              Ver mais
            </Text>
          </Pressable>
        </ScrollView>
    </View>
  )
}