import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useEffect } from "react";
// import Video from "react-native-video";
import { Video, AVPlaybackStatus } from "expo-av";

import { auth } from "../../firebase/firebase";
const Settings = ({ navigation }) => {
    const video = React.useRef(null);
    return (
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
  video:{
    width: "100%",
    height: "50%",
  }
});
