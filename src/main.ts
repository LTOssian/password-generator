import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div id="header">
    <h1>Password Generator</h1>
    <p>Create strong passwords to keep your account secure online.</p>
</div>
<section id="passwordParams">
    <div class="imgContainer">
        <img src="../assets/fortress.svg" alt="Image describing the strenght of the password : Fortress"></img>
    </div>
    <div class="outputContainer">
        <div class="passwordOutput">
            <p class="password">PTx1f5DaFX</p>
            <span class="strenghBadge">Very Strong</span>
            <button class="resetButton">
                <img src="../assets/refresh.svg"></img>
            </button>
        </div>
    </div>
    <button class="copyButton">Copy</button>
</section>



`
