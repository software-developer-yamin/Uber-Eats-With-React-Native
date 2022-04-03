import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "tjIRIA9rJt_ne1j661jKcAvFY7Jxvd6qmefmGUb1lnTbsFhi8TC22IwQYTCopVfITPWR4OMxua9ryZR3afjvl44CPRGPtJzlAisOvKgA2vOT_Pamwn3uQ6ZtCrpJYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;
    const response = await fetch(yelpUrl, {
      headers: { Authorization: `Bearer ${YELP_API_KEY}` },
    });
    const data = await response.json();
    return setRestaurantData(data.businesses);
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  console.log(restaurantData[0]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
