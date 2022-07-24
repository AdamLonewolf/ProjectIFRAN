
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
let submit = document.getElementById("submit");


const addUser = () => {
    (user.name = document.getElementById("name").value),
    (user.firstName = document.getElementById("first-name").value),
    (user.email = document.getElementById("email").value),
    (user.contact = document.getElementById("contact").value),
    (user.matricule = document.getElementById("matricule").value),
    (user.password = document.getElementById("password").value),
    (user.location = document.getElementById("location").value),
    (user.country = document.getElementById("nationality").value),
    (user.course = document.getElementById("course").value),
    (user.currentYear = document.getElementById("currentYear").value),
    (user.registration = document.getElementById("register").value),
    (user.graduateYear = document.getElementById("graduateYear").value),
    (user.job = document.getElementById("job").value),
    (user.company = document.getElementById("company").value);

    let email = user.matricule + "@ifran.com";

    auth
      .createUserWithEmailAndPassword(email, user.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
      })
      .then(() => {
    db.collection("users")
    .add({
      name: document.getElementById("name").value,
      firstName: document.getElementById("first-name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      matricule: document.getElementById("matricule").value,
      password: document.getElementById("password").value,
      location: document.getElementById("location").value,
      country: document.getElementById("nationality").value,
      course: document.getElementById("course").value,
      currentYear: document.getElementById("currentYear").value,
      registration: document.getElementById("register").value,
      graduateYear: document.getElementById("graduateYear").value,
      job: document.getElementById("job").value,
      company: document.getElementById("company").value,
    })
    .then(() => {
      alert("inscription reussie !");
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.code);
      console.log(err.message);
    });
  });
  
};

submit.addEventListener("click", addUser);

