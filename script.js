const colors = [
  {
    "name":"red",
    "code":"#FF0000",
  },
  {
    "name":"green",
    "code":"#008000",
  },
  {
    "name":"blue",
    "code":"#0000FF",
  },
  {
    "name":"yellow",
    "code":"#FFFF00",
  },
  {
    "name":"indigo",
    "code":"#4B0082",
  },
  {
    "name":"violet",
    "code":"#EE82EE",
  },
  {
    "name":"orange",
    "code":"#FFA500",
  },
  {
    "name":"black",
    "code":"#000000",
  },
  {
    "name":"white",
    "code":"#FFFFFF",
  },
  {
    "name":"gray",
    "code":"#808080",
  },
  {
    "name":"brown",
    "code":"#6F4E37",
  },
  {
    "name":"pink",
    "code":"#FFC0CB",
  },
  {
    "name":"gold",
    "code":"#FFD700",
  },
  {
    "name":"silver",
    "code":"#C0C0C0",
  },
  {
    "name":"lime",
    "code":"#00FF00",
  },
  {
    "name":"aqua",
    "code":"#00FFFF",
  },
  {
    "name":"navy",
    "code":"#000080",
  },
  {
    "name":"maroon",
    "code":"#800000",
  },
  {
    "name":"olive",
    "code":"#808000",
  },
  {
    "name":"teal",
    "code":"#008080",
  },
  {
    "name":"plum",
    "code":"#DDA0DD",
  },
  {
    "name":"lavender",
    "code":"#E6E6FA",
  },
  {
    "name":"Coquelicot",
    "code":"#FF3800",
  },
  {
    "name":"peach",
    "code":"#FFE5B4",
  },
  {
    "name":"coral",
    "code":"#FF7F50",
  },
  {
    "name":"crimson",
    "code":"#DC143C",
  },
  {
    "name":"aquamarine",
    "code":"#7FFFD4",
  },
  {
    "name":"Black Cat",
    "code":"#413839",
  },
  {
    "name":"iridium",
    "code":"#3D3C3A",
  },
  {
    "name":"Gainsboro",
    "code":"#DCDCDC",
  },
  {
    "name":"Roman Silver",
    "code":"#838996",
  },
  {
    "name":"Samco Blue",
    "code":"#0002FF",
  },
  {
    "name":"Robin Egg Blue",
    "code":"#BDEDFF",
  },
  {
    "name":"Blue Zircon",
    "code":"#57FEFF",
  },
  {
    "name":"Isle Of Man Green",
    "code":"#22CE83",
  },
  {
    "name":"Stoplight Go Green",
    "code":"#57E964",
  },
  {
    "name":"Chartreuse",
    "code":"#7FFF00",
  },
  {
    "name":"Cornsilk",
    "code":"#FFF8DC",
  },
  {
    "name":"PapayaWhip",
    "code":"#FFEFD5",
  },
  {
    "name":"Khaki",
    "code":"#F0E68C",
  },
  {
    "name":"Rubber Ducky Yellow",
    "code":"#FFD801",
  },
  {
    "name":"Rose Dust",
    "code":"#997070",
  },
  {
    "name":"puce",
    "code":"#7F5A58",
  },
  {
    "name":"Dimorphotheca Magenta",
    "code":"#E3319D",
  },
  {
    "name":"Lavender Pinocchio",
    "code":"#EBDDE2",
  },
  {
    "name":"medium candy apple red",
    "code":"#E2062C",
  },
  {
    "name":"pussywillow gray",
    "code":"#AEACA1",
  },
  {
    "name":"Ao",
    "code":"#008000",
  },
  {
    "name":"Air Superiority Blue",
    "code":"#72A0C1",
  },
  {
    "name":"School bus yellow",
    "code":"#FFD800",
  },
  {
    "name":"Ultra Violet",
    "code":"#7B6D8D",
  },
  {
    "name":"Pyrrometheneoxazolone",
    "code":"#F20B0B",
  }
]

let colorList = [];
var questions = 0, correct = 0;
var curColor = null;
var colorDiv = null;
var textBox = null;
var answerBox = null;

var revealedLetters = [' ', '-'];

var textBoxes = [];

class LetterBox extends HTMLElement {
  constructor() {
    super();
    this.index = textBoxes.length;
    textBoxes.push(this);
    this._value = '';
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value') {
      this._value = newValue;
      if (this.inputElement) {
        this.inputElement.value = newValue;
      }
    }
  }

  FocusLast(){
    let input = this.inputElement;
    textBoxes[this.index - 1].inputElement.focus();
  }
  FocusNext(){
    textBoxes[this.index + 1].inputElement.focus();
  }

  get value() {
    return this.inputElement ? this.inputElement.value : this._value;
  }

  set value(val) {
    this.setAttribute('value', val);
  }

  connectedCallback() {
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('letterBox');
    input.maxLength = 1;
    this.appendChild(input);
    this.inputElement = input;
    if(this._value){
      input.value = this._value;
    }

    input.addEventListener('input', (e) => {
      this.value = input.value;
  if(input.value.length == 1 && this.index != textBoxes.length - 1){
    this.FocusNext();
  }else if(input.value.length == 0 && this.index != 0){
    this.FocusLast()
  }
      
    });

    input.addEventListener('focus', () => {
      if(this.disabled == true){
        this.FocusNext();
        return;
      }     
      input.select();
    });

    input.addEventListener('keydown', (e) => {
      if(e.key == "Backspace" && this.index != 0){
        this.inputElement.value = "";
        textBoxes[this.index - 1].inputElement.focus();
      }else if(e.key == "Enter"){
        Check()
      }
    });

    if(this.index == 0){
      this.inputElement.select();
    }
  }
};
customElements.define('letter-box', LetterBox);

function RevealLetter(){
  if(curColor.name.length - revealedLetters.length <= 0){
    return;
  }
  let reveal = curColor.name[Randrange(0, curColor.name.length)];
  while(revealedLetters.includes(reveal)){
    reveal = curColor.name[Randrange(0, curColor.name.length)];
  }
  revealedLetters.push(reveal);
  console.log("revealedLetters: " + revealedLetters);
}

function DrawWord(){
  let child = answerBox.lastElementChild;
  while (child) {
    answerBox.removeChild(child);
    child = answerBox.lastElementChild;
    console.log("Removed child")
  }
  textBoxes = [];
  RevealLetter();
  // console.log("revealedLetters: " + revealedLetters);
  for (let i = 0; i < curColor.name.length; i++) {
    let letter = curColor.name[i]
    if(letter == ' '){
      const br = document.createElement('br');
      answerBox.appendChild(br);
    }else{
      const box = document.createElement('letter-box');
      if(revealedLetters.includes(letter)){
        console.log("revealed letter")
        box.value = letter;
        box.disabled = true;
      }
      answerBox.appendChild(box);
    }
  }
}

function Randrange(min, max){
  return Math.round((Math.random() * (max - 1)) + min)
}

function GenColor(){
  curColor = colorList[Randrange(0, colorList.length)]
  // console.log(Randrange(0, colors.length))
  console.log(`The color is ${curColor.name} hex:${curColor.code}`)
  colorDiv.style.backgroundColor = curColor.code;
  revealedLetters = [' ', '-'];
  
  colorList = colorList.filter(element => element !== curColor);
  
  DrawWord();
}

function Start(){
  colorDiv = document.getElementById("colorBox")
  answerBox = document.getElementById("answerBox")
  colorList = colors;
  GenColor()
}

function Check(){
  questions++;
  let text = "";
  for(let i = 0; i < textBoxes.length; i++){
    text += textBoxes[i].inputElement.value;
  }
  if(text.length != curColor.name.replace(/\s+/g, '').length){
    console.log(text.length)
    return;
  }
  if(text.toLowerCase() == curColor.name.toLowerCase().replace(/\s+/g, '')){
    correct++;
    GenColor()
  }else{
    DrawWord()
  }
}