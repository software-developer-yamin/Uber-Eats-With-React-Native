import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RestaurantItem = () => {
  return (
    <View>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  );
};

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View>
    <Text>farmhouse Kitchen Thai Cuisine</Text>
    <Text>30-45 . min</Text>
    <Text>4.5</Text>
  </View>
);

export default RestaurantItem;

const styles = StyleSheet.create({});
