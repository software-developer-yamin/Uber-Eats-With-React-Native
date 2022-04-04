import { View } from "react-native";
import { Divider } from "@rneui/themed";
import { About } from "../components/restaurantDetail";

export default function RestaurantDetail({ route}) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
    </View>
  );
}
