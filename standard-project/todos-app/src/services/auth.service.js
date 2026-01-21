import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth } from "./firebase"
import axios from "axios"

const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

const signup = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

const logout = () => signOut(auth)

export default { login, signup, logout }
