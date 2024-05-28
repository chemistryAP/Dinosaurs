var keyName;
var currentIndex = 0;
var guesses = 1;
var answer = "Triceratops";
const keysArray = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M",
    "ENTER", "BACKSPACE"
];
var guess1 = [
    document.getElementById("a1"),
    document.getElementById("a2"),
    document.getElementById("a3"),
    document.getElementById("a4"),
    document.getElementById("a5"),
    document.getElementById("a6"),
    document.getElementById("a7"),
    document.getElementById("a8"),
    document.getElementById("a9"),
    document.getElementById("a10"),
    document.getElementById("a11")
];
var guess2 = [
    document.getElementById("b1"),
    document.getElementById("b2"),
    document.getElementById("b3"),
    document.getElementById("b4"),
    document.getElementById("b5"),
    document.getElementById("b6"),
    document.getElementById("b7"),
    document.getElementById("b8"),
    document.getElementById("b9"),
    document.getElementById("b10"),
    document.getElementById("b11")
];
var guess3 = [
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3"),
    document.getElementById("c4"),
    document.getElementById("c5"),
    document.getElementById("c6"),
    document.getElementById("c7"),
    document.getElementById("c8"),
    document.getElementById("c9"),
    document.getElementById("c10"),
    document.getElementById("c11")
];
var guess4 = [
    document.getElementById("d1"),
    document.getElementById("d2"),
    document.getElementById("d3"),
    document.getElementById("d4"),
    document.getElementById("d5"),
    document.getElementById("d6"),
    document.getElementById("d7"),
    document.getElementById("d8"),
    document.getElementById("d9"),
    document.getElementById("d10"),
    document.getElementById("d11")
];
var guess5 = [
    document.getElementById("e1"),
    document.getElementById("e2"),
    document.getElementById("e3"),
    document.getElementById("e4"),
    document.getElementById("e5"),
    document.getElementById("e6"),
    document.getElementById("e7"),
    document.getElementById("e8"),
    document.getElementById("e9"),
    document.getElementById("e10"),
    document.getElementById("e11")
];
var guess6 = [
    document.getElementById("f1"),
    document.getElementById("f2"),
    document.getElementById("f3"),
    document.getElementById("f4"),
    document.getElementById("f5"),
    document.getElementById("f6"),
    document.getElementById("f7"),
    document.getElementById("f8"),
    document.getElementById("f9"),
    document.getElementById("f10"),
    document.getElementById("f11")
];
var currentArr;
document.body.addEventListener("keydown", assignKeyName);
document.querySelectorAll('.key, .specialkey').forEach(button => {
    button.addEventListener('click', function() {
        assignKeyNameButton(button.textContent);
    });
});
function assignKeyName(event) {
    keyName = event.key.toUpperCase();
    console.log(keyName);
}

function assignKeyNameButton(buttonText) {
    if (buttonText === "DELETE") {
        buttonText = "BACKSPACE"
    }
    keyName = buttonText.toUpperCase();
    console.log(keyName);
}

function evalKey() {

}


