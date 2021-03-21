/*alert("click on any button and see what happens!")
//var x = document.getElementById("buttoning");
//if(document.getElementById("buttoning").onclick=document.write("you just clicked on one of the buttons didn't you? xD"));
var age=prompt("how old are you?");
var firstName=prompt("enter your first name");
var lastName=prompt("enter your last name");

function func()
{
    document.write("I saved your information. now i know everything. your full name is: " + " " + lastName + " and you are exactly" + r + "years old.");
    //document.write("your age is="+r);
  //  document.write("your full name is: "+" "+lastName+" and you are exactly"+r+"years old.");
    
}*/

alert("answer this question honestly please!");


var musicVar =prompt("which of these do you prefer most: 'rock, rap, pop, hip hop' ");
var repetition = prompt("how many times would you like the images to repeat?");
if(musicVar=="rock")
{
    document.write("you prefer rock");
    for(var i =1; i<=repetition; i++){
    document.write('<img src="https://i.pinimg.com/originals/41/e9/95/41e995b504612c384bc3f9e7eda9d29a.jpg"/>');
    }
}
else if(musicVar=="rap")
{
    document.write("you prefer rap");
    for(var i =1; i<=repetition; i++){
    document.write('<img src="https://cdn3.vectorstock.com/i/1000x1000/88/27/inscription-lettering-rap-music-stylized-in-vector-23118827.jpg"/>');
}}
else if(musicVar=="pop")
{
    document.write("you prefer pop");
    for(var i =1; i<=repetition; i++){
    document.write('<img src="https://pbs.twimg.com/profile_images/1155517544977108992/883LNqWD_400x400.jpg"/>');
}}
else if(musicVar=="hip hop")
{
    document.write('<center>"you prefer hip hop"</center');
    for(var i =1; i<=repetition; i++){
    document.write('<center> <img src="https://cdn5.vectorstock.com/i/1000x1000/44/49/hip-hop-music-party-in-graffiti-style-vector-23244449.jpg"/></center>');
}}
else alert("choose one of the types please!");

var coloring = confirm("would you like to change the background-color? press ok to submit, press cancel to cancel");
var userColor="";
if(coloring==true)
{
    userColor = prompt("do you want the background-color to be black, red or blue?");
    if(userColor=="black")
   { document.body.style.backgroundColor = "black"; }
    else if(userColor=="red")
    { document.body.style.backgroundColor = "red"; }
    else if(userColor=="blue")
    { document.body.style.backgroundColor = "blue"; }
}
else alert("page will be displayed in it's original colors!");