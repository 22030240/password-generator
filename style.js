const passwordbox=document.getElementById("password");
const length=12;


const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="!@#$%^&*()[}}]|\><?+-*/"
const allchar=uppercase+lowercase+number+symbol;

function createpassword(){
    let pass="";
    pass+=uppercase[Math.floor(Math.random()*uppercase.length)];
    pass+=lowercase[Math.floor(Math.random()*lowercase.length)];
    pass+=number[Math.floor(Math.random()*number.length)];
    pass+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>pass.length){
pass+=allchar[Math.floor(Math.random()*allchar.length)];
    
}

passwordbox.value=pass;



}

function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
}