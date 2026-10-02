// FIELDMARK — authentication helpers (built on Firebase Auth + Firestore)

function signUp(name, email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
      return db.collection("users").doc(cred.user.uid).set({
        name: name,
        email: email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => cred.user.updateProfile({ displayName: name }));
    });
}

function logIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

function logOut() {
  return auth.signOut();
}

function currentUser() {
  return auth.currentUser;
}

function requireAuth(redirectTo) {
  return new Promise((resolve) => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        const next = encodeURIComponent(location.pathname.split("/").pop() + location.search);
        location.href = (redirectTo || "login.html") + "?redirect=" + next;
      } else {
        resolve(user);
      }
    });
  });
}

// Keeps the header's login/account link in sync with auth state, on every page.
function initAuthHeader() {
  const slot = document.getElementById("auth-slot");
  if (!slot) return;
  auth.onAuthStateChanged(user => {
    if (user) {
      const first = (user.displayName || user.email || "Account").split(" ")[0];
      slot.textContent = "Hi, " + first;
      slot.href = "account.html";
    } else {
      slot.textContent = "Login";
      slot.href = "login.html";
    }
  });
}

document.addEventListener("DOMContentLoaded", initAuthHeader);
