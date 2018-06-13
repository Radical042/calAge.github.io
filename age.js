const btn = document.querySelector('#btn');
const inputName = document.querySelector('#name');
const inputDate = document.querySelector('#date');


loadEventListeners(); //loaxd all event

function loadEventListeners() {
  btn.addEventListener('click', checkUser);
}
 
 function checkUser(e) {
       const name = inputName.value;
      const date = inputDate.value;
      const diff = Date.now() - Date.parse(date) ;
      const ageDate = new Date(diff);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      
    
        if(name === "" ){
          alert(`Please add your name and your date of birth in the order stipulated below`);
        }
     else if (age >= 15 ){ 
       alert(`Hello ${name}! Your current age is: ${age}yrs and you are eligible to watch horror movies.`);
      }else{
          alert(`Hello ${name}! Your current age is: ${age}yrs. Your interest should be your studies not watching horror movies`);
      }
    inputName.value = "";
    inputDate.value = "";
   e.preventDefault();
 } 
   
  



