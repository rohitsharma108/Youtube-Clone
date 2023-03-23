import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9GCBeTKZ9dfeiFMNBRoLIw8p1LNR97d8",
  authDomain: "clone-5158c.firebaseapp.com",
  projectId: "clone-5158c",
  storageBucket: "clone-5158c.appspot.com",
  messagingSenderId: "695624356864",
  appId: "1:695624356864:web:ac4507ea20e0b51f6334e5",
  measurementId: "G-V62VCC29X9",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U",
//   authDomain: "not-yt.firebaseapp.com",
//   projectId: "not-yt",
//   storageBucket: "not-yt.appspot.com",
//   messagingSenderId: "713650135776",
//   appId: "1:713650135776:web:3612f40b495bd9e6ef6685",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBRScUCqrkE2yITXTIs22n6NIs0xKD6UuU",
//   authDomain: "clone-2-e29f5.firebaseapp.com",
//   projectId: "clone-2-e29f5",
//   storageBucket: "clone-2-e29f5.appspot.com",
//   messagingSenderId: "510592399558",
//   appId: "1:510592399558:web:7bf240c4a46bcca926ffc7",
//   measurementId: "G-T3LZQSHSM1",
// };

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
