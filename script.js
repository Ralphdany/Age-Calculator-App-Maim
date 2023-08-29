const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const fullDate = new Date();
let currYear = fullDate.getFullYear();
let currMonth = fullDate.getMonth() + 1;
let currDay = fullDate.getDate();
const inputs = document.getElementsByTagName('input');
const labels = document.getElementsByTagName('label');
const error_msg = document.getElementsByTagName('small');

const months = [31,28,31,30,31,30,31,31,30,31,30,31];
 
function handleSubmit(){
    
   
    
   if(Number(day.value) > currDay){
      currDay += months[currMonth - 1];
      currMonth -= 1;
      console.log(months[currMonth - 1]);
   }
    if ( month.value > currMonth){
    currMonth += 12;
    currYear -= 1; 
    console.log(currMonth, currYear);
   }
   const dayOpt = currDay - day.value;
   const monthOpt = currMonth - month.value;
   const yearOpt = currYear - year.value;

   if (validateDay() && validateMonth() && validateYear()){
    document.getElementById('year-output').innerText = `${yearOpt}`;
    document.getElementById('month-output').innerText = `${monthOpt}`;
    document.getElementById('day-output').innerHTML = `${dayOpt}`;

   
   }
   
else{
    validateDay();
    validateMonth();
    validateYear();
}

}

 
function validateYear(){
    let validate ;
    if (!year.value){
        year.style.border = '1px solid hsl(0, 100%, 67%)';
        labels[2].style.color = 'hsl(0, 100%, 67%)';
        error_msg[2].innerText = 'This field is required';
        error_msg[2].style.color = 'hsl(0, 100%, 67%)';
        validate = false;
       }
       else if (year.value > currYear ){
        year.style.border = '1px solid hsl(0, 100%, 67%)';
        labels[2].style.color = 'hsl(0, 100%, 67%)';
        error_msg[2].innerText = 'Must be in the past';
        error_msg[2].style.color = 'hsl(0, 100%, 67%)';
        validate = false
       }
       else{
        year.style.border = '1px solid hsl(0, 0%, 86%)';
        labels[2].style.color = 'black';
        error_msg[2].innerText = '';
        error_msg[2].style.color = 'hsl(0, 100%, 67%)';
        validate = true;
       }
       return validate;
}
function validateMonth () {
    let validate;
    if (!month.value){
        month.style.border = '1px solid hsl(0, 100%, 67%)';
        labels[1].style.color = 'hsl(0, 100%, 67%)';
        error_msg[1].innerText = 'This field is required';
        error_msg[1].style.color = 'hsl(0, 100%, 67%)';
        validate = false;
       }
       else if (month.value > 12 ){
        month.style.border = '1px solid hsl(0, 100%, 67%)';
        labels[1].style.color = 'hsl(0, 100%, 67%)';
        error_msg[1].innerText = 'Must be a valid month';
        error_msg[1].style.color = 'hsl(0, 100%, 67%)';
        validate = false;
       }
    
       else{
        month.style.border = '1px solid hsl(0, 0%, 86%)';
        labels[1].style.color = 'black';
        error_msg[1].innerText = '';
        error_msg[1].style.color = 'hsl(0, 100%, 67%)';
        validate = true;
       }
       return validate;
}
function validateDay (){
    let validate;
    if (!day.value){
        day.style.border = '1px solid hsl(0, 100%, 67%)';
        labels[0].style.color = 'hsl(0, 100%, 67%)';
        error_msg[0].innerText = 'This field is required';
        error_msg[0].style.color = 'hsl(0, 100%, 67%)';
        validate = false;
       }
       else if (day.value > 31){
        day.style.border = '1px solid hsl(0, 100%, 67%)';
        labels[0].style.color = 'hsl(0, 100%, 67%)';
        error_msg[0].innerText = 'Must be a valid day';
        error_msg[0].style.color = 'hsl(0, 100%, 67%)';
        validate = false;
       }
       else if ((month.value == 2 && day.value) > 28 || (month.value == 4 && day.value > 30) || (month.value == 6 && day.value > 30) || (month.value == 9 && day.value > 30) || (month.value == 11 && day.value > 30)){
        day.style.border = '1px solid hsl(0, 100%, 67%)';
        labels[0].style.color = 'hsl(0, 100%, 67%)';
        error_msg[0].innerText = 'Must be a valid date';
        error_msg[0].style.color = 'hsl(0, 100%, 67%)';
        validate = false;
       }
       else{
        day.style.border = '1px solid hsl(0, 0%, 86%)';
        labels[0].style.color = 'black';
        error_msg[0].innerText = '';
        error_msg[0].style.color = 'hsl(0, 100%, 67%)';
        validate = true;
       }
       return validate;
}


