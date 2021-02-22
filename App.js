import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import colors from "./assets/colors";
const { darkGrey, grey } = colors;
const App = () => {
  console.log(Constants.statusBarHeight);
  return (
    <ScrollView style={styles.body}>
      <View style={styles.header}>
        <Image
          source={require("./assets/logo.png")}
          style={{ height: 30, width: 61 }}
          resizeMode="cover"
        ></Image>
      </View>
      {/***********************************************
       ******************** HERO*********************
       * ******************************************* */}
      <View style={[styles.hero, styles.container]}>
        <Text style={styles.title}>Interstellar</Text>
        <View style={styles.details}>
          <Text style={styles.details_d}>2014</Text>
          <Text style={styles.details_d}>PG-13</Text>
          <Text style={styles.details_d}>2h49min </Text>
          <Text style={styles.details_d}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style={styles.hero_book}>
          <Image
            style={styles.hero_poster}
            source={require("./assets/Interstellar_film_poster.jpg")}
          ></Image>
          <View style={styles.hero_book_action}>
            <View>
              <Text style={styles.poster_description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                culpa illum quisquam dicta perferendis error delectus, quia qui
                nemo
              </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.ranking}>
          <View style={styles.ranking_element}>
            <AntDesign name="star" size={24} color="gold" />
            <Text style={{ color: "#fff" }}>8,6/10</Text>
            <Text style={{ color: "#929292", fontSize: 12 }}>1.1M</Text>
          </View>
          <View style={styles.ranking_element}>
            <AntDesign name="staro" size={24} color="#fff" />
            <Text style={{ color: "#fff" }}>Rate this</Text>
          </View>
          <View style={[styles.ranking_number_section, styles.ranking_element]}>
            <View style={[styles.ranking_number, styles.ranking_element]}>
              <Text style={styles.ranking_number_number}>74</Text>
            </View>

            <Text style={{ color: "#fff" }}>Metascore</Text>
            <Text style={{ color: "#929292", fontSize: 12 }}>
              46 Critics View
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
      {/***********************************************
       ******************** ACTORS*********************
       * ******************************************* */}
      <View style={[styles.container]}>
        <Text style={styles.title}>Top Billet Cast</Text>
        <ScrollView style={[styles.actors]} horizontal={true}>
          <View style={styles.actor_item}>
            <Image
              source={require("./assets/mathiew.jpg")}
              style={styles.actor_picture}
              resizeMode="cover"
            ></Image>
            <View style={styles.actor_details}>
              <Text style={styles.actor_name}>Matthew McCon</Text>
              <Text style={styles.actor_role}>Cooper</Text>
            </View>
          </View>
          <View style={styles.actor_item}>
            <Image
              source={require("./assets/anne.jpg")}
              style={styles.actor_picture}
              resizeMode="cover"
            ></Image>
            <View style={styles.actor_details}>
              <Text style={styles.actor_name}>Anne Hathaway</Text>
              <Text style={styles.actor_role}>Brand</Text>
            </View>
          </View>
          <View style={styles.actor_item}>
            <Image
              source={require("./assets/jessica.jpg")}
              style={styles.actor_picture}
              resizeMode="cover"
            ></Image>
            <View style={styles.actor_details}>
              <Text style={styles.actor_name}>Matthew McCon</Text>
              <Text style={styles.actor_role}>Murph</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.contributers}>
          <View style={styles.contributer_details}>
            <Text style={styles.contributer_name}>Director</Text>
            <Text style={styles.contributer_description}>
              Christopher Nolan
            </Text>
          </View>
          <View style={styles.contributer_details}>
            <Text style={styles.contributer_name}>Writes</Text>
            <Text style={styles.contributer_description}>
              Jonathan Nolan (writenby) and Christopher Nolan(written by
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: darkGrey,
    // padding: 20,
  },
  container: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  header: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    backgroundColor: grey,
  },
  /*****************/
  /******Hero******/
  /*****************/
  title: {
    color: "#C0C0C0",
    fontSize: 26,
  },
  details: {
    flexDirection: "row",
  },
  details_d: {
    color: "#929292",
    fontSize: 15,
    marginRight: 10,
  },

  hero_book: {
    flexDirection: "row",
    marginTop: 7,
  },
  hero_poster: {
    flex: 1,
    height: 180,
  },
  hero_book_action: {
    flex: 2,
    paddingLeft: 10,
  },
  poster_description: {
    color: "#C0C0C0",
  },

  button: {
    backgroundColor: "#0277bd",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  button_text: {
    color: "#fff",
    textAlign: "center",
  },
  /*****************/
  /******Ranking******/
  /*****************/
  ranking: {
    marginTop: 15,
    flexDirection: "row",
  },
  ranking_number_section: {
    alignItems: "center",
    justifyContent: "center",
  },

  ranking_number: {
    color: "#fff",
    backgroundColor: "green",
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  ranking_element: { flex: 1, alignItems: "center" },
  ranking_number_number: {
    color: "#fff",
  },

  separator: {
    height: 7,
    backgroundColor: "#171717",
  },
  /*****************/
  /******Actors******/
  /*****************/
  actors: {
    flexDirection: "row",
    marginTop: 5,
  },
  actor_item: {
    marginRight: 10,
  },
  actor_details: { backgroundColor: "#333333" },
  actor_name: {
    color: "#C0C0C0",
    marginTop: 5,
    marginLeft: 5,
  },
  actor_role: {
    color: "#929292",
    marginLeft: 5,
    marginBottom: 5,
  },
  actor_picture: {
    width: 150,
    height: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  contributer_name: { color: "#C0C0C0", marginTop: 7 },
  contributer_description: { color: "#929292" },
});

export default App;
