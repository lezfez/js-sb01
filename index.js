// Zuerst wird Start ausgegeben, 
// obwohl oO vorher im Script ist
let zahl = 5
setTimeout(()=>{
  output.innerHTML = 'oO'
},2000)

var output = document.getElementById('app');
output.innerHTML = `<h1>Start</h1>`;

//VERSUS ASYNC

