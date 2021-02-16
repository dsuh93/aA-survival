!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0);var n=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.addEventListener("keydown",(function(t){switch(t.keyCode){case 37:"right"===e.direction&&(e.direction="left"),e.moveLeft();break;case 38:e.jumping||(e.jumping=!0,e.jump());break;case 39:"left"===e.direction&&(e.direction="right"),e.moveRight()}})),document.addEventListener("keyup",(function(t){switch(t.keyCode){case 37:e.speed<0&&(e.stop(),e.fall());break;case 38:e.vertical<0&&e.fall();break;case 39:e.speed>0&&(e.stop(),e.fall())}}))};function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameWidth=e,this.gameHeight=i,this.width=100,this.height=100,this.direction="left",this.jumping=!1,this.maxSpeed=7,this.speed=0,this.vertical=0,this.constants={gravity:.7,jumpSpeed:-15},this.position={x:e/2-this.width/2,y:i-this.height}}var e,i,n;return e=t,(i=[{key:"jump",value:function(){this.jumping&&(this.vertical=this.constants.jumpSpeed)}},{key:"fall",value:function(){this.jumping&&(this.vertical+=this.constants.gravity)}},{key:"moveLeft",value:function(){this.speed=-this.maxSpeed}},{key:"moveRight",value:function(){this.speed=this.maxSpeed}},{key:"stop",value:function(){this.speed=0}},{key:"draw",value:function(t,e){var i;"left"===this.direction?i=e<15||e>=30&&e<45?document.getElementById("lt-sprite-standing-1"):document.getElementById("lt-sprite-standing-2"):"right"===this.direction&&(i=e<15||e>=30&&e<45?document.getElementById("rt-sprite-standing-1"):document.getElementById("rt-sprite-standing-2")),t.drawImage(i,this.position.x,this.position.y,100,100)}},{key:"update",value:function(t){t&&(this.position.x+=this.speed,this.position.y+=this.vertical,this.position.x+30<0&&(this.position.x=-30),this.position.x+75>this.gameWidth&&(this.position.x=this.gameWidth-75),this.position.y<this.gameHeight-this.height-10&&(this.vertical+=this.constants.gravity),this.position.y>this.gameHeight-this.height-10&&(this.position.y=this.gameHeight-this.height-10,this.jumping=!1))}}])&&a(e.prototype,i),n&&a(e,n),t}();function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=[{name:"github",src:"src/images/github.png"},{name:"kahoot",src:"src/images/kahoot.png"},{x:256,y:480,grab:32,name:"croissant"},{x:0,y:352,grab:32,name:"coffee"},{x:256,y:0,grab:32,name:"laptop"},{x:160,y:160,grab:32,name:"exam"},{x:416,y:0,grab:32,name:"error"},{x:224,y:224,grab:32,name:"tv"},{x:224,y:672,grab:32,name:"hacker"}],c={};var l=function(){function t(e,i,n,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=45,this.height=45,this.gameWidth=e,this.gameHeight=i,this.position={x:Math.floor(Math.random()*(this.gameWidth-this.width)),y:-Math.floor(Math.random()*this.gameHeight)},this.speed=0,this.fallingSpeed=2,this.status=1,this.randomItem=n,this.name=n.name}var e,i,n;return e=t,(i=[{key:"drawItems",value:function(t){var e=this.randomItem,i=e.x,n=e.y,a=e.grab,s=e.name,o=e.src;if(1==this.status)if(i||n){var r=new Image;r.src="src/images/items.png",t.drawImage(r,i,n,a,a,this.position.x,this.position.y,this.width,this.height)}else if("github"==s){var c=new Image;c.src=o,t.beginPath(),t.arc(this.position.x+this.width/2,this.position.y+this.height/2,20,0,2*Math.PI),t.fillStyle="white",t.strokeStyle="rgba(0, 0, 0, 0)",t.fill(),t.stroke(),t.drawImage(c,this.position.x,this.position.y,this.width,this.height)}else if("kahoot"==s){var l=new Image;l.src=o,t.drawImage(l,185,160,210,200,this.position.x,this.position.y,this.width,this.height)}}},{key:"update",value:function(){this.position.y+=this.fallingSpeed,this.position.y>this.gameHeight-this.height-10&&(this.status=0)}}])&&o(e.prototype,i),n&&o(e,n),t}();function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=e,this.height=i}var e,i,n;return e=t,(i=[{key:"draw",value:function(t,e){var i;switch(!0){case e<20:i=document.getElementById("bg-1");break;case e<40:i=document.getElementById("bg-2");break;case e<60:i=document.getElementById("bg-3");break;case e<80:i=document.getElementById("bg-4");break;case e<100:i=document.getElementById("bg-5");break;case e<120:i=document.getElementById("bg-6");break;case e<=140:i=document.getElementById("bg-7")}t.drawImage(i,0,0,this.width,this.height)}},{key:"update",value:function(t){}}])&&h(e.prototype,i),n&&h(e,n),t}();function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.score=0}var e,i,n;return e=t,(i=[{key:"drawScore",value:function(t){t.font="20px Arial",t.fillStyle="white",t.fillText("Score: ".concat(this.score),20,30)}},{key:"scoreCount",value:function(t){switch(t.name){case"github":case"kahoot":case"croissant":case"coffee":this.score+=5;break;case"laptop":case"exam":this.score+=10;break;case"error":case"tv":this.score-=5;break;case"hacker":this.score-=10}}}])&&d(e.prototype,i),n&&d(e,n),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas").getContext("2d"),e=new Audio("./src/sound/mixkit-rnb-224.mp3"),i=new s(800,600),a=new u(800,600),o=new f,h=1,d=3,m=5,g=0,p=0,y=0,v=!1,b=!0,w=!1;new n(i);var k=document.getElementById("body"),x=document.getElementById("title"),E=document.getElementById("controls-button"),I=document.getElementById("controls-instructions"),S=!1,j=document.getElementById("play"),L=document.getElementById("pause");function B(t){"play"===t?(L.classList.remove("hidden"),j.classList.add("hidden")):(L.classList.add("hidden"),j.classList.remove("hidden"))}function T(t){"play"===t?(e.loop=!0,e.play()):"pause"===t&&e.pause()}function O(){b=!1,(v=!0)&&(k.classList.add("start"),x.classList.add("start"),M(g),requestAnimationFrame(M))}function M(e){if(v){var n=e-g;g=e,t.clearRect(0,0,800,600),a.update(n),i.update(n),a.draw(t,y),function(t,e,i,n,a){var s,o=r,h=o[Math.floor(Math.random()*o.length)];Object.keys(c).length<e&&(c[s=h.name]||(c[s]=new l(n,a,h,i))),Object.keys(c).forEach((function(e){0==c[e].status?delete c[e]:(c[e].update(),c[e].drawItems(t))}))}(t,m,h,800,600),o.drawScore(t),function(t){t.font="20px Arial",t.fillStyle="white",t.fillText("Level: ".concat(h),200,30)}(t),function(t){t.font="20px Arial",t.fillStyle="white",t.fillText("Lives: ".concat(d),300,30)}(t),i.draw(t,p),Object.keys(c).forEach((function(e){var n=c[e],a=n.position.x,s=n.position.y,r=n.width,l=n.height,u=i,f=u.position.x,g=u.position.y,p=u.width,y=u.height;if(1==n.status)for(var b=f+25;b<f+p-25;b++){for(var w=g+25;w<g+y-25;w++)if(b>a&&b<a+r&&w>s&&w<s+l){n.status=0,o.scoreCount(n),"exam"==n.name&&(h++,m+=1,n.fallingSpeed++),"hacker"==n.name&&0==--d&&(v=!1,t.clearRect(0,0,800,600),t.fillStyle="skyblue",t.fillRect(0,0,800,600),alert("GAME OVER!! Your score was: ".concat(o.score)),k.classList.remove("start"),k.classList.add("gameover"),x.classList.remove("start"),x.classList.add("gameover"),A(t));break}if(0==n.status)break}})),60==p?p=0:p++,140==y?y=0:y++,requestAnimationFrame(M)}}function A(t){!v&&b?(t.fillStyle="skyblue",t.fillRect(0,0,800,600),t.font="20px Arial",t.fillStyle="black",t.fillText("Welcome to aA Survival!!",100,100),t.fillText("Try and get the highest score by collecting these items: ",100,200),t.fillText("and avoiding these items: ",100,300),t.font="small-caps 20px Arial",t.fillStyle="black",t.fillText("Hit Enter to start!!",100,500),function(t){var e=r;e.slice(0,6).forEach((function(e,i){var n=e.x,a=e.y,s=e.grab,o=e.name,r=e.src,c=new Image;r?(c.src=r,c.onload=function(){"github"==o?t.drawImage(c,100+70*i,225,45,45):"kahoot"==o&&t.drawImage(c,185,160,210,200,100+70*i,225,45,45)}):(c.src="./src/images/items.png",c.onload=function(){t.drawImage(c,n,a,s,s,100+70*i,225,45,45)})})),e.slice(6).forEach((function(e,i){var n=e.x,a=e.y,s=e.grab,o=new Image;o.src="./src/images/items.png",o.onload=function(){t.drawImage(o,n,a,s,s,100+70*i,325,45,45)}}))}(t)):!v&&w?(t.fillStyle="rgba(0, 0, 0, 0.3",t.fillRect(0,0,800,600),t.fill(),t.font="small-caps 50px Arial",t.fillStyle="white",t.fillText("Paused",300,200)):0==d&&(t.fillStyle="black",t.fillRect(0,0,800,600),t.font="small-caps 50px Arial",t.fillStyle="white",t.fillText("Try again?",280,200),t.fillText("Hit Enter",290,400))}document.getElementById("music-button").addEventListener("click",(function(t){t.preventDefault(),S?(S=!1,T("pause"),B("pause")):(S=!0,T("play"),B("play"))})),E.addEventListener("mouseover",(function(t){t.preventDefault(),I.classList.remove("hidden")})),E.addEventListener("mouseout",(function(t){t.preventDefault(),I.classList.add("hidden")})),document.addEventListener("keydown",(function(e){switch(e.key){case"Enter":v||0!=d?v||O():document.location.reload(),S||(S=!0,T("play"));break;case" ":v?(v=!1,w=!0,A(t)):(w=!1,O()),S?(S=!1,T("pause")):(S=!0,T("play"))}})),A(t)}))}]);
//# sourceMappingURL=main.js.map