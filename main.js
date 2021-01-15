var name_array=[];
function submit(){
for( var i=1;i<=4;i++){
    var name= document.getElementById("name_of_the_student_"+i).value;
name_array.push(name);
}
console.log(name_array);

document.getElementById("display_name_with_commas").innerHTML=name_array;
var temp=name_array.join("*");
document.getElementById("display_name_without_commas").innerHTML=temp;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline";
}
function sorting(){
name_array.sort();
document.getElementById("display_name_with_commas").innerHTML=name_array;
var temp1=name_array.join("-");
document.getElementById("display_name_without_commats").innerHTML=temp1;
}