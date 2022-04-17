import axios from 'axios';

const baseUrl = 'https://able-server.herokuapp.com/';
// const baseUrl = 'http://192.168.0.106:8080/';

export const getStories = () => {
    return {
        data: [
            {
                id: 1,
                video_title: 'How to use React Native',
                video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                video_description: 'Learn how to use React Native',
                video_thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_1SCqjSARZHDKCiakDGsYDvl8TMWP8Os3g&usqp=CAU',
                video_type: 'miniclip',
            },
            {
                id: 2,
                video_title: 'How to use React Native',
                video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                video_description: 'Learn how to use React Native',
                video_thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHLSZwu_fr8_L9PzNm53cEP1cdscckS_7R6AsiqtrNrMfjoOwKzqR8lCyO1SOve7oTmU&usqp=CAU',
                video_type: 'miniclip',
            },
            {
                id: 3,
                video_title: 'How to use React Native',
                video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                video_description: 'Learn how to use React Native',
                video_thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fset%3Da.968601749998687%26type%3D3%26comment_tracking%3D%257B%2522tn%2522%253A%2522O%2522%257D&psig=AOvVaw0ulUKVbDP_v1PSmCI4na22&ust=1650005491261000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjH69b7kvcCFQAAAAAdAAAAABAd',
                video_type: 'miniclip',
            },
            {
                id: 4,
                video_title: 'How to use React Native',
                video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                video_description: 'Learn how to use React Native',
                video_thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fset%3Da.968601749998687%26type%3D3%26comment_tracking%3D%257B%2522tn%2522%253A%2522O%2522%257D&psig=AOvVaw0ulUKVbDP_v1PSmCI4na22&ust=1650005491261000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjH69b7kvcCFQAAAAAdAAAAABAj',
                video_type: 'Youtube',
            },
            {
                id: 5,
                video_title: 'How to use React Native',
                video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                video_description: 'Learn how to use React Native',
                video_thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_1SCqjSARZHDKCiakDGsYDvl8TMWP8Os3g&usqp=CAU',
                video_type: 'Youtube',
            }
            ,
            {
                id: 6,
                video_title: 'How to use React Native',
                video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                video_description: 'Learn how to use React Native',
                video_thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmobile.twitter.com%2Fhashtag%2Frajeshfernando%3Fsrc%3Dhash&psig=AOvVaw0ulUKVbDP_v1PSmCI4na22&ust=1650005491261000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjH69b7kvcCFQAAAAAdAAAAABAo',
                video_type: 'Youtube',
            }
        ]
    }
    // axios.get(`${baseUrl}admin/stories`)
};
