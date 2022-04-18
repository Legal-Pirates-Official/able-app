import {
	StyleSheet,
	ScrollView,
	Dimensions,
	StatusBar
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
		// getStories().then((res) => {
			console.log('====================================');
			// console.log(res);
			console.log('====================================');
			setMiniClips(getStories().data.filter((clip) => clip.video_type === 'miniclip'));
			setYoutubeClips(getStories().data.filter((clip) => clip.video_type === 'Youtube'));
		// });
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
		backgroundColor: '#fff',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		marginTop: StatusBar.currentHeight
	}
});
