import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput,
	Image,
	ScrollView,
	StatusBar,
	Dimensions,
	Modal,
	Button
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { updateOrInsertStories } from '../../axios/stories.axios';

const StoryDetails = ({ isModalOpen, setIsModalOpen, updateDetails }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [photo, setPhoto] = useState('');
	const [stories, setStories] = useState([]);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
			base64: true
		});

		if (!result.cancelled) {
			setSelectedImage({ localUri: result.uri });
			let base64Img = `data:image/jpg;base64,${result.base64}`;
			let data = {
				file: base64Img,
				upload_preset: 'xnjpoohq'
			};
			fetch('https://api.cloudinary.com/v1_1/dn3s6sgki/upload', {
				body: JSON.stringify(data),
				headers: {
					'content-type': 'application/json'
				},
				method: 'POST'
			})
				.then(async (r) => {
					let data = await r.json();
					// await uploadPhoto(data.secure_url);
					setPhoto(data.secure_url);
				})
				.catch((err) => console.log(err));
		}
	};

	const storiesInsertSchema = Yup.object().shape({
		title: Yup.string().required(),
		description: Yup.string().required(),
		video_url: Yup.string().required()
	});

	const storiesUpdateSchema = Yup.object().shape({
		title: Yup.string(),
		description: Yup.string(),
		video_url: Yup.string()
	});

	return (
		<Modal
			visible={isModalOpen}
			animationType='slide'
			onRequestClose={() => setIsModalOpen(false)}
		>
			<Formik
				initialValues={{
					title: '',
					description: '',
					video_url: ''
				}}
				onSubmit={(values, actions) => {
					console.log(values);
					updateOrInsertStories(
						values,
						updateDetails ? updateDetails.id : null,
						photo.length > 0 ? photo : null
					).then((res) => {
						setIsModalOpen(false);
						actions.resetForm();
						setPhoto('');
						setSelectedImage(null);
						updateDetails(null);
					});
				}}
				validationSchema={
					updateDetails ? storiesUpdateSchema : storiesInsertSchema
				}
			>
				{({
					handleChange,
					handleSubmit,
					handleBlur,
					values,
					errors,
					touched
				}) => (
					<ScrollView style={styles.scrollView}>
						<View style={styles.container}>
							<Text style={styles.textHeading}>Insert Stories</Text>
							<View style={styles.inputView}>
								<Text style={styles.inputlabel}>Title</Text>
								<TextInput
									name='title'
									multiline={true}
									style={styles.inputTag}
									onBlur={handleBlur('title')}
									onChangeText={handleChange('title')}
									value={
										updateDetails ? updateDetails.video_title : values.title
									}
								/>
							</View>
							<View style={styles.inputView}>
								<Text style={styles.inputlabel}>Description</Text>
								<TextInput
									name='description'
									multiline={true}
									style={styles.textInput}
									onBlur={handleBlur('description')}
									onChangeText={handleChange('description')}
									value={
										updateDetails
											? updateDetails.video_description
											: values.description
									}
								/>
							</View>
							<View style={styles.inputView}>
								<Text style={styles.inputlabel}>Video Url</Text>
								<TextInput
									name='video_url'
									multiline={true}
									style={styles.textInput}
									onBlur={handleBlur('video_url')}
									onChangeText={handleChange('video_url')}
									value={
										updateDetails ? updateDetails.video_url : values.video_url
									}
								/>
							</View>
							<View style={styles.inputView}>
								<TouchableOpacity style={styles.button} onPress={pickImage}>
									<Text style={[styles.buttonTextPicture]}>Select Image</Text>
								</TouchableOpacity>
								{selectedImage && (
									<Image
										source={{
											uri: updateDetails
												? updateDetails.video_thumbnail
												: selectedImage.localUri
										}}
										style={styles.thumbnail}
									/>
								)}
							</View>
							<Button
								style={styles.buttonText}
								onPress={() => handleSubmit()}
								title='Submit'
							/>
						</View>
					</ScrollView>
				)}
			</Formik>
		</Modal>
	);
};

export default StoryDetails;

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: StatusBar.currentHeight
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	textHeading: {
		fontSize: 30,
		fontWeight: 'bold',
		marginTop: 20,
		textAlign: 'center',
		color: '#000'
	},
	textInput: {
		height: 100,
		width: Dimensions.get('window').width / 1.2,
		borderColor: 'gray',
		borderWidth: 1,
		textAlignVertical: 'top',
		padding: 8
	},
	inputTag: {
		height: 50,
		width: Dimensions.get('window').width / 1.2,
		borderColor: 'gray',
		borderWidth: 1,
		textAlign: 'center'
	},
	inputlabel: {
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 15
	},
	inputView: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		margin: 10,
		alignItems: 'center'
	},
	buttonTextPicture: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#000',
		margin: 10,
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		borderRadius: 10
	},
	buttonText: {
		backgroundColor: '#00b5ec',
		position: 'relative',
		padding: 10,
		width: Dimensions.get('window').width / 2,
		margin: 10,
		// paddingBottom: 20,
		left: '50%',
		transform: [{ translateX: -100 }],
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		borderRadius: 10
	},
	thumbnail: {
		width: 300,
		height: 300,
		resizeMode: 'contain'
	}
});
