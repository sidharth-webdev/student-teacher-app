const firebaseConfig = {
  apiKey:  "AIzaSyAIjyn4B99aSDkqyeuNVCv7RomYpDvviv8",
  authDomain: "student-teacher-app-ed593.firebaseapp.com",
  projectId: "student-teacher-app-ed593",
  storageBucket: "student-teacher-app-ed593.firebasestorage.app",
  messagingSenderId: "561168617789",
  appId: "G-B804ZY8NCJ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();