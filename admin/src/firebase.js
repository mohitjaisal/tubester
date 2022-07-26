import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBV-vVOyoGOM6yRyoqaGXN9vUz0saiQCkU",
    authDomain: "tubester-app.firebaseapp.com",
    projectId: "tubester-app",
    storageBucket: "tubester-app.appspot.com",
    messagingSenderId: "979400349198",
    appId: "1:979400349198:web:60e2a35bd77b90c52c8e5f",
    measurementId: "G-4F8NGTJDVZ"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
