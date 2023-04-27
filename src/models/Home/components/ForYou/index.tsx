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
  let teste = 40

  return (
    <View>
      <Pressable style={{ marginHorizontal: 15, marginBottom: 10 }} >
        <Text style={{ color: "white", fontWeight: "600" }}>
          Apenas para você
        </Text>
      </Pressable>

      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
        scrollEventThrottle={16}
        snapToAlignment="end"
        // snapToOffsets={[...Array(itens.length)].map((_, i) => (i * 230-20) + (i-1) * teste++ )}
        pagingEnabled
      >
        {itens.map((item, index) =>
          <Pressable style={{ marginLeft: 10}} key={index}>
            <Image source={item.source} style={{ width: 250, height: 100, resizeMode: "stretch" }} />
          </Pressable>
        )}
      </ScrollView>
    </View>
  )
}