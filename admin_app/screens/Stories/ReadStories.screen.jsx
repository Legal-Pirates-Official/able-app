import {
	View,
	Text,
	ScrollView,
	FlatList,
	StatusBar,
	StyleSheet,Image
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { getStories } from '../../axios/stories.axios';

const ReadStories = () => {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		getStories().then((res) => {
			setStories(res.data);
		});
	}, []);

	return (
		<ScrollView>
			<View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
				<FlatList
					data={stories}
					renderItem={({ item }) => (
						<View style={styles.storyCard}>
							<View>
								<Text>{item.video_title}</Text>
								<Text>{item.video_description}</Text>
								<Text>{item.video_type}</Text>
							</View>
						</View>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</ScrollView>
	);
};

export default ReadStories;

const styles = StyleSheet.create({
	storyCard: {
		padding: 10,
		margin: 10,
		borderRadius: 10,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	}
});
