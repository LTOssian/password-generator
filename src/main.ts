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
                <div class="btnContainer">
                    <button class="copyButton">Copy</button>
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
`

const passwordOutput = <HTMLParagraphElement>document.querySelector(".password");
const strenghBadge = <HTMLSpanElement>document.querySelector(".strenghBadge");
const copyButton = <HTMLButtonElement>document.querySelector(".copyButton");
const refreshButton = <HTMLButtonElement>document.querySelector(".resetButton");
const anyClick = <HTMLElement>document.querySelector(".update");
const lengthOutput = <HTMLElement>document.querySelector("strong");
const everyInput = document.querySelectorAll('input');

 


class PasswordGenerator {
    _password: string;
    _length: number;
    _uppercaseStatus: boolean;
    _lowercaseStatus: boolean;
    _symbolStatus: boolean;
    _digitStatus: boolean;

    constructor(
        length: number = 0,
        uppercaseStatus: boolean = false,
        lowercaseStatus: boolean = false,
        symbolStatus: boolean = false,
        digitStatus: boolean = false
    ) {
        this._password = '';
        this._length = length;
        this._uppercaseStatus = uppercaseStatus;
        this._lowercaseStatus = lowercaseStatus;
        this._symbolStatus = symbolStatus;
        this._digitStatus = digitStatus;
    }

    private dataAlphabetLowerCase: string = 'abcdefghijklmnopqrtuvwxyz';
    private dataAlphabetUpperCase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    private dataSymbols: string = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
    private dataDigits: string = '1234567890';


    getLength = ():number => {
        const lengthValue: number = parseInt((<HTMLInputElement>document.querySelector("#length")).value, 10);
        return lengthValue;
    }

    resetOutput = () => {
         this._password = '';
    }

    updateSettings = () => {
        this.resetOutput()
        this._length = this.getLength();
        this._uppercaseStatus = (<HTMLInputElement>document.querySelector('#toggleUppercase')).checked;
        this._lowercaseStatus = (<HTMLInputElement>document.querySelector('#toggleLowercase')).checked;
        this._symbolStatus = (<HTMLInputElement>document.querySelector('#toggleSymbols')).checked;
        this._digitStatus = (<HTMLInputElement>document.querySelector('#toggleDigits')).checked;
    }

    handleStrenghBadge = () => {
        if (this._password.length > 11) {
            strenghBadge.innerText = "VERY STRONG";
        } else if (this._password.length > 9) {
            strenghBadge.innerText = "STRONG";
        } else if (this._password.length > 7) {
            strenghBadge.innerText = "GOOD";
        } else if (this._password.length > 4) {
            strenghBadge.innerText = "WEAK";
        } else {
            strenghBadge.innerText = "VERY WEAK";
        }
    }

    generateDataset= ():string => {
        let dataset: string = "";
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

        return dataset
    }

    showOutput = () => {
        passwordOutput.innerText = this._password;
    }

    generatePassword = () => {
        this.updateSettings();
        const dataset = this.generateDataset();
        if (dataset) {
            for (let i = 0; i < this._length; i++) {
                this._password += dataset[Math.floor(Math.random() * dataset.length)];
            }
            this.showOutput();
            this.handleStrenghBadge();
        } else {
            //handle error function
            return;
        }
    }
}

refreshButton.addEventListener('click', new PasswordGenerator().generatePassword);
everyInput.forEach(element => {
    element.addEventListener('click', new PasswordGenerator().generatePassword);
    element.addEventListener('change', new PasswordGenerator().generatePassword);
})

