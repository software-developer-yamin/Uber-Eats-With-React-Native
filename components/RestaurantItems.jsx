import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RestaurantItems = ({ restaurantData }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage imageUrl={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

const RestaurantImage = ({ imageUrl }) => (
  <>
    <Image
      source={{
        uri: imageUrl,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        width: 30,
        height: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);

export default RestaurantItems;

const styles = StyleSheet.create({});
