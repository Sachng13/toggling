var circle=document.getElementById("circle");
var text=document.getElementById("text");
var box=document.getElementById("box");
var box2=document.getElementById("box2");
var count=1;
box.addEventListener("click",function(){
    if (count%2!=0){
        document.body.style.backgroundColor="black";
        text.style.color="white";
        box.style.display="none";
        box2.style.display="block";
    }else {
        document.body.style.backgroundColor="white";
        text.style.color="black";
        box2.style.display="none";
        box.style.display="block";
    }
count++;
});
box2.addEventListener("click",function(){
    if (count%2!=0){
        document.body.style.backgroundColor="black";
        text.style.color="white";
        box.style.display="none";
        box2.style.display="block";
    }else {
        document.body.style.backgroundColor="white";
        text.style.color="black";
        box2.style.display="none";
        box.style.display="block";
    }
count++;
});
