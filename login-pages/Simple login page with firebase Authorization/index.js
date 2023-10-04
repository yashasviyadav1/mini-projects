
    
  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyzLSl5G0mV6mYy9BIGROjwgoGOXLNMvM",
  authDomain: "testing-db-2.firebaseapp.com",
  projectId: "testing-db-2",
  storageBucket: "testing-db-2.appspot.com",
  messagingSenderId: "867040302683",
  appId: "1:867040302683:web:8aa1a32091ded9df6a117e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


// login function
function login(event){
  event.preventDefault();

  var msgDiv = document.getElementById("msg-display-div");
    msgDiv.innerHTML = `
    <img src="./assets/pictures/loading-icon.png" class="fa-spin " alt="" height="35px">
    
    `
  const email = document.getElementById("email-field").value;
  const password = document.getElementById("password-field").value;
  // console.log(email);
  // console.log(password);
  firebase.auth().signInWithEmailAndPassword(email, password)

  .then((userCredentials) => {
    
    // Signed in successfully
    const user = userCredentials.user;
    // console.log("User signed in:", user);
    if(user){
        window.location.href = "welcome.html";
    }
  })
  
  .catch((error) => {
    var msgDiv = document.getElementById("msg-display-div");
    msgDiv.innerHTML = `wrong credentials*`;
    // errorDiv.style.color = "red";

    // alert("wrong credentials");
  })

}


