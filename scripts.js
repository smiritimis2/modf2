let first=document.getElementById("first");
let second=document.getElementById("second");
let score=document.getElementById("score");
let third=document.getElementById("third");
let fourth=document.getElementById("fourth");
let dice=document.getElementById("dice");
let token=document.getElementById("token");
let msg=document.getElementById("msg");
var order=0;

let area=document.getElementById("main");
let info=document.getElementById("show");
let names=document.getElementById("name");
let emails=document.getElementById("email");
let users=document.getElementById("username");
let btn=document.getElementById("submit");
var arr=[{
     id:0,
    name:"ram",
    email:"mishrasmiriti2@gmail.com",
    user:"make"
}]
var reg=0;
function add()
{
    let name=names.value;
    let email=emails.value;
    let user=users.value;


    if(name!="" && email!=""&& user!="" && email.includes("@")==true)
    {

 let len=arr.length;
 
var brr={
    id:len,
    name:name,
    email:email,
    user:user
}

arr.push(brr);}


if(name==""||email==""||user=="")
{

msg.innerText="please fill all fields";

}
else
{   if(email.includes("@")==true && email.length>=1){
    reg=1;
    msg.innerText="registered successfully";
names.value="";
emails.value="";
users.value="";}
else
{
    msg.innerText="Please include @";
}
}}
btn.addEventListener("click",add)
/*
var arr=[{id:1 ,name:"ram",email:"mishrasmiriti1@gmail.com",password:"Abhishek123#!"}];


let doc=document.getElementById("name");

let named=document.getElementById("nameentry");
let emails=document.getElementById("email");
let message=document.getElementById("msg");
let conpass=document.getElementById("confirm");
let pass=document.getElementById("password");
let conmsg=document.getElementById("con");

var sum=0;
var flag=false;
function Namecheck(data) {
    if(data.length<2)
    {
       // console.log("")
      doc.innerHTML=`Name should be of 2 characters`;
      doc.style.color="red";
      sum--;
    }
    else{
        doc.innerHTML="";
        sum++;
    }
}
 function Passcheck(data)
 {

    let names=named.value;
    let email=emails.value;
     var passClass=document.getElementsByClassName('password-check');
     const lowerCase=new RegExp('(?=.*[a-z])');
     const upperCase=new RegExp('(?=.*[A-Z])');
     const number=new RegExp('(?=.*[0-9])');
     const specialchar=new RegExp('(?=.*[!@#\$%\^&\*])');
     if(lowerCase.test(data))
     {
         passClass[0].style.color="green";
         flag=true;sum++;

     }
     else{
         passClass[0].style.color="red";
         flag=false;sum--;
     }

     if(upperCase.test(data))
     {
         passClass[1].style.color="green";
         flag=true;sum++;

     }
     else{
         passClass[1].style.color="red";
         flag=false;sum--;
     }

     if(number.test(data))
     {
         passClass[2].style.color="green";
         flag=true;sum++;

     }
     else{
         passClass[2].style.color="red";
         flag=false;sum--;
     }
 
     if(specialchar.test(data))
     {
         passClass[3].style.color="green";
         flag=true;sum++;

     }
     else{
         passClass[3].style.color="red";

        flag=false;sum--
     }
  if(named.value==data)
  {
    message.innerText="password cannot be same as name or email";
    message.style.color="red";
    flag=false;sum--;
  }
  if(email==data)
  {
    message.innerText="password cannot be same as name or email";
    message.style.color="red";
    flag=false;sum--;
  }
  else{
      message.innerText="";
      flag=true;sum++;
  }
   
 }
 function concheck(data)
 {
     if(pass.value!=dataf)
     {
         conmsg.innerHTML=` confirm password should be same as password `;
         conmsg.style.color="red";sum--;
     }
     else{
         conmsg.innerHTML="";flag=true;sum++;
     }
 }
 /*function add()
 {
     let len =arr.length;
     len++;
     let name=named.value;
     let email=emails.value;
     let password=pass.value;
     let brr={ id:len, name:name,email:email,password:password}
     arr.push(brr);
     named.value="";
     emails.value="";
     pass.value="";
     conpass.value="";
 }*/
// let btn=document.getElementById("add");
 //btn.addEventListener("click",add)
/*let lastmsg=document.getElementById("doneval");
let submitbtn=document.getElementById("submit");
 function validate()
 {






if(sum>=7)
{ sum=0;
 lastmsg.innerHTML=`All good to go`;
 lastmsg.style.color="green";;
 let len =arr.length;
     len++;
     let name=named.value;
     let email=emails.value;
     let password=pass.value;
     let brr={ id:len, name:name,email:email,password:password}
     arr.push(brr);
     named.value="";
     emails.value="";
     pass.value="";
     conpass.value="";
     //location.replace('/new.html');
 window.location.href = "new.html";

}
else{
    lastmsg.innerHTML=`not ready`;
}
 }
 
 /*function verify()
 {
     let email=document.getElementById("vemail");
     let pass=document.getElementById("vpass");
     let Email=email.value;
     let Pass=pass.value;
     arr.forEach((item)=>{
 if(item.email===Email && item.password===Pass)
{
let msg=document.createElement("div");
msg.innerText="matched";
msg.style.color="green"
     }
     else
     {
         let msg=document.getElementById("div");
         msg.innerText="NOT MATCHED";
        msg.style.color="red";
     }
    }
     )
 }
 let vbtn=document.getElementById("sign");
vbtn.addEventListener("click",verify);*/

 //submitbtn.addEventListener("click",validate);
 //module.exports={arr};























var countf=0;var pos=-1;
first.addEventListener("click",()=>{
   /// window.location.href="/form.html";
   countf++;
    order++;pos++;
     if(order>=1 && countf==1 && pos==0)
     {
         
      area.style.display="block";
    
    }
      pos--;

})
var counts=0; 
second.addEventListener("click",()=>{
    if(countf==1 && reg==1){
    order++;counts++;pos++;

     

    if(order>1 && counts==1 && pos==0){
    area.style.display="none";
    info.style.display="block";
    info.innerHTML="";
    arr.forEach((item)=>{
    if(item.id>0){
    
    
       
       let Item=document.createElement("tr");
       Item.innerHTML=`
      
       <td>Name ${item.name}</td>
       
       &nbsp 
       &nbsp  &nbsp 
       &nbsp  &nbsp  &nbsp 
       &nbsp  &nbsp  &nbsp 
       &nbsp  &nbsp  &nbsp  &nbsp 
       &nbsp  &nbsp  &nbsp  &nbsp 
       <td> Username  ${item.user}</td>
       `
       
      Item.style.display="block";
      Item.style.height="80px";
      Item.style.width="250px";
      Item.style.color="black";
      Item.style.borderStyle="solid";

      Item.style.margin="20px 10px";
      Item.style.borderRadius="5px";
        info.append(Item);

    }})

}
pos--;
}
}
)

var number=0; var countt=0;
third.addEventListener("click",()=>{
 pos++;

   /* score.style.display="block";
     
    score.innerHTML=" ";
    score.innerHTML=` ${sum} `;*/
  if(counts==1){
    order++;countt++;
    if(order>2 && countt==1 && pos==0)
    {
        score.style.display="block";
     
        score.innerHTML=" ";
        score.innerHTML=`Score: ${sum} `;

       
    area.style.display="none";
    info.style.display="none";
    dice.style.display="block";
    }
    pos--;}

})
var sum=0; var count=0;var attempt=0;
dice.addEventListener("click",()=>{
    count++; attempt++;

 //dice.style.display="block";
pos++;
 if(count<=3 && attempt<=6 && pos==0)
 {
 
// if(sum<=10)
//{
    sum=sum+ Math.floor(Math.random()*6)+1;
//}
    
   

}






  if(sum<=10 && count==3 && attempt==3 && pos==0)
  {
    alert("try again after scoring more than 10");
    
    
    sum=0;count=0;
    score.innerHTML=" ";
    score.innerHTML=`${sum}`;

    score.innerHTML="";
}




score.innerHTML=`${sum}`;
if(sum<=10 && attempt==6)
{
    alert("Bad Luck");sum=0;
}
score.innerHTML=" ";
score.innerHTML=`${sum}`;
console.log(sum);

pos--;
}
 
)
 var countl=0;
fourth.addEventListener("click",()=>{
   countl++;
    order++;pos++;
    if(order>=3 && countl==1 && pos==0)
    {
 if(count>=3 && sum>10)
 {
     /*let capital="ABCDEFGHIJKLMNOPQRST";
     let small="abcdefghijklmnopqrstuvwxyz";*/
     dice.style.display="none";
     area.style.display="none";
     info.style.display="none";
     token.style.display="block";


     let number="0123456789";
     //let special="!@#$%^&*()_+";
     let characters=number;
     let tokens="";
     for(let i=0;i<12;i++)
     {
         let random=Math.floor(Math.random()*characters.length);
         tokens=tokens+characters[random];
     }
     //console.log(token);


    
     
    
     let Item=document.createElement("tr");
       Item.innerHTML=`
      Congratulations
      &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp

      &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp
      
      
      &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp

    
      
           Token    
      
      
           &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp
                        <td>${tokens}</td>
                        &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp

                        &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp
                        
                        
                        &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp
                  
      


       
       
       `
      
      Item.style.display="block";
      Item.style.height="80px";
      Item.style.width="200px";
      Item.style.color="black";
      Item.style.borderStyle="solid";
      Item.style.textAlign="center"
      Item.style.margin="20px 10px";
      Item.style.borderRadius="5px";
        token.append(Item);

 }

pos--;
    }
})