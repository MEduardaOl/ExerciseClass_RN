import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SnapshotViewIOS } from 'react-native';
import foto from "./assets/profile-pic.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={foto}></Image>
      <Text> </Text>
      <Text>Mª Eduarda Olímpio</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0E4CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
