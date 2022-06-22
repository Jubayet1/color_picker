import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBuj9SS_0c1KGn1j3PbpMSCvuLADQak-rI",
  authDomain: "color-generator-bd707.firebaseapp.com",
  projectId: "color-generator-bd707",
  storageBucket: "color-generator-bd707.appspot.com",
  messagingSenderId: "516779549913",
  appId: "1:516779549913:web:670f22f12d3424331ecac8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
