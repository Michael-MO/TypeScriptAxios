// Magic Line to Import Axios.. :S
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

// References to all the HTML elements needed.
let inputId: HTMLInputElement = <HTMLInputElement> document.getElementById("inputId");
let btnLookUp: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonLookUp");
let result: HTMLDivElement = <HTMLDivElement> document.getElementById("result");

// Variable to store the general URL used.
var baseURL: string = "https://jsonplaceholder.typicode.com";

// Function, that looks up the JSON objects based on the input by the user.
function lookUp(event: MouseEvent) {
  axios.get(baseURL + '/users/' + inputId.value)
  .then(function (response) {
    result.innerHTML = "<p>" + JSON.stringify(response.data.name) + "</p>";
    result.innerHTML += "<p>" + JSON.stringify(response.data.username) + "</p>";
    result.innerHTML += "<p>" + JSON.stringify(response.data.email) + "</p>";
  })
  .catch(function (error) {
    result.innerHTML = error;
  });
} 

// Attach the above function to the button.
btnLookUp.addEventListener("click", lookUp);