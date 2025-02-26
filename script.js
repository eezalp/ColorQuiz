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
  },
  {
    "name":"orange red",
    "code":"#FF4500"
  },
  {
    "name":"pale golden rod",
    "code":"#EEE8AA"
  },
  {
    "name":"dark olive green",
    "code":"#556B2F"
  },
  {
    "name":"medium spring green",
    "code":"#00FA9A"
  },
  {
    "name":"medium slate blue",
    "code":"#7B68EE"
  },
  {
    "name":"midnight blue",
    "code":"#191970"
  },
  {
    "name":"medium orchid",
    "code":"#BA55D3"
  },
  {
    "name":"medium violet red",
    "code":"#C71585"
  },
  {
    "name":"pale violet red",
    "code":"#DB7093"
  },
  {
    "name":"blanched almond",
    "code":"#FFEBCD"
  },
  {
    "name":"light golden rod yellow",
    "code":"#FAFAD2"
  },
  {
    "name":"saddle brown",
    "code":"#8B4513"
  },
  {
    "name":"white smoke",
    "code":"#F5F5F5"
  },
  {
    "name":"burly wood",
    "code":"#DEB887"
  },
  {
    "name":"moccasin",
    "code":"#FFE4B5"
  },
  {
    "name":"navajo white",
    "code":"#FFDEAD"
  },
  {
    "name":"corn flower blue",
    "code":"#6495ED"
  },
  {
    "name":"dark salmon",
    "code":"#E9967A"
  },
  {
    "name":"light salmon",
    "code":"#FFA07A"
  },
  {
    "name":"salmon",
    "code":"#FA8072"
  },
  {
    "name":"Signal Blue",
    "code":"#3E8EDE"
  },
  {
    "name":"NYU Violet",
    "code":"#57068c"
  },
  {
    "name":"California Gold",
    "code":"#c39e6d"
  },
  {
    "name":"Glory Red",
    "code":"#e31837"
  },
  {
    "name":"Whitecaps Blue",
    "code":"#9DC2EA"
  },
  {
    "name":"Moss Green",
    "code":"#4A5D23"
  },
  {
    "name":"University of Pennsylvania red",
    "code":"#A50021"
  },
  {
    "name":"International Klein Blue",
    "code":"#130a8f"
  },
  {
    "name":"Permanent Geranium Lake",
    "code":"#E12C2C"
  },
  {
    "name":"Faux-Medium aquamarine",
    "code":"#55e19e"
  },
  {
    "name":"Gin",
    "code":"#d8e4bc"
  },
  {
    "name":"Amaranth Deep Purple",
    "code":"#9F2B68"
  },
  {
    "name":"Quinacridone Magenta",
    "code":"#8E3A59"
  },
  {
    "name":"Permanent Alizarin Crimson",
    "code":"#E32636"
  },
  {
    "name":"Delphinium Blue",
    "code":"#6198AE"
  },
  {
    "name":"Maximum Green Yellow",
    "code":"#D9E650"
  },
  {
    "name":"Caput Mortuum Brown",
    "code":"#592720"
  },
  {
    "name":"Zinnwaldite Brown",
    "code":"#2C1608"
  },
  {
    "name":"Illuminating Emerald",
    "code":"#319177"
  },
  {
    "name":"Hollywood Cerise",
    "code":"#F400A1"
  },
  {
    "name":"Alabaster Gleam",
    "code":"#F0DEBD"
  },
  {
    "name":"Smaragdine",
    "code":"#4A9976"
  },
  {
    "name":"Gamboge",
    "code":"#E49B0F"
  },
  {
    "name":"Bastard-amber",
    "code":"#FFCC88"
  },
  {
    "name":"Arsenic",
    "code":"#3B444B"
  },
  {
    "name":"Exuberance",
    "code":"#E86800"
  },
  {
    "name":"Goose Turd Green",
    "code":"#54FFA2"
  },
  {
    "name":"Banan-appeal",
    "code":"#FBF2B9"
  },
  {
    "name":"Incarnadine",
    "code":"#AA0022"
  },
  {
    "name":"Elephant Breath",
    "code":"#D3CABB"
  },
  {
    "name":"Drunk Tank Pink",
    "code":"#FF91AF"
  },
  {
    "name":"Xanadu",
    "code":"#738678"
  },
  {
    "name":"Aureolin",
    "code":"#FDEE00"
  },
  {
    "name":"Skobeloff",
    "code":"#007474"
  },
  {
    "name":"Glaucous",
    "code":"#6082B6"
  },
  {
    "name":"blue marguerite",
    "code":"#8665C8"
  },
  {
    "name":"bleached cedar",
    "code":"#352442"
  },
  {
    "name":"Japanese laurel",
    "code":"#0E860E"
  },
  {
    "name":"De York",
    "code":"#82C082"
  },
  {
    "name":"Hippie green",
    "code":"#468647"
  },
  {
    "name":"spicy mustard",
    "code":"#6B5A0F"
  },
  {
    "name":"Bronze olive",
    "code":"#443909"
  },
  {
    "name":"costa del sol",
    "code":"#625932"
  },
  {
    "name":"bossanova",
    "code":"#4C3262"
  },
  {
    "name":"we peep",
    "code":"#F3CEF3"
  },
  {
    "name":"Shady lady",
    "code":"#ACAAAC"
  },
  {
    "name":"light wisteria",
    "code":"#D3ABE7"
  },
  {
    "name":"night shadz",
    "code":"#B43C55"
  },
  {
    "name":"new york pink",
    "code":"#D88387"
  },
  {
    "name":"bulgarian rose",
    "code":"#460709"
  },
  {
    "name":"indian khaki",
    "code":"#C1AE95"
  },
  {
    "name":"rangitoto",
    "code":"#323527"
  },
  {
    "name":"rose bud cherry",
    "code":"#6C0944"
  },
  {
    "name":"zinnwaldite",
    "code":"#EBC2AF"
  },
  {
    "name":"Vivid tangerine",
    "code":"#FF9980"
  },
  {
    "name":"vis vis",
    "code":"#FFEFA1"
  },
  {
    "name":"tickle me pink",
    "code":"#FC80A5"
  },
  {
    "name":"texas",
    "code":"#F8F99C"
  },
  {
    "name":"te papa green",
    "code":"#1E433C"
  },
  {
    "name":"shiraz",
    "code":"#B20913"
  },
  {
    "name":"selective yellow",
    "code":"#FFBA00"
  },
  {
    "name":"Screamin' Green",
    "code":"#66FF66"
  },
  {
    "name":"Razzle dazzle rose",
    "code":"#FF33CC"
  },
  {
    "name":"Quarter spanish white",
    "code":"#F7F2E1"
  },
  {
    "name":"purple mountain's majesty",
    "code":"#967882"
  },
  {
    "name":"nutmeg wood finish",
    "code":"#683600"
  },
  {
    "name":"macaroni and cheese",
    "code":"#FFB97B"
  },
  {
    "name":"go ben",
    "code":"#726D4E"
  },
  {
    "name":"fuzzy wuzzy brown",
    "code":"#C45655"
  },
  {
    "name":"fresh eggplant",
    "code":"#990066"
  },
  {
    "name":"frangipani",
    "code":"#FFDEB3"
  },
  {
    "name":"forget me not",
    "code":"#FFF1EE"
  },
  {
    "name":"Ebb",
    "code":"#E9E3E3"
  },
  {
    "name":"double spanish white",
    "code":"#E6D7B9"
  },
  {
    "name":"double colonial white",
    "code":"#EEE3AD"
  },
  {
    "name":"double pearl lusta",
    "code":"#FCF4D0"
  },
  {
    "name":"hint of green",
    "code":"#E6FFE9"
  },
  {
    "name":"half and half",
    "code":"#FFFEE1"
  },
  {
    "name":"granny smith apple",
    "code":"#9DE093"
  },
  {
    "name":"amethyst smoke",
    "code":"#A397B4"
  },
  {
    "name":"alizarian crimson",
    "code":"#E32636"
  },
  {
    "name":"arrowtown",
    "code":"#948771"
  },
  {
    "name":"aromic tangerine",
    "code":"#FF9966"
  },
  {
    "name":"azure radiance",
    "code":"#007FFF"
  },
  {
    "name":"australian mint",
    "code":"#F5FFBE"
  },
  {
    "name":"Blue romance",
    "code":"#D2F6DE"
  },
  {
    "name":"can can",
    "code":"#D591A4"
  },
  {
    "name":"caribbean green",
    "code":"#00CC99"
  },
  {
    "name":"chathams blue",
    "code":"#175579"
  },
  {
    "name":"chelsea cucumber",
    "code":"#83AA5D"
  },
  {
    "name":"zambezi",
    "code":"#685558"
  },
  {
    "name":"waikawa gray",
    "code":"#5A6E9C"
  },
  {
    "name":"tyrian purple",
    "code":"#66023C"
  },
  {
    "name":"true V",
    "code":"#8A73D6"
  },
  {
    "name":"shocking pink",
    "code":"#FC0FC0"
  },
  {
    "name":"ylnmn blue",
    "code":"#2E5090"
  },
  {
    "name":"stil de grain yellow",
    "code":"#FADA53"
  },
  {
    "name":"honeysuckle",
    "code":"#D94F70"
  },
  {
    "name":"cadet gray",
    "code":"#91A3B0"
  },
  {
    "name":"british racing green",
    "code":"#004225"
  },
  {
    "name":"Viridian",
    "code":"#009B7D"
  },
  {
    "name":"Amaranth",
    "code":"#E52B50"
  },
  {
    "name":"coffee",
    "code":"#A67B5B"
  },
  {
    "name":"Della Robbia Blue Color",
    "code":"#7a9dcb"
  },
  {
    "name":"meadowbrook",
    "code":"#60A0A3"
  },
  {
    "name":"mediterranea",
    "code":"#32575D"
  },
  {
    "name":"tanager turquoise",
    "code":"#91DCE8"
  },
  {
    "name":"drab dark brown",
    "code":"#4A412A"
  }
];

let colorList = [];
var questions = 0, correct = 0;
var curColor = null;
var colorDiv = null;
var textBox = null;
var answerBox = null;

var constReveals = [' ', '-', '\'']
var revealedLetters = [];
var totalLetters = [];

var textBoxes = [];

var correct = 0, incorrect = 0, lateCorrect = 0;
var guesses = 0;
var totalQuestions = 0;

var focusDirection = false; // false == backwards, true == forwards

var nextKeys = ["ArrowRight", "Tab"]
var prevKeys = ["ArrowLeft", "Backspace"]

var startTime = null, finalTime = null;

let timerInterval = setInterval(TimerChange, 10);

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
    if(this.index == 0) return;
    textBoxes[this.index - 1].inputElement.focus();
    focusDirection = false;
  }
  FocusNext(){
    if(this.index >= (textBoxes.length - 1)) return;
    textBoxes[this.index + 1].inputElement.focus();
    focusDirection = true;
  }

  OnFocus(){
    if(this.inputElement.readOnly){
      if(focusDirection)
        this.FocusNext();
      else
        this.FocusLast();
      return;
    }     
    // this.inputElement.select();
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
      input.readOnly = true;
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
      this.OnFocus();
    });

    input.addEventListener('keydown', (e) => {
      if(prevKeys.includes(e.key) && this.index != 0){
        e.preventDefault()
        if(e.key == "Backspace") this.inputElement.value = "";
        this.FocusLast();
      }else if(nextKeys.includes(e.key) && this.index != textBoxes.length){
        e.preventDefault()
        this.FocusNext();
      }else if(e.key == "Enter"){
        Check()
      }else if(e.key == "End"){
        GiveUp();
      }else if(e.key.length == 1){
        e.preventDefault()
        this.inputElement.value = e.key;
        this.FocusNext();
      }
    });
    input.addEventListener('keyup', (e) => {
      if(prevKeys.has(e.key)){
        prevKeys.delete(e.key);
      }
    });

    if(this.index == 0){
      focusDirection = true;
      this.OnFocus();
      this.inputElement.focus();
    }
  }
};
customElements.define('letter-box', LetterBox);

function FormatTime(diff) {
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  const milliseconds = String(Math.floor((diff % 1000)/10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}
function TimerChange() {
  document.getElementById("timerBox").innerHTML = FormatTime(new Date() - startTime);
  // console.log(new Date() - startTime);
}

function RevealLetter(){
  console.log(Math.ceil(totalLetters.length * .33));
  if(totalLetters.length - revealedLetters.length <= Math.max(2, Math.ceil(totalLetters.length * .33))){
    return;
  }
  let reveal = totalLetters[Randrange(0, totalLetters.length)];
  while(revealedLetters.includes(reveal)){
    reveal = totalLetters[Randrange(0, totalLetters.length)];
  }
  revealedLetters.push(reveal);
}

function DrawWord(){
  let child = answerBox.lastElementChild;
  while (child) {
    answerBox.removeChild(child);
    child = answerBox.lastElementChild;
  }
  textBoxes = [];
  RevealLetter();
  let word = document.createElement('div');
  word.classList.add("wordBox");
  for (let i = 0; i < curColor.name.length; i++) {
    let letter = curColor.name[i]
    if(letter.trim() === '' || letter === " "){
      answerBox.appendChild(word);
      word = document.createElement('div');
      word.classList.add("wordBox");
      const br = document.createElement('div');
      br.classList.add("spacingBox")
      answerBox.appendChild(br);
    }else{
      const box = document.createElement('letter-box');
      if(revealedLetters.includes(letter) || constReveals.includes(letter)){
        box.value = letter;
        box.disabled = true;
      }
      word.appendChild(box);
    }
  }
  answerBox.appendChild(word);
}

function Randrange(min, max){
  return Math.round((Math.random() * (max - 1)) + min)
}

function EndGame(){
  document.body.style = `background-image: linear-gradient(.25turn, #000000, #EEEEEE, #000000);`;
  clearInterval(timerInterval);
  document.getElementById("main").hidden = true;
  document.getElementById("done").hidden = false;
  finalTime = FormatTime(new Date() - startTime);
  let percent = (correct/totalQuestions) * 100;

  document.getElementById("incorrect").innerHTML = `You had ${incorrect} incorrect colors out of ${totalQuestions}`
  document.getElementById("correct").innerHTML = `You had ${correct} incorrect colors out of ${totalQuestions}`
  document.getElementById("summary").innerHTML = `You scored a %${percent.toFixed(2)} with a time of ${finalTime}`
}

function GenColor(){
  const bgCenter = "rgba(0, 0, 0, .3)";
  if(colorList.length == (colors.length - totalQuestions)){
    EndGame();
    return;
  }
  guesses = 0;

  curColor = colorList[Randrange(0, colorList.length)]
  curColor.name = curColor.name.toLowerCase();

  document.body.style = `background-image: linear-gradient(.25turn, ${curColor.code}, ${bgCenter}, ${bgCenter}, ${curColor.code});`;

  colorDiv.style.backgroundColor = curColor.code;
  revealedLetters = [];
  totalLetters = [];

  for(let i = 0; i < curColor.name.length; i++){
    let char = curColor.name[i];
    if(!totalLetters.includes(char) && !constReveals.includes(char)){
      totalLetters.push(char);
    }
  }
  
  colorList = colorList.filter(element => element !== curColor);
  
  DrawWord();

  document.getElementById("colorCount").innerHTML = `${colors.length-colorList.length}/${colors.length}`
}

function OnLoad(){
  colorDiv = document.getElementById("colorBox")
  answerBox = document.getElementById("answerBox")
}

function Start(){
  colorList = colors;
  correct = 0; 
  incorrect = 0; 
  lateCorrect = 0;
  totalQuestions = document.getElementById("qNum").value;
  GenColor()

  document.getElementById("home").hidden = true;
  document.getElementById("main").hidden = false;
  startTime = new Date();
}
function ToHome(){
  document.getElementById("home").hidden = false;
  document.getElementById("done").hidden = true;
}

function ButtonCheck(){
  let text = "";
  for(let i = 0; i < textBoxes.length; i++){
    text += textBoxes[i].inputElement.value;
  }
  guesses++;
  if(text.toLowerCase() == curColor.name.toLowerCase().replace(/\s+/g, '')){
    if(guesses <= 6) correct++;
    else incorrect++;
    GenColor();
  }else{
    DrawWord();
  }
}

function GiveUp(){
  revealedLetters = totalLetters + constReveals;
  DrawWord();
  guesses = 99;
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
  guesses++;
  if(text.toLowerCase() == curColor.name.toLowerCase().replace(/\s+/g, '')){
    if(guesses <= 6) correct++;
    else if(guesses <= 15){ 
      lateCorrect++;
      correct++;
    }else incorrect++;
    GenColor()
  }else{
    DrawWord()
  }
}
