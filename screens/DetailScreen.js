import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const DetailScreen = ({ route }) => {
  const { recipe } = route.params; // Mengambil data resep dari parameter navigasi

  return (
    <View style={styles.container}>
      <Card>
        <Card.Image source={recipe.image} style={styles.image} />{" "}
        {/* Menampilkan gambar */}
        <Card.Title style={styles.title}>{recipe.title}</Card.Title>
        <Card.Divider />
        <Text style={styles.description}>{recipe.description}</Text>
        <Text style={styles.ingredientsTitle}>Bahan-bahan:</Text>
        <Text>- Nasi</Text>
        <Text>- Ayam</Text>
        <Text>- Sayuran</Text>
        <Text>- Bumbu</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  image: {
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    marginBottom: 10,
    color: "#555",
  },
  ingredientsTitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default DetailScreen;
