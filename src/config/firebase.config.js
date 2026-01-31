import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBt-8v6k5FcThisIsAPlaceholderKey",
  authDomain: "flavors-a8df6.firebaseapp.com",
  projectId: "flavors-a8df6",
  storageBucket: "flavors-a8df6.appspot.com",
  messagingSenderId: "108515246938570091240",
  appId: "1:108515246938570091240:web:placeholder"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
