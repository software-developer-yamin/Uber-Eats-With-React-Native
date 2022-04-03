import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            marginTop: 7,
            fontWeight: "700",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
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
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
