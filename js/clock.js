let myName = document.querySelector('#myName')
myName.innerHTML = prompt("Adınızı Giriniz: ")

function showTime() {         
  setTimeout(function() {   
    const d = new Date();
    const n = d.toLocaleTimeString();
    document.querySelector("#myClock").innerHTML = n; 
    showTime();             
  }, 1000)
}
showTime();