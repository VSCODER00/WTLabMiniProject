// Initialize Firebase app
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
getAuth, createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDq-g9VfRV1ZGL_KKXIBsC_oko0om81L9U",
  authDomain: "wtlabproject-3d3d9.firebaseapp.com",
  projectId: "wtlabproject-3d3d9",
  storageBucket: "wtlabproject-3d3d9.appspot.com",
  messagingSenderId: "949582513476",
  appId: "1:949582513476:web:31dc83ab5ba0cb90070311",
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const auth=getAuth(app);

// Function to handle sign up
document.getElementById("signupButton").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      alert("Account Created Successfully")
      window.location.href="home.html"
      console.log("Signed up successfully:", user);
      // Redirect or do something else upon successful signup
      // For example, you can redirect the user to another page:
      // window.location.href = 'some_page.html';
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign up error:", errorMessage);
      // Display error message to the user
      alert(errorMessage);
    });
});
