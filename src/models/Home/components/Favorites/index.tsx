import { Text, View, ScrollView, Image, Pressable, Dimensions } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';

export function Favorites() {
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
      <Pressable style={{ flexDirection: "row", marginBottom: 10, marginTop: 15, marginHorizontal: 18, gap: 10, alignItems: "center" }} >
        <Text style={{ color: "white", fontWeight: "600" }}>
          Meus Favoritos
        </Text>

        <SimpleLineIcons name="arrow-right" color={"white"} />
      </Pressable>

      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
        scrollEventThrottle={16}
        snapToAlignment="end"
        pagingEnabled
        decelerationRate="fast"
      >
        {itens.map((item, index) =>
          <Pressable style={{ marginLeft: 18 }} key={index}>
            <Image source={item.source} style={{ width: 176, height: 180, resizeMode: "stretch" }} />
            {item.title &&
              <Text style={{ color: "#fffaf0c4", marginTop: 20, fontWeight: "600", width: width / 2.45 }}
              >
                {item.title}
              </Text>
            }
          </Pressable>
        )}

        <Pressable style={{ marginHorizontal: 18, width: 176, height: 180, backgroundColor: "#6464786e", justifyContent: "center", alignItems: "center" }}>
          <View>
            <Text style={{ color: "#fffaf0ad", fontWeight: "bold" }}
            >
              Ver mais
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  )
}