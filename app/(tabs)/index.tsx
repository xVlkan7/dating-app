import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CORK_SPECKLES, HOME_PHOTOS } from "../../src/data/home";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState<"dating" | "friends">("dating");

  return (
    <View style={styles.screen}>
      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        {CORK_SPECKLES.map((speckle, index) => (
          <View
            key={index}
            style={[
              styles.speckle,
              {
                height: speckle.size,
                left: speckle.left,
                top: speckle.top,
                width: speckle.size,
              },
            ]}
          />
        ))}
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 16 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Just A Date</Text>
        <Text style={styles.subtitle}>A softer way to find your people.</Text>

        <View accessibilityRole="tablist" style={styles.selector}>
          {(["dating", "friends"] as const).map((option) => {
            const selected = mode === option;
            return (
              <Pressable
                key={option}
                accessibilityRole="tab"
                accessibilityState={{ selected }}
                onPress={() => setMode(option)}
                style={selected ? styles.selectedOption : styles.option}
              >
                <Text
                  style={selected ? styles.selectedText : styles.optionText}
                >
                  {option[0].toUpperCase() + option.slice(1)}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.pin} />
        <View style={styles.polaroidRow}>
          {HOME_PHOTOS.map((photo) => (
            <View
              key={photo.id}
              style={[
                styles.polaroid,
                { transform: [{ rotate: photo.rotation }] },
              ]}
            >
              <Image
                accessibilityLabel={photo.caption}
                source={{ uri: photo.uri }}
                style={styles.photo}
              />
              <Text numberOfLines={1} style={styles.caption}>
                {photo.caption}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#B98252",
    flex: 1,
  },
  speckle: {
    backgroundColor: "#8F5F3C",
    borderRadius: 8,
    opacity: 0.33,
    position: "absolute",
  },
  content: {
    paddingBottom: 32,
    paddingHorizontal: 20,
  },
  title: {
    color: "#FFFDF8",
    fontFamily: "Georgia",
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: -1,
    marginTop: 4,
  },
  subtitle: {
    color: "#FFF4E2",
    fontSize: 15,
    marginTop: 5,
  },
  selector: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(78, 48, 27, 0.25)",
    borderColor: "rgba(255,255,255,0.28)",
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 24,
    padding: 4,
  },
  selectedOption: {
    backgroundColor: "#FFFDF8",
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 9,
  },
  option: {
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 9,
  },
  selectedText: {
    color: "#9E493A",
    fontSize: 14,
    fontWeight: "800",
  },
  optionText: {
    color: "#FFF9EF",
    fontSize: 14,
    fontWeight: "700",
  },
  pin: {
    alignSelf: "center",
    backgroundColor: "#B95543",
    borderColor: "#8D382B",
    borderRadius: 10,
    borderWidth: 2,
    height: 18,
    marginBottom: -3,
    marginTop: 26,
    width: 18,
    zIndex: 1,
  },
  polaroidRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  polaroid: {
    backgroundColor: "#FFFDF8",
    elevation: 4,
    flex: 1,
    maxWidth: 125,
    minWidth: 0,
    padding: 6,
    paddingBottom: 11,
    shadowColor: "#59351E",
    shadowOffset: { height: 3, width: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  photo: {
    aspectRatio: 0.84,
    backgroundColor: "#E7D5C1",
    width: "100%",
  },
  caption: {
    color: "#5F5148",
    fontFamily: "Georgia",
    fontSize: 11,
    marginTop: 7,
    textAlign: "center",
  },
});
