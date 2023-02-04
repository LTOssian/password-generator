import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div id="header">
    <h1 class="fs-heading">Password Generator</h1>
    <p>Create strong passwords to keep your account secure online.</p>
</div>
<section id="appContainer">

    <div class="imgContainer">
        <img src="../assets/fortress.svg" alt="Image describing the strenght of the password : Fortress"></img>
    </div>

    <div id="passwordParams">

        <div class="outputContainer">

                <div class="passwordOutput">
                    <p class="password">PTx1f5DaFX</p>
                    <span class="strenghBadge">Very Strong</span>
                    <button class="resetButton">
                        <img src="../assets/refresh.svg"></img>
                    </button>
                </div>
                <button class="copyButton">Copy</button>
            
        </div>
        <div class="passwordSettings">
            <div class="lengthContainer">
                <h2 class="paramTitle">
                    Password Length:
                    <strong>0</strong>
                </h2>
                <div class="rangeInput">
                    <input type="range" min="1" max="21" value="10" id="length">
                </div>
            </div>
            <div class="charContainer">
                <h2 class="paramTitle">Characters used:</h2>
                <div class="charSettings">
                    <label for="toggleUppercase">
                        <input type="checkbox" name="toggleUppercase" id="toggleUppercase">
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

`
