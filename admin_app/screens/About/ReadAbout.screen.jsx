import {
	View,
	Text,
	ScrollView,
	FlatList,
	StatusBar,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { getAbout, deleteAbout } from '../../axios/about';
import AboutDetails from './AboutDetails.modal';

const ReadAbout = ({ navigation }) => {
	const [about, setAbout] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [updateDetails, setUpdateDetails] = useState(null);

	const fetchAbout = () => getAbout().then((res) => setAbout(res.data));

	useEffect(() => {
		fetchAbout();
	}, [about]);

	return (
		<View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
			{about.length ? (
				<ScrollView>
					<View style={{ flex: 1 }}>
						<FlatList
							data={about}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => {
										setUpdateDetails(item);
										setIsModalOpen(true);
									}}
									style={styles.storyCard}
								>
									<Image
										source={{ uri: item.card_image }}
										style={{
											width: Dimensions.get('window').width,
											height: Dimensions.get('window').width
										}}
									/>
									<Text>{item.card_title}</Text>
									<Text>{item.about_description}</Text>
									<Text>{item.card_description}</Text>
									<TouchableOpacity
										onPress={() => {
											deleteAbout(item.id);
											fetchAbout();
										}}
										style={{
											position: 'relative',
											bottom: 10,
											marginTop: 10,
											width: 28,
											height: 28
										}}
									>
										<MaterialIcons name='delete' size={28} color='black' />
									</TouchableOpacity>
								</TouchableOpacity>
							)}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</ScrollView>
			) : (
				<View
					style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
				>
					<Text>No data found.</Text>
				</View>
			)}
			<TouchableOpacity
				onPress={() => {
					setUpdateDetails(null);
					setIsModalOpen(true);
				}}
				style={{ position: 'absolute', bottom: 80, right: 30, elevation: 5 }}
			>
				<AntDesign name='pluscircle' size={50} color='#00b5ec' />
			</TouchableOpacity>
			<AboutDetails
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				updateDetails={updateDetails}
				setUpdateDetails={setUpdateDetails}
				setAbout={setAbout}
			/>
		</View>
	);
};

export default ReadAbout;

const styles = StyleSheet.create({
	aboutCard: {
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
		elevation: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});
