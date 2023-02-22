"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(n,e,r)=>{r.d(e,{Z:()=>m});var t=r(81),i=r.n(t),o=r(645),a=r.n(o),s=r(667),c=r.n(s),l=new URL(r(756),r.b),d=a()(i());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700&display=swap);"]);var p=c()(l);d.push([n.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Barlow Semi Condensed', sans-serif;\r\n  font-family: 'Lato', sans-serif;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-family: 'Sora', sans-serif;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n  height: auto;\r\n  box-shadow: -12px 5px 5px 4px;\r\n  border-radius: 3px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.nav-img {\r\n  background: url("+p+");\r\n  background-repeat: no-repeat;\r\n  background-size: 150px;\r\n  width: 200px;\r\n  height: 150px;\r\n  background-position: center;\r\n}\r\n\r\n.search-input {\r\n  width: 70%;\r\n  height: 35px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.btn-srch {\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-m .nav-items li a {\r\n  margin-left: 25px;\r\n  text-decoration: none;\r\n  color: #000;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  display: block;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  position: fixed;\r\n  bottom: 0;\r\n  color: #000;\r\n  background-color: #ababc4;\r\n  z-index: 2;\r\n}\r\n\r\n.main-js-page {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 30px;\r\n  padding: 72px;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  box-shadow: 14px 4px 24px -1px;\r\n}\r\n\r\n.card-image {\r\n  border: 2px solid #2c2c2c;\r\n  width: 100%;\r\n  height: 400px;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.movie-img {\r\n  width: inherit;\r\n  border: 4px solid;\r\n}\r\n\r\n.content:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.movie-descrption {\r\n  width: inherit;\r\n  background: #1f1f1f;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 2px;\r\n  gap: 5px;\r\n}\r\n\r\n.movie-ratings {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 5px;\r\n  width: inherit;\r\n  justify-content: flex-end;\r\n  padding: 5px;\r\n}\r\n\r\n.statistics {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: inherit;\r\n}\r\n\r\n.like-btn {\r\n  color: white;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  margin-left: 2px;\r\n  justify-self: flex-start;\r\n}\r\n\r\n.rateCounts {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.movie-title {\r\n  color: darkcyan;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n}\r\n\r\n.movie-comment {\r\n  width: 100%;\r\n  height: 40px;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 2px;\r\n  background-color: cornflowerblue;\r\n  justify-self: flex-end;\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.popup {\r\n  display: none;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 100;\r\n  background: #000;\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentName {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  font-weight: normal;\r\n}\r\n\r\n.show {\r\n  display: flex;\r\n  padding: 2rem;\r\n}\r\n\r\n#close_popup {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  cursor: pointer;\r\n  font-size: 30px;\r\n  border: none;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n  background: transparent;\r\n  color: white;\r\n}\r\n\r\n.card {\r\n  border-radius: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #161b22;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: scroll;\r\n  gap: 10px;\r\n  padding: 24px;\r\n  max-width: 1156px;\r\n  margin: 25px 15px;\r\n  position: relative;\r\n  color: #fff;\r\n}\r\n\r\n.commImg {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 15px;\r\n  width: 400px;\r\n  margin-left: 24rem;\r\n}\r\n\r\n.spec {\r\n  display: flex;\r\n  list-style: none;\r\n  justify-content: space-between;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-bottom: 25px;\r\n  max-width: 600px;\r\n}\r\n\r\n.commentFormSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  outline: none;\r\n  padding: 10px;\r\n}\r\n\r\n.formTitle {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin: 10px 0;\r\n  font-weight: normal;\r\n}\r\n\r\n.commentedList {\r\n  width: 100%;\r\n  max-width: 600px;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  gap: 15px;\r\n}\r\n\r\nh4 {\r\n  text-align: center;\r\n  position: relative;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#username {\r\n  height: 40px;\r\n  font-size: 16px;\r\n  color: #000;\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 5px;\r\n}\r\n\r\n#comment {\r\n  height: 80px;\r\n  font-size: 16px;\r\n  color: black;\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 5px;\r\n}\r\n\r\n#submit {\r\n  height: 40px;\r\n  font-size: 16px;\r\n  background-color: #ec5242;\r\n  color: #fff;\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  margin-left: 26rem;\r\n  width: 16rem;\r\n}\r\n\r\n/* media querries */\r\n@media (max-width: 600px) {\r\n  .main-js-page {\r\n    padding: 30px;\r\n  }\r\n}\r\n\r\n@media (min-width: 601px)  and (max-width: 920px) {\r\n  .main-js-page {\r\n    padding: 30px;\r\n  }\r\n}\r\n",""]);const m=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var m=r(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=i(u,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=r(o[a]);e[s].references--}for(var c=t(n,i),l=0;l<o.length;l++){var d=r(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},172:(n,e,r)=>{var t=r(379),i=r.n(t),o=r(795),a=r.n(o),s=r(569),c=r.n(s),l=r(565),d=r.n(l),p=r(216),m=r.n(p),u=r(589),f=r.n(u),g=r(426),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=m(),i()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const x=async()=>{const n=await fetch("https://api.tvmaze.com/shows");return await n.json()},b="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/",v="FQJLijeHFubRDIVlfOvu",y=async()=>{const n=await fetch(`${b}${v}/likes`);return await n.json()};window.addEventListener("click",(n=>{if(n.target.classList.contains("like-btn")){const e=n.target.nextElementSibling.textContent;((n,e)=>{document.querySelectorAll(".like-btn").forEach((r=>{r.id===n&&(e=Number(e)+1,r.nextElementSibling.textContent=e,(async n=>{const e=await fetch(`${b}${v}/likes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:n})});await e.text()})(n))}))})(n.target.id,e)}}));const w=n=>n.length,L=async(n,e)=>{n.innerHTML="";const r=await(async n=>{const e=await fetch(`https://api.tvmaze.com/shows/${n}`);let r={...await e.json()};const t=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FQJLijeHFubRDIVlfOvu/comments?item_id=${n}`),i=await t.json();return r=i.length>0?{...r,comments:i}:{...r,comments:[]},r})(e);n.classList.add("show");const t=document.createElement("div");t.classList.add("card");const i=document.createElement("h2");i.innerText=r.name,i.classList.add("commentName");const o=document.createElement("button");o.id="close_popup",o.innerText="X";const a=document.createElement("div");a.classList.add("commImg"),a.innerHTML=`<img src='${r.image.original}' alt=${r.name}/>`;const s=document.createElement("ul");s.classList.add("spec"),s.innerHTML=`\n  <li>Language: ${r.language}</li>\n  <li>Premiered: ${r.premiered}</li>\n  <li>Rating: ${r.rating.average}</li>\n  <li>Runtime: ${r.runtime}</li>\n  `;const c=document.createElement("div");c.classList.add("commentFormSection");const l=document.createElement("h4");l.innerHTML=`Comments (${w(r.comments)})`,l.classList.add("formTitle");const d=document.createElement("ul");d.classList.add("commentedList");let p="";r.comments.length>0&&r.comments.forEach((n=>{p+=`<li>\n      <span>${n.username}</span>\n      <span>${n.creation_date}</span>\n      <span>${n.comment}</span>\n      </li>`})),d.innerHTML=p,c.append(l,d);const m=document.createElement("form");m.id="comment-form",m.innerHTML="\n  <input type='text' name='username' id='username' placeholder='Your name here...' required /> \n  <textarea name='comment' id='comment' placeholder= 'Your comments here...' required ></textarea>\n  <button type='submit' id='submit'>Submit</button>\n  ",t.innerHTML="",t.append(i,o,a,s,c,m),n.innerHTML="",n.append(t),o.addEventListener("click",(()=>{n.classList.remove("show")})),m.addEventListener("submit",(async n=>{n.preventDefault();const e=await(async(n,e)=>{const r=n.elements.username.value,t=n.elements.comment.value,i=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FQJLijeHFubRDIVlfOvu/comments/",{method:"POST",body:JSON.stringify({item_id:e,username:r,comment:t}),headers:{"Content-Type":"application/json"}});if(!i.ok&&201!==i.status)return;const o=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FQJLijeHFubRDIVlfOvu/comments?item_id=${e}`);return await o.json()})(m,r.id);let t="";e.forEach((n=>{t+=`<li>\n      <span>${n.username}</span>\n      <span>${n.creation_date}</span>\n      <span>${n.comment}</span>\n      </li>`})),l.innerHTML=`Comments (${w(r.comments)})`,d.innerHTML=t,m.elements.username.value="",m.elements.comment.value=""}))},k=document.querySelector(".main-js-page"),E=async n=>{for(let e=0;e<n.length;e+=1){const r=document.createElement("div");r.classList.add("content"),document.createElement("div").classList.add("card-image");const t=document.createElement("img");t.setAttribute("src",`${n[e].image.medium}`),t.setAttribute("alt",`affiche of ${n[e].name}`),t.setAttribute("class","movie-img");const i=document.createElement("div");i.classList.add("movie-descrption");const o=document.createElement("div");o.setAttribute("class","movie-ratings");const a=document.createElement("h2");a.classList.add("movie-title"),a.textContent=`${n[e].name}`;const s=document.createElement("span");s.classList.add("statistics");const c=document.createElement("i");c.setAttribute("class","fa like-btn fa-heart"),c.setAttribute("id",`${n[e].id}`),c.setAttribute("aria-hidden","true");const l=document.createElement("p");l.setAttribute("class","rateCounts"),l.setAttribute("Id",`${n[e].id}`),l.textContent="0",s.append(c),o.appendChild(s),i.append(a,o);const d=document.createElement("button");d.classList.add("movie-comment"),d.setAttribute("movie-Id",`${n[e].id}`),d.id=`${n[e].id}`,d.textContent="Comments",i.append(d),r.append(t,i),k.appendChild(r),d.addEventListener("click",(()=>{const r=document.querySelector(".popup");L(r,n[e].id)})),(async()=>{const n=await y();document.querySelectorAll(".rateCounts").forEach((e=>{n.forEach((n=>{e.id===n.item_id&&(e.textContent=n.likes)}))})),s.append(l)})()}},$=document.querySelector(".movie-no");(async()=>{const n=(await x()).length;$.textContent=`Movies(${n})`})(),document.addEventListener("DOMContentLoaded",E),(async()=>{const n=await x();E(n)})()},756:(n,e,r)=>{n.exports=r.p+"9ab0bec4a1a3386f73f3.jpg"}},n=>{n(n.s=172)}]);