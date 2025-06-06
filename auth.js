document.getElementById("auth-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const messageEl = document.getElementById("auth-message");

  try {
    let userCredential = await auth.signInWithEmailAndPassword(email, password);
    messageEl.textContent = "Logged in!";
    logAction(email, "login", role);
    redirect(role);
  } catch {
    try {
      let userCredential = await auth.createUserWithEmailAndPassword(email, password);
      await db.collection("users").doc(userCredential.user.uid).set({ email, role });
      messageEl.textContent = "Registered and logged in!";
      logAction(email, "register", role);
      redirect(role);
    } catch (error) {
      messageEl.textContent = "Error: " + error.message;
    }
  }
});

function redirect(role) {
  if (role === "student") window.location.href = "student.html";
  else if (role === "teacher") window.location.href = "teacher.html";
  else if (role === "admin") window.location.href = "admin.html";
}