const bg =document.getElementById("b");
const mode = document.getElementById("mode");
const mailb = document.getElementById("btn2");

mode.addEventListener("click",function(){
bg.classList.toggle("light");
var iE=document.getElementById('ie');
if(iE.classList.contains('bxs-moon')){
    iE.classList.remove('bxs-moon');
    iE.classList.add('bxs-sun');
}else{
    iE.classList.remove('bxs-sun');
    iE.classList.add('bxs-moon');
}
});
mailb.addEventListener("click",function(){
    bg.classList.toggle("contactme");
    console.log('hello');
});