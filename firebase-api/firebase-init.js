import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB337gZNRJJDdV1FDqlyjUg9Ay8aVxfejI",
	authDomain: "tadum-6ef5f.firebaseapp.com",
	projectId: "tadum-6ef5f",
	storageBucket: "tadum-6ef5f.appspot.com",
	messagingSenderId: "995389943708",
	appId: "1:995389943708:web:16db2f53b4613a70962259",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
