student_array=[];

function submit(){
var n1= document.getElementById("Name1").value ;
var n2= document.getElementById("Name2").value ;
var n3= document.getElementById("Name3").value ;
var n4= document.getElementById("Name4").value ;
  
student_array.push(n1) ;
student_array.push(n2) ;
student_array.push(n3) ;
student_array.push(n4) ;
console.log(student_array);

document.getElementById("displaynames").innerHTML=student_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){

    student_array.sort();
    console.log(student_array);
    document.getElementById("displaynames").innerHTML=student_array;
}