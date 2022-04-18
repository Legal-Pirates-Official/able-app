import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	Image
} from 'react-native';
import React from 'react';

const ClipsVideos = ({ navigation, clips }) => {
	return (
		<ScrollView style={styles.scrollView}>
			<View>
				<Text style={styles.headerText}>Stories</Text>
			</View>
			<View style={styles.storiesView}>
				<ScrollView
					// snapToInterval={width}
					decelerationRate='fast'
					horizontal
				>
					{clips.length ? (
						clips.map((clip) => {
							return (
								<TouchableOpacity
									activeOpacity={0.8}
									style={styles.cardStories}
									onPress={() => navigation.navigate('StoriesVideo', { clip })}
								>
									<Text style={styles.innerText}>{clip.title}</Text>
									<Image
										source={{
											uri: clip.video_thumbnail
										}}
										style={styles.storyThumbnail}
									/>
								</TouchableOpacity>
							);
						})
					) : (
						<Text style={{ color: 'white', textAlign: 'center' }}>
							No videos found
						</Text>
					)}
				</ScrollView>
			</View>
		</ScrollView>
	);
};

export default ClipsVideos;

const styles = StyleSheet.create({
	scrollView: {
		position: 'relative'
	},
	headerText: {
		position: 'relative',
		color: '#000',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 20
	},
	storiesView: {
		position: 'relative',
		width: Dimensions.get('window').width,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10
	},
	cardStories: {
		position: 'relative',
		width: Dimensions.get('window').width / 1.05,
		height: Dimensions.get('window').height / 3,
		borderRadius: 30,
		backgroundColor: '#1e1e1e',
		marginBottom: 10,
		marginHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'flex-end',
		shadowColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 12
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 24,
		zIndex: 1
	},
	storyThumbnail: {
		position: 'absolute',
		width: Dimensions.get('window').width / 1.05,
		height: Dimensions.get('window').height / 3,
		borderRadius: 30,
		backgroundColor: '#1e1e1e',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 12
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 24,
		zIndex: 2
	},
	innerText: {
		width: '100%',
		position: 'absolute',
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 10,
		elevation: 27,
		zIndex: 10,
		paddingVertical: 10,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30
	}
});
