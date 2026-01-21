import { db } from "./firebase"
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"
import axios from "axios"

const userTodos = uid => collection(db, "users", uid, "todos")

const getTodos = async uid => {
  const snapshot = await getDocs(userTodos(uid))
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

const createTodo = (uid, title) =>
  addDoc(userTodos(uid), { title, completed: false })

const updateTodo = (uid, id, data) =>
  updateDoc(doc(db, "users", uid, "todos", id), data)

const deleteTodo = (uid, id) =>
  deleteDoc(doc(db, "users", uid, "todos", id))

export default { getTodos, createTodo, updateTodo, deleteTodo }
