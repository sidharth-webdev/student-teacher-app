
auth.onAuthStateChanged(user => {
   if (!user) return window.location.href = "index.html";

   db.collection("appointments")
     .where("teacherId", "==", user.email)
     .onSnapshot(snapshot => {
       const container = document.getElementById("appointments");
       container.innerHTML = "";
      snapshot.forEach(doc => {
        const appt = doc.data();
        container.innerHTML += `
        <div>
            <p>From: ${appt.student}</p>
            <p>Time: ${appt.time}</p>
            <p>Message: ${appt.message}</p>
             <p>Status: ${appt.status}</p>
                        </div>
       `;
      });
     });
 });
 function logout() {
   auth.signOut().then(() => window.location.href = "index.html");
 }