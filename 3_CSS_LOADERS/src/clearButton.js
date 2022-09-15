const element=document.createElement("button");
element.innerHTML="Clear" 
//Add css to clear button

element.classList.add(["buttons"]) //buttons is the className

//Need to append button using appendChild. Else Clear button won't display in webpage
document.body.appendChild(element);

//attach click event to Clear button.
element.onclick=function(){
    alert('Clear button clicked');
}

//After this, don't forgrt to import this file in index.js

