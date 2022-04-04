import { AntDesign, Ionicons } from "@expo/vector-icons";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SearchBar = ({setCity}) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}>
      <View style={styles.textInputContainer} >
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24} color="black" />
        </View>
        <TextInput onChangeText={(text) => setCity(text)} placeholder="Search" style={styles.textInput} />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 8,
            backgroundColor: "white",
            padding: 9,
            borderRadius: 30,
          }}
        >
          <AntDesign
            name="clockcircle"
            size={11}
            color="black"
            style={{ marginRight: 6 }}
          />
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    flex: 1,
  },
  textInput: {
    backgroundColor: "#eee",
    borderRadius: 20,
    marginTop: 5,
    fontWeight: "700",
    flex: 1,
  },
});
