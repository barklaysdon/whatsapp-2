import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { AUTH, FIRESTORE } from "../db/firebase";
import Login from "./login";
import Loading from "../components/Loading";
import { useEffect } from "react";
import firebase from "firebase";

function MyApp({ Component, pageProps }) {
	const [user, loading] = useAuthState(AUTH);

	console.log(user)
	useEffect(() => {
		if (user) {
			FIRESTORE.collection("users").doc(user.uid).set(
				{
					email: user.email,
					lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
					photoURL: user.photoURL,
				},
				{ merge: true }
			);
		}

	}, [user]);

	if (loading) {
		<Loading />;
	}
	if (!user) return <Login />;

	return <Component {...pageProps} />;
}

export default MyApp;
