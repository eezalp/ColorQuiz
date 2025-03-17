var colorList = [];
var colors = {"colors":[]};
var questions = 0, correct = 0;
var curColor = null;
var colorDiv = null;
var textBox = null;
var answerBox = null;

var constReveals = [' ', '-', '\'']
var revealedLetters = [];
var totalLetters = [];

var textBoxes = [];

const groups = ["beta", "release", "red", "green", "blue", "rgb"];

var correct = 0, incorrect = 0, lateCorrect = 0;
var guesses = 0, incorrectGuesses = 0, correctGuesses = 0;
var totalQuestions = 0;
var totalLettersRevealed = 0;

var focusDirection = false; // false == backwards, true == forwards

var nextKeys = ["ArrowRight", "Tab"]
var prevKeys = ["ArrowLeft", "Backspace"]

var startTime = null, finalTime = null;

var timerInterval = null;

var baseURL = null;

var barShown = false;

var packs = [];

var listButs = {};
var listDisp = {};

var colorTimes = [];
var colorStart = null;

var betaListBut = null, betaListDisp = null;
var releaseListBut = null, releaseListDisp = null;

var curList = "beta";

var name = "dsa";

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

    if(this.index == 0){
      focusDirection = true;
      this.OnFocus();
      this.inputElement.focus();
    }
  }
};
customElements.define('letter-box', LetterBox);

function GetSheetID(sheetName){
  switch(sheetName){
    case "beta":
      return "0";
    case "release":
      return "1224037775";
    case "red":
      return "489072246";
    case "green":
      return "134754221";
    case "blue":
      return "463850702";
    case "rgb":
      return "623713731";
  }
}

async function LoadLBPage(page, sheetName){
  try {
    const resp = await fetch(`https://cqlb.netlify.app/.netlify/functions/read?page=${page}&sheetName=${sheetName}&sheetId=${GetSheetID(sheetName)}`);
    // console.log(resp);
    const json = await resp.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function WriteScore(name, percent, time, hints, slowColor, sheetName){
  fetch(`https://cqlb.netlify.app/.netlify/functions/write?name=${name}&percent=${percent}&time=${time}&hints=${hints}&slowColor=${slowColor}&sheetName=${sheetName}&sheetId=${GetSheetID(sheetName)}`);
}

function FormatTime(diff) {
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  const milliseconds = String(Math.floor((diff % 1000)/10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}
function TimerChange() {
  document.getElementById("timerBox").innerHTML = FormatTime(new Date() - startTime);
}

function RevealLetter(){
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
  let incorrectSlider = document.getElementById("incorrectSlider");
  let correctSlider = document.getElementById("correctSlider");
  let percent = (correct/totalQuestions);
  let endTime = new Date();
  let extraTime = FormatTime(totalLettersRevealed * 10000);
  let actualTime = FormatTime(endTime - startTime);
  finalTime = FormatTime((endTime - startTime) + (totalLettersRevealed * 10000));

  // document.body.style = `background-image: linear-gradient(.25turn, #000000, #EEEEEE, #000000);`;
  clearInterval(timerInterval);
  document.getElementById("main").hidden = true;
  document.getElementById("done").hidden = false;

  document.getElementById("incorrect").innerHTML = `You had ${incorrect} incorrect colors out of ${totalQuestions}`
  document.getElementById("correct").innerHTML = `You had ${correct} correct colors out of ${totalQuestions}`
  document.getElementById("realTime").innerHTML = `Real time: ${actualTime}`
  document.getElementById("penalty").innerHTML = `Penalty: ${extraTime}`
  document.getElementById("total").innerHTML = `Total Time: ${finalTime}`
  
  incorrectSlider.max = totalQuestions;
  incorrectSlider.value = incorrect;
  correctSlider.max = totalQuestions;
  correctSlider.value = correct;

  const max = colorTimes.reduce(function(prev, current) {
    return (prev && prev.time > current.time) ? prev : current
  })

  console.log(`Longest color was ${max.code} with a time of ${max.time}`);

  if(name){
    WriteScore(name, percent, (endTime - startTime) + (totalLettersRevealed * 10000), guesses, max.code.substring(1), curList);
  }

}

function HideBar(){
  let bar = document.getElementById("topBar");
  let but = document.getElementById("topBarBut");

  bar.style = barShown ? "height: 0%;" : "height: 6%;";
  but.style = barShown ? "transform: rotate(0deg);" : "transform: rotate(90);";

  barShown = !barShown;
}

function GenColor(){
  const bgCenter = "rgba(0, 0, 0, .3)";

  if(colorStart != null){
    colorTimes.push(
      {
        "code": curColor.code,
        "time": new Date() - colorStart
      }
    );
  }
  if(colorList.length == (colors.colors.length - totalQuestions)){
    GoTo("results");
    return;
  }
  guesses = 0;

  curColor = colorList[Randrange(0, colorList.length)]
  curColor.name = curColor.name.toLowerCase();

  // document.body.style = `background-image: linear-gradient(.25turn, ${curColor.code}, ${bgCenter}, ${bgCenter}, ${curColor.code});`;
  document.getElementById("question").style = `background-color: ${curColor.code};`
  colorDiv.style.backgroundColor = curColor.code;
  revealedLetters = [];
  totalLetters = [];
  packs = [];

  for(let i = 0; i < curColor.name.length; i++){
    let char = curColor.name[i];
    if(!totalLetters.includes(char) && !constReveals.includes(char)){
      totalLetters.push(char);
    }
  }
  
  colorList = colorList.filter(element => element !== curColor);
  
  DrawWord();

  document.getElementById("colorCount").innerHTML = `${colors.colors.length-colorList.length}/${totalQuestions}`
  colorStart = new Date();
}

function GetJson(pack){
  const request = new XMLHttpRequest();
  request.open("GET", "/ColorPacks/" + pack, false); // `false` makes the request synchronous
  request.send(null);
  if (request.status === 200) {
    return request.responseText;
  }
  return null;
}

function GetPacks(){
  colors = {"colors":[]};
  packs = [];
  switch(curList){
    case "beta":
      packs = ["beta.json"];
      break;
    case "release":
      packs = ["beta.json", "release.json"];
      break;
    case "rgb":
      packs = ["red.json", "green.json", "blue.json"];
      break;
    default:
      packs = [`${curList}.json`];
  }
  for(const pack in packs){
    let tmp = JSON.parse(GetJson(packs[pack]));
    if(tmp){
      for(let i = 0; i < tmp.colors.length; i++){
        colors.colors.push(tmp.colors[i]);
      }
    }
  }
}

function ScrollEase(e, elemen) {
  elemen.scrollTo(0, (elemen.scrollTop + 10) - e.wheelDelta/10);
  console.log("scrolling");
  e.returnValue = false;
  e.cancelBubble = true;
  return false;
}
function OnLoad(){
  if(window.location.href.split('#')[1]){
    window.location.href = window.location.href.split('#')[0];
  }
  baseURL = window.location.href.split('#')[0];
  
  for(let i = 0; i < groups.length; i++){
    let k = groups[i];
    listButs[k] = document.getElementById(k); 
    listDisp[k] = document.getElementById(`${k}Display`);
    if(!listDisp[k]){
      console.log(`${k}Display not found`)
    }
    listDisp[k].hidden = true;
    listDisp[k].addEventListener("wheel", function(e){
      ScrollEase(e, listDisp[k]);
    });

    listButs[k].addEventListener("click", function(){
      if(this.classList.contains("listButtonDeselected")){
        for(const key_ in listButs){
          listButs[key_].classList.add("listButtonDeselected");
          listButs[key_].classList.remove("listButtonSelected");
        }
        for(const key2 in listDisp){
          listDisp[key2].hidden = !(key2 == k);
        }
        this.classList.remove("listButtonDeselected");
        this.classList.add("listButtonSelected");
        curList = k;
      }
    });
    listButs[k].classList.add("listButtonDeselected");
    listButs[k].classList.remove("listButtonSelected");
  }

  listDisp.beta.hidden = false;
  listButs.beta.classList.remove("listButtonDeselected");
  listButs.beta.classList.add("listButtonSelected");

  colorDiv = document.getElementById("colorBox")
  answerBox = document.getElementById("answerBox")

  let penaltyPopup = document.getElementById("penaltyPopup");
  let penaltyText = document.getElementById("penalty");
  penaltyText.addEventListener("mouseenter", function(){
    penaltyPopup.classList.add("popupEnabled");
    penaltyPopup.classList.remove("popupDisabled");
  });
  penaltyText.addEventListener("mouseleave", function(){
    penaltyPopup.classList.remove("popupEnabled");
    penaltyPopup.classList.add("popupDisabled");
  });

  GoTo("home");
}

function StartBut(){
  name = document.getElementById("nameSelctor").value;
  if(!name){
    if(confirm("You are going to start without a name. Your score will not be saved. Continue?")){
      GoTo("game");
    }else{
      document.getElementById("nameSelctor").focus();
    }
  }else{
    GoTo("game");
  }
}

function GoTo(hash){
  window.location.href = baseURL + '#' + hash;
}

function Start(){
  GetPacks();
  colorList = colors.colors;
  correct = 0; 
  incorrect = 0; 
  lateCorrect = 0;
  totalLettersRevealed = 0;
  colorStart = null;;

  totalQuestions = colors.colors.length;
  GenColor()

  document.getElementById("home").hidden = true;
  document.getElementById("main").hidden = false;
  startTime = new Date();
  timerInterval = setInterval(TimerChange, 10);
}
function ToHome(){
  for(let i = 0; i < groups.length; i++){
    const group = groups[i];
    
    let LB = document.getElementById(`LB${group}`);
    LoadLBPage(0, group).then(dat => {
      console.log(dat);
      let setForDeletion = LB.lastChild;
      while(setForDeletion){
        setForDeletion.remove();
        setForDeletion = LB.lastChild;
      }
    
      for(let i = 0; i < 50; i++){
        let entry = dat.data[i];
        if(entry){
          let tr = document.createElement("tr");
          let th = document.createElement("th");
          tr.style = `background-color: ${entry[4]};`;
    
          th.scope = "row";
          th.classList.add("row");
          th.innerHTML = `${i + 1})`;
    
          tr.appendChild(th);
    
          for(let _ = 0; _ < 4; _++){
            let td = document.createElement("td");
            td.innerHTML = _ == 2 ? FormatTime(entry[_]) : entry[_];
            tr.appendChild(td);
          }
          LB.appendChild(tr);
        }
      }
    });
  }
}

function ReadBoxes(){
  let text = "";
  for(let i = 0; i < textBoxes.length; i++){
    text += textBoxes[i].inputElement.value;
  }
  return text;
}

function ButtonCheck(){
  CheckAnswer(ReadBoxes());
}

function GiveUp(){
  revealedLetters = totalLetters + constReveals;
  DrawWord();
  guesses = 99999;
}

function Check(){
  let text = ReadBoxes();
  if(text.length != curColor.name.replace(/\s+/g, '').length){
    return;
  }
  CheckAnswer(text);
}

function CheckAnswer(text){
  guesses++;
  if(text.toLowerCase() == curColor.name.toLowerCase().replace(/\s+/g, '')){
    if(guesses <= 99){
      correct++;
      correctGuesses++;
      if(guesses <= 15) lateCorrect++;
      totalLettersRevealed += Math.max(revealedLetters.length - 1, 0);
    }else{
      incorrect++;
      incorrectGuesses++;
    }
    
    GenColor();
  }else{
    DrawWord();
  }
}

window.addEventListener('hashchange', function (e) {
  var hash = window.location.hash;
  
  if(hash === '#results'){
    document.getElementById("home").hidden = true;
    document.getElementById("done").hidden = false;
    document.getElementById("main").hidden = true;
    EndGame();
  }else if(hash === '#home'){
    if(timerInterval) clearInterval(timerInterval);
    ToHome();
    document.getElementById("home").hidden = false;
    document.getElementById("done").hidden = true;
    document.getElementById("main").hidden = true;
  }else if(hash === '#game'){
    document.getElementById("home").hidden = true;
    document.getElementById("done").hidden = true;
    document.getElementById("main").hidden = false;
    Start();
  }
});