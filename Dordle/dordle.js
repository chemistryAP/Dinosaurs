import { aArray, bArray, cArray, dArray, eArray, fArray } from "../Dordle/var"; 
var allArrays = [aArray, bArray, cArray, dArray, eArray, fArray];
document.addEventListener("keydown", handleKeyInput);

var allArrays = [aArray, bArray, cArray, dArray, eArray, fArray];
var index = 0;
var currentArray = 0;


function handleKeyInput(event) {
    arr = getArray();
    key = event.getKey;
    console.log(key);
    arr[index].textContent = key.toUpperCase();
    index++;
}

function handleKeyPadInput(key) {

}

function nextGuess() {

}

function endState() {

}


function getArray() {
    return allArrays[currentArray];
}









var Q = document.getElementById("Q");
var W = document.getElementById("W");
var E = document.getElementById("E");
var R = document.getElementById("R");
var T = document.getElementById("T");
var Y = document.getElementById("Y");
var U = document.getElementById("U");
var I = document.getElementById("I");
var O = document.getElementById("O");
var P = document.getElementById("P");
var A = document.getElementById("A");
var S = document.getElementById("S");
var D = document.getElementById("D");
var F = document.getElementById("F");
var G = document.getElementById("G");
var H = document.getElementById("H");
var J = document.getElementById("J");
var K = document.getElementById("K");
var L = document.getElementById("L");
var ENTER = document.getElementById("ENTER");
var Z = document.getElementById("Z");
var X = document.getElementById("X");
var C = document.getElementById("C");
var V = document.getElementById("V");
var B = document.getElementById("B");
var N = document.getElementById("N");
var M = document.getElementById("M");
var DELETE = document.getElementById("DELETE");v