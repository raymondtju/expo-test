import { Stack } from "expo-router";
import "../global.css";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "home",
// };

export default function () {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* <Stack.Screen name="home" options={{ presentation: "home" }} /> */}
    </Stack>
  );
}
