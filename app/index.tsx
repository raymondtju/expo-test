import { Stack } from "expo-router";
import React from "react";
import { Button, Image, Text, View } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function MainScreen() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          headerTitle: (props) => <LogoTitle />,
          headerRight: () => (
            <Button
              onPress={() => setCount((c) => c + 1)}
              title="Update count"
            />
          ),
        }}
      />
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
    </View>
  );
}
