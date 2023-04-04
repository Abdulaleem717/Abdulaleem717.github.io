var index =0;
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node); 
alert("I am an alert box!");
function changeColors(){
    //alert("I am an alert box!");
    //var colors = ["red","blue","yellow","purple"];

    var myText = document.getElementsById("mytext");
    myText.style.cssText = 'color:blue;background-color:yellow';

    // if(index > colors.length -1)
    // index=0;
}