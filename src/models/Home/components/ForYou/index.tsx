import { View, Text, ScrollView, Pressable, Image } from "react-native"
import { Dimensions } from "react-native"

export function ForYou() {
  const itens = [
    { source: require("../../../Header/components/assets/venom.jpg"), title: "Venom" },
    { source: require("../../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
    { source: require("../../../Header/components/assets/deadPool2.jpg"), title: "DeadPool 2" },
    { source: require("../../../Header/components/assets/jhonWilson4.jpg"), title: "Jhon Wick 4" },
    { source: require("../../../Header/components/assets/venom.jpg"), title: "Venom" },
    { source: require("../../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
    { source: require("../../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
    { source: require("../../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
    { source: require("../../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
    { source: require("../../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
  ]

  const { width } = Dimensions.get("window")
  let teste = 20

  return (
    <View>
      <Pressable style={{ marginHorizontal: 18, marginBottom: 10 }} >
        <Text style={{ color: "white", fontWeight: "600" }}>
          Apenas para você
        </Text>
      </Pressable>

      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
        scrollEventThrottle={16}
        snapToAlignment="center"
        // snapToOffsets={[...Array(itens.length)].map((_, i) => (i * 248 - 18) + (i-1) * teste++)}
        pagingEnabled
        decelerationRate="fast"
      >
        {itens.map((item, index) =>
          <Pressable style={{marginLeft: 18}} key={index}>
            <Image source={item.source} style={{ width: 248, height: 130, resizeMode: "stretch" }} />
          </Pressable>
        )}
      </ScrollView>
    </View>
  )
}