import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Card } from "react-native-elements";
import nasiGoreng from "../assets/nasiGoreng.jpg"; // Pastikan path dan nama file benar
import sateAyam from "../assets/sate-ayam.jpg"; // Pastikan path dan nama file benar
import rendang from "../assets/rendang-daging.jpg"; // Pastikan path dan nama file benar

const recipes = [
  {
    id: "1",
    title: "Nasi Goreng",
    description: "Nasi goreng spesial dengan ayam dan sayuran.",
    image: nasiGoreng,
  },
  {
    id: "2",
    title: "Sate Ayam",
    description: "Sate ayam dengan bumbu kacang.",
    image: sateAyam,
  },
  {
    id: "3",
    title: "Rendang Daging",
    description: "Daging sapi dimasak dengan rempah-rempah.",
    image: rendang,
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { recipe: item })}
          >
            <Card containerStyle={styles.card}>
              <Card.Image source={item.image} style={styles.image} />
              <Card.Title style={styles.title}>{item.title}</Card.Title>
              <Card.Divider />
              <Text style={styles.description}>{item.description}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  card: {
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginBottom: 10,
    color: "#555",
  },
});

export default HomeScreen;
