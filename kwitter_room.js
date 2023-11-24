var firebaseConfig = {
  apiKey: "AIzaSyAlMRHPf6Ia3w4Ra8UC3_TmmTH3RjjZcUc",
  authDomain: "kwitter-b3da0.firebaseapp.com",
  databaseURL: "https://kwitter-b3da0-default-rtdb.firebaseio.com",
  projectId: "kwitter-b3da0",
  storageBucket: "kwitter-b3da0.appspot.com",
  messagingSenderId: "1070168032123",
  appId: "1:1070168032123:web:0ed8ab5493d99d4af7b3de",
  measurementId: "G-HKSBY5RWND"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding user"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

