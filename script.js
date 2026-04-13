let fontSize = 16;
let visible = true;

function changeHeading(){
let text = document.getElementById("inputtext").value;
document.getElementById("heading").innerText = text;
}

function changeBackground(){
document.body.style.backgroundColor =
"#" + Math.floor(Math.random()*16777215).toString(16);
}

function increaseFont(){
fontSize += 2;
document.getElementById("para").style.fontSize = fontSize + "px";
}

function toggleParagraph(){
let p = document.getElementById("paragraph");

if(visible){
p.style.display = "none";
visible = false;
}
else{
p.style.display = "block";
visible = true;
}
}

function resetPage(){
location.reload();
}