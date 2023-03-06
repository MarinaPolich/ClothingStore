import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  where,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import app from "../../firebase-config.js";
import { setIsLogin, setUser } from "./auth-slice.js";

const auth = getAuth(app);
const db = getFirestore(app);

export const registration = createAsyncThunk(
  "auth/registration",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userData = {
        userId: user.uid,
        email,
        name,
      };
      const createUser = await addDoc(collection(db, "users"), userData);

      return { ...userData, id: createUser.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const docSnap = await getDocs(
        query(collection(db, "users"), where("userId", "==", user.uid))
      );
      const userSnap = docSnap.docs.find((x) => x);
      return { ...userSnap.data(), id: userSnap.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginGoogle = createAsyncThunk(
  "auth/oginGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const { user } = await signInWithPopup(auth, provider);

      const docSnap = await getDocs(
        query(collection(db, "users"), where("userId", "==", user.uid))
      );
      const userSnap = docSnap.docs.find((x) => x);
      if (!userSnap) {
        const userData = {
          userId: user.uid,
          email: user.email,
          name: user.displayName,
        };
        const createUser = await addDoc(collection(db, "users"), userData);

        return { ...userData, id: createUser.id };
      }

      return { ...userSnap.data(), id: userSnap.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkLogin = createAsyncThunk(
  "auth/check",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await onAuthStateChanged(auth, async (user) => {
        if (user) {
          dispatch(
            setIsLogin({
              isLoggedIn: true,
            })
          );
          const docSnap = await getDocs(
            query(collection(db, "users"), where("userId", "==", user.uid))
          );
          const userSnap = docSnap.docs.find((x) => x);
          if (userSnap)
            dispatch(setUser({ ...userSnap.data(), id: userSnap.id }));
        }
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/update",
  async ({ id, ...user }, { rejectWithValue, getState }) => {
    try {
      const userRef = doc(db, "users", id);
      await updateDoc(userRef, user);
      const userSnap = await getDoc(userRef);
      return { id: userSnap.id, ...userSnap.data() };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
