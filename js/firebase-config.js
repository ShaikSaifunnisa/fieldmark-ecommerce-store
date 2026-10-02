// FIELDMARK — Firebase configuration
//
// This site uses Firebase for REAL login and order storage (free tier).
// Right now this is a placeholder — the site will not work until you:
//
//   1. Go to https://console.firebase.google.com and create a free project
//   2. In your project: Build > Authentication > Get Started > enable "Email/Password"
//   3. In your project: Build > Firestore Database > Create database > start in TEST MODE
//   4. In your project: Project settings (gear icon) > scroll to "Your apps" > click the
//      web icon (</>) > register an app (any nickname) > copy the firebaseConfig object
//   5. Paste your copied config below, replacing the placeholder values
//
// Full walkthrough with screenshots-level detail is in README.md.

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
