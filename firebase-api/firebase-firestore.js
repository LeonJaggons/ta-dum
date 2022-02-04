import { app } from "./firebase-init";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

export const firebaseDB = getFirestore(app);
export const usersCollection = collection(firebaseDB, "tadum-users");

const getTaDumUsers = async () => {
	let users = [];
	const userDocs = await getDocs(usersCollection);
	userDocs.forEach((doc) => {
		users.push({ TDID: doc.id, ...doc.data() });
	});
	return users;
};

getTaDumUsers().then((res) => {
	console.log(res);
});
