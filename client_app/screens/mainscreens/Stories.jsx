import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ScrollView,
	Dimensions,
	StatusBar,
	TouchableOpacity,
	Image
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { Video } from 'expo-av';
import ClipsVideos from '../../components/stories/ClipsVideos';
import YoutubeVideos from '../../components/stories/YoutubeVideos';
import { getStories } from '../../axios/stories.axios';

const Stories = ({ navigation }) => {
	const [miniClips, setMiniClips] = useState([]);
	const [youtubeClips, setYoutubeClips] = useState([]);

	useEffect(() => {
		getStories().then((res) => {
			setMiniClips(res.data.filter((clip) => clip.video_type === 'miniclip'));
			setYoutubeClips(res.data.filter((clip) => clip.video_type === 'youtube'));
		});
	}, []);

	return (
		<ScrollView style={styles.scrollView}>
			<ClipsVideos clips={miniClips} navigation={navigation} />
			<YoutubeVideos clips={youtubeClips} />
		</ScrollView>
	);
};

export default Stories;

const styles = StyleSheet.create({
	scrollView: {
		position: 'relative',
		backgroundColor: '#1e1e1e',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		marginTop: StatusBar.currentHeight
	}
});
