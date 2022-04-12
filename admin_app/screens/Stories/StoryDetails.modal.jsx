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
	Modal
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
		image: Yup.string().required(),
		video_url: Yup.string().required()
	});

	const storiesUpdateSchema = Yup.object().shape({
		title: Yup.string(),
		description: Yup.string(),
		image: Yup.string(),
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
					image: '',
					video_url: ''
				}}
				onSubmit={(values, actions) => {
					updateOrInsertStories(
						values,
						updateDetails ? updateDetails.id : null,
						photo.length > 0 ? photo : null
					);
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
									style={styles.textInput}
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
								<TouchableOpacity style={styles.imageInput} onPress={pickImage}>
									<Text style={[styles.imageInputText]}>Select Image</Text>
								</TouchableOpacity>
								{selectedImage && (
									<Image
										source={{
											uri: updateDetails
												? updateDetails.video_thumbnail
												: selectedImage.localUri
										}}
										style={{ width: 200, height: 200 }}
									/>
								)}
							</View>
							<TouchableOpacity onPress={handleSubmit} style={styles.button}>
								<Text style={styles.buttonText}>Submit</Text>
							</TouchableOpacity>
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
		marginTop: StatusBar.currentHeight
	},
	container: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textHeading: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
		color: 'black'
	},
	inputView: {
		width: Dimensions.get('window').width - 40,
		height: Dimensions.get('window').height / 8,
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputlabel: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
		color: 'black'
	},
	textInput: {
		width: Dimensions.get('window').width - 40,
		height: Dimensions.get('window').height / 16,
		marginBottom: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	},
	imageInput: {
		width: Dimensions.get('window').width - 40,
		height: Dimensions.get('window').height / 8,
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		color: 'black'
	},
	button: {
		width: Dimensions.get('window').width - 40,
		height: Dimensions.get('window').height / 16,
		marginBottom: 20,
		backgroundColor: '#00b5ec',
		color: 'white',
		borderColor: '#ccc',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	},
	imageInputText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		borderWidth: 1,
		borderColor: '#000',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 5
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		resizeMode: 'contain'
	},
	image: {
		position: 'relative',
		width: 300,
		height: 300,
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
