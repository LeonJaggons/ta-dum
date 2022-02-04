import { app } from "./firebase-init";
import {
	getAuth,
	getRedirectResult,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithRedirect,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

import {
	doc,
	getDocs,
	query,
	serverTimestamp,
	setDoc,
	Timestamp,
	where,
} from "firebase/firestore";
import { firebaseDB, usersCollection } from "./firebase-firestore";
export const createTDID = () => {
	let id = [];
	let idLength = 8;
	for (let i = 0; i < idLength; i++) {
		id.push(Math.floor(Math.random() * 10));
	}
	return "TDID-" + id.join("");
};
export const signInTaDumUser = async (email, password) => {
	let user;
	await signInWithEmailAndPassword(auth, email, password)
		.then((userCreds) => {
			user = userCreds.user;
		})
		.catch((error) => {
			console.log(error);
		});
	return user;
};

export const isTaDumUser = async (firebaseID) => {
	const userQry = query(
		usersCollection,
		where("firebaseID", "==", firebaseID)
	);
	let userDocs = await getDocs(userQry);
	if (!userDocs.empty) return true;
	return false;
};
export const signInWithGoogle = async () => {
	await signInWithRedirect(auth, googleProvider);
};
export const createTaDumUserFromGoogle = async (firebaseUser) => {
	let tdID = createTDID();
	let tdUser = {
		firebaseID: firebaseUser.uid,
		displayName: firebaseUser.displayName,
		email: firebaseUser.email,
		photoURL: firebaseUser.photoURL,
		username: "",
		birthDate: null,
		lastAccess: serverTimestamp(),
		createDate: serverTimestamp(),
		memberIDs: [tdID],
		active: true,
	};
	setDoc(doc(firebaseDB, "tadum-users", tdID), tdUser);
};
