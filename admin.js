
document.getElementById("add-teacher-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value ;
  const department = document.getElementById("department").value ;
  const subject = document.getElementById("subject").value ;

await db.collection("teachers").add({name, department, subject});
logAction("admin","added teacher","admin");
alert("Teacher added!")
});

function logout(){
  auth.signOut().then(() => window.location.href = "index.html");
}