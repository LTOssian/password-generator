var p=Object.defineProperty;var m=(n,e,i)=>e in n?p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var s=(n,e,i)=>(m(n,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();document.querySelector("#app").innerHTML=`
<div id="header">
    <h1 class="fs-heading">Password Generator</h1>
    <p>Create strong passwords to keep your account secure online.</p>
</div>
<section id="appContainer">

    <div class="imgContainer">
        <img id="imgOutput" src="assets/fortress.svg" alt="Image describing the strenght of the password : Fortress"></img>
    </div>

    <div id="passwordParams">

        <div class="outputContainer">

                <div class="passwordOutput">
                    <p class="password">PTx1f5DaFX</p>
                    <span class="strengthBadge strongBadge">Strong</span>
                    <button type="submit" class="resetButton">
                        <img src="assets/refresh.svg" alt="refresh button"></img>
                    </button>
                </div>
                <div class="btnContainer">
                    <button type="submit" class="copyButton">Copy</button>
                </div>
        </div>
        <div class="passwordSettings">
            <div class="lengthContainer">
                <label for="length" class="paramTitle">
                    Password Length:
                    <strong><output id="num">11</output></strong>
                </label>
                <div class="rangeInput">
                    <input type="range" min="1" max="25" value="11" id="length" oninput="num.value = this.value">
                </div>
            </div>
            <div class="charContainer">
                <h2 class="paramTitle">Characters used:</h2>
                <div class="charSettings">
                    <label for="toggleUppercase">
                        <input type="checkbox" name="toggleUppercase" id="toggleUppercase" checked="true">
                        <span>ABC</span>
                    </label>
                    <label for="toggleLowercase">
                        <input type="checkbox" name="toggleLowercase" id="toggleLowercase">
                        <span>abc</span>
                    </label>
                    <label for="toggleDigits">
                        <input type="checkbox" name="toggleDigits" id="toggleDigits">
                        <span>123</span>
                    </label>
                    <label for="toggleSymbols">
                        <input type="checkbox" name="toggleSymbols" id="toggleSymbols">
                        <span>?$!</span>
                    </label>
                </div>
            </div>
        </div>
    </div>

</section>
`;const h=document.querySelector(".password"),t=document.querySelector(".strengthBadge"),l=document.querySelector(".copyButton"),g=document.querySelector(".resetButton"),f=document.querySelectorAll("input"),o=document.querySelector("#imgOutput");class u{constructor(e=0,i=!1,d=!1,a=!1,r=!1){s(this,"_password");s(this,"_length");s(this,"_uppercaseStatus");s(this,"_lowercaseStatus");s(this,"_symbolStatus");s(this,"_digitStatus");s(this,"dataAlphabetLowerCase","abcdefghijklmnopqrtuvwxyz");s(this,"dataAlphabetUpperCase","ABCDEFGHIJKLMNOPQRSTUVWXYZ");s(this,"dataSymbols","~`!@#$%^&*()_-+={[}]|:;'<,>.?/");s(this,"dataDigits","1234567890");s(this,"getLength",()=>parseInt(document.querySelector("#length").value,10));s(this,"resetOutput",()=>{this._password=""});s(this,"updateSettings",()=>{this.resetOutput(),this._length!=this.getLength()&&(this._length=this.getLength()),this._uppercaseStatus=document.querySelector("#toggleUppercase").checked,this._lowercaseStatus=document.querySelector("#toggleLowercase").checked,this._symbolStatus=document.querySelector("#toggleSymbols").checked,this._digitStatus=document.querySelector("#toggleDigits").checked});s(this,"handleAnimation",()=>{o.classList.add("animation-fadeRight"),setTimeout(()=>{o.classList.remove("animation-fadeRight")},1e3)});s(this,"handleStrengthBadge",()=>{this._length>11?t.innerText!="Very Strong"&&(t.innerText="Very Strong",o.src="assets/bunker.svg",o.alt="Image describing the strenght of the password : Bunker",this.handleAnimation(),t.classList.value="strengthBadge",t.classList.add("veryStrongBadge")):this._length>9?t.innerText!="Strong"&&(o.src="assets/fortress.svg",o.alt="Image describing the strenght of the password : Fortress",this.handleAnimation(),t.classList.value="strengthBadge",t.innerText="Strong",t.classList.add("strongBadge")):this._length>7?t.innerText!="Good"&&(o.src="assets/house.svg",o.alt="Image describing the strenght of the password : House",this.handleAnimation(),t.classList.value="strengthBadge",t.innerText="Good",t.classList.add("goodBadge")):this._length>4?t.innerText!="Weak"&&(o.src="assets/van.svg",o.alt="Image describing the strenght of the password : Van",this.handleAnimation(),t.classList.value="strengthBadge",t.innerText="Weak",t.classList.add("weakBadge")):t.innerText!="Very Weak"&&(o.src="assets/tent.svg",o.alt="Image describing the strenght of the password : Tent",this.handleAnimation(),t.classList.value="strengthBadge",t.innerText="Very Weak",t.classList.add("veryWeakBadge"))});s(this,"generateDataset",()=>{let e="";return this._digitStatus&&(e+=this.dataDigits),this._lowercaseStatus&&(e+=this.dataAlphabetLowerCase),this._symbolStatus&&(e+=this.dataSymbols),this._uppercaseStatus&&(e+=this.dataAlphabetUpperCase),e});s(this,"showOutput",()=>{h.innerText=this._password});s(this,"generatePassword",()=>{this.updateSettings();const e=this.generateDataset();if(e){for(let i=0;i<this._length;i++)this._password+=e[Math.floor(Math.random()*e.length)];this.showOutput(),this.handleStrengthBadge()}else return});this._password="",this._length=e,this._uppercaseStatus=i,this._lowercaseStatus=d,this._symbolStatus=a,this._digitStatus=r}}g.addEventListener("click",n=>{new u().generatePassword(),n.preventDefault(),g.classList.add("loadBtn"),setTimeout(()=>{g.classList.remove("loadBtn")},500)});f.forEach(n=>{n.addEventListener("click",new u().generatePassword),n.addEventListener("change",e=>{e.preventDefault(),new u().generatePassword()})});l.addEventListener("click",n=>{n.preventDefault();const e=h.innerText;navigator.clipboard.writeText(e),l.classList.add("copiedBehavior"),l.innerText="Copied",setTimeout(()=>{l.classList.remove("copiedBehavior"),l.innerText="Copy"},1e3)});
