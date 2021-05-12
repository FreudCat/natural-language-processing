import "./styles/styles.css"; 
import {handleSubmit} from "./js/handleSubmit";  //notice this is imported from the handlesubmit.js -> there is a concurrent export message for the function

const btn = document.getElementById("check-btn"); 

btn.addEventListener("click", handleSubmit); 