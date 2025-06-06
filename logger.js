function logAction(user,action,role){
  const timestamp = new Date().toISOString();
  db.collection("logs").add({user,action,role,timestamp});
}