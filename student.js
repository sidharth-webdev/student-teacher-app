
document.getElementById("appointment-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const teacherId = document.getElementById("teacher-id").value;
   const time = document.getElementById("appointment-time").value;
   const message = document.getElementById("message").value;

   const user = auth.currentUser;
   await db.collection("appointments").add({
     student: user.email,
     teacherId,
    time,
     message,
    status: "pending"
   });

  logAction(user.email, "booked appointment", "student");
   alert("Appointment booked!");
 });
 function logout() {
   auth.signOut().then(() => window.location.href = "index.html");
 }