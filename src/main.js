import './style.css';
document.querySelector('#app').innerHTML = `
<div id="header">
    <h1 class="fs-heading">Password Generator</h1>
    <p>Create strong passwords to keep your account secure online.</p>
</div>
<section id="appContainer">

    <div class="imgContainer">
        <img id="imgOutput" src="../assets/fortress.svg" alt="Image describing the strenght of the password : Fortress"></img>
    </div>

    <div id="passwordParams">

        <div class="outputContainer">

                <div class="passwordOutput">
                    <p class="password">PTx1f5DaFX</p>
                    <span class="strengthBadge strongBadge">Strong</span>
                    <button type="submit" class="resetButton">
                        <img src="../assets/refresh.svg" alt="refresh button"></img>
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
`;
const passwordOutput = document.querySelector(".password");
const strengthBadge = document.querySelector(".strengthBadge");
const copyButton = document.querySelector(".copyButton");
const refreshButton = document.querySelector(".resetButton");
const everyInput = document.querySelectorAll('input');
const imgOutput = document.querySelector("#imgOutput");
class PasswordGenerator {
    _password;
    _length;
    _uppercaseStatus;
    _lowercaseStatus;
    _symbolStatus;
    _digitStatus;
    constructor(length = 0, uppercaseStatus = false, lowercaseStatus = false, symbolStatus = false, digitStatus = false) {
        this._password = '';
        this._length = length;
        this._uppercaseStatus = uppercaseStatus;
        this._lowercaseStatus = lowercaseStatus;
        this._symbolStatus = symbolStatus;
        this._digitStatus = digitStatus;
    }
    dataAlphabetLowerCase = 'abcdefghijklmnopqrtuvwxyz';
    dataAlphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    dataSymbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
    dataDigits = '1234567890';
    getLength = () => {
        const lengthValue = parseInt(document.querySelector("#length").value, 10);
        return lengthValue;
    };
    resetOutput = () => {
        this._password = '';
    };
    updateSettings = () => {
        this.resetOutput();
        this._length != this.getLength() ? this._length = this.getLength() : true;
        this._uppercaseStatus = document.querySelector('#toggleUppercase').checked;
        this._lowercaseStatus = document.querySelector('#toggleLowercase').checked;
        this._symbolStatus = document.querySelector('#toggleSymbols').checked;
        this._digitStatus = document.querySelector('#toggleDigits').checked;
    };
    handleAnimation = () => {
        imgOutput.classList.add("animation-fadeRight");
        setTimeout(() => {
            imgOutput.classList.remove("animation-fadeRight");
        }, 1000);
    };
    handleStrengthBadge = () => {
        if (this._length > 11) {
            if (strengthBadge.innerText != "Very Strong") {
                strengthBadge.innerText = "Very Strong";
                imgOutput.src = "../assets/bunker.svg";
                imgOutput.alt = "Image describing the strenght of the password : Bunker";
                this.handleAnimation();
                strengthBadge.classList.value = 'strengthBadge';
                strengthBadge.classList.add('veryStrongBadge');
            }
        }
        else if (this._length > 9) {
            if (strengthBadge.innerText != "Strong") {
                imgOutput.src = "../assets/fortress.svg";
                imgOutput.alt = "Image describing the strenght of the password : Fortress";
                this.handleAnimation();
                strengthBadge.classList.value = 'strengthBadge';
                strengthBadge.innerText = "Strong";
                strengthBadge.classList.add('strongBadge');
            }
        }
        else if (this._length > 7) {
            if (strengthBadge.innerText != "Good") {
                imgOutput.src = "../assets/house.svg";
                imgOutput.alt = "Image describing the strenght of the password : House";
                this.handleAnimation();
                strengthBadge.classList.value = 'strengthBadge';
                strengthBadge.innerText = "Good";
                strengthBadge.classList.add('goodBadge');
            }
        }
        else if (this._length > 4) {
            if (strengthBadge.innerText != "Weak") {
                imgOutput.src = "../assets/van.svg";
                imgOutput.alt = "Image describing the strenght of the password : Van";
                this.handleAnimation();
                strengthBadge.classList.value = 'strengthBadge';
                strengthBadge.innerText = "Weak";
                strengthBadge.classList.add('weakBadge');
            }
        }
        else {
            if (strengthBadge.innerText != "Very Weak") {
                imgOutput.src = "../assets/tent.svg";
                imgOutput.alt = "Image describing the strenght of the password : Tent";
                this.handleAnimation();
                strengthBadge.classList.value = 'strengthBadge';
                strengthBadge.innerText = "Very Weak";
                strengthBadge.classList.add('veryWeakBadge');
            }
        }
    };
    generateDataset = () => {
        let dataset = "";
        if (this._digitStatus) {
            dataset += this.dataDigits;
        }
        if (this._lowercaseStatus) {
            dataset += this.dataAlphabetLowerCase;
        }
        if (this._symbolStatus) {
            dataset += this.dataSymbols;
        }
        if (this._uppercaseStatus) {
            dataset += this.dataAlphabetUpperCase;
        }
        return dataset;
    };
    showOutput = () => {
        passwordOutput.innerText = this._password;
    };
    generatePassword = () => {
        this.updateSettings();
        const dataset = this.generateDataset();
        if (dataset) {
            for (let i = 0; i < this._length; i++) {
                this._password += dataset[Math.floor(Math.random() * dataset.length)];
            }
            this.showOutput();
            this.handleStrengthBadge();
        }
        else {
            //handle error function
            return;
        }
    };
}
refreshButton.addEventListener('click', (e) => {
    new PasswordGenerator().generatePassword();
    e.preventDefault();
    refreshButton.classList.add('loadBtn');
    setTimeout(() => {
        refreshButton.classList.remove('loadBtn');
    }, 500);
});
everyInput.forEach(element => {
    element.addEventListener('click', new PasswordGenerator().generatePassword);
    element.addEventListener('change', (e) => {
        e.preventDefault();
        new PasswordGenerator().generatePassword();
    });
});
copyButton.addEventListener('click', (e) => {
    e.preventDefault();
    const copiedText = passwordOutput.innerText;
    navigator.clipboard.writeText(copiedText);
    copyButton.classList.add('copiedBehavior');
    copyButton.innerText = "Copied";
    setTimeout(() => {
        copyButton.classList.remove('copiedBehavior');
        copyButton.innerText = "Copy";
    }, 1000);
});
//style input range
//style input checkbox
