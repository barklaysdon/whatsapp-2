import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyBmHsk5pcAcEX9SlUVAHBekUJDAVLeuNm8",
	authDomain: "whatsapp2-dab2e.firebaseapp.com",
	projectId: "whatsapp2-dab2e",
	storageBucket: "whatsapp2-dab2e.appspot.com",
	messagingSenderId: "634281639535",
	appId: "1:634281639535:web:51fc0e9b8d489ab350d79a",
	measurementId: "G-8J81M409JY",
};
// Initialize Firebase
const firebaseApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const AUTH = firebaseApp.auth();
const FIRESTORE = firebaseApp.firestore();
const PROVIDER = new firebase.auth.GoogleAuthProvider();

export { AUTH, FIRESTORE, PROVIDER };

// export default firebase;
