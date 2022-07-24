
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlZdsx5yWYTk-fkEL3Ej5gelDrd-7OGeY",
    authDomain: "projectifran.firebaseapp.com",
    projectId: "projectifran",
    storageBucket: "projectifran.appspot.com",
    messagingSenderId: "954701773945",
    appId: "1:954701773945:web:0af6819ddbf6a6f024e8a8",
    measurementId: "G-S2T09WW0HE"
  });
  

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

let user = {};
let connexion = document.getElementById('connexion');

//Sign-in User

const signIn = () =>{

    (user.matricule = document.getElementById("matricule").value),
    (user.password = document.getElementById("password").value);

    let email = user.matricule + "@ifran.com";

auth
  .signInWithEmailAndPassword(email, user.password)
  .then((response) => {
    console.log(response.user)
    alert ("Connexion réussie !")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("ERROR")
  });
}
connexion.addEventListener("click", signIn);