console.log("chaine", typeof chaine);
console.log("bool", typeof bool);
console.log("undef", typeof undef);
console.log("rien", typeof rien);

let v0;
let v1;
let v2;
let v3;

let w0 = "val0";
let w1 = "val1";
let w2 = "val2";
let w3 = "val3";

var prenom = "Thomas";
var nom = "ARMOUGOM";
var status = "célibataire";
var pays = "FRANCE";
var age = "34";

var prenom = "Thomas",
  nom = "ARMOUGOM",
  status = "célibataire",
  pays = "FRANCE",
  age = "34";

let myAge;
let yourAge;

myAge = 26;
yourAge = 30;

console.log("J'ai", myAge, "ans.");
console.log("Vous avez", yourAge, "ans.");

let defi = "Pratiquer les algorithmes en JavaScript";
console.log(defi);
console.log(defi.length);
console.log(defi.toUpperCase());
console.log(defi.toLowerCase());
//-----------------------------------------------------------------------------------------------------------------
console.log(defi.substr(0, 8));
console.log(defi.substring(0, 8));
//-----------------------------------------------------------------------------------------------------------------
let text = "10 jours en JavaScript";
let text1 = text.substring(3);
let text2 = text1.substring(0, 1).toUpperCase() + text1.substring(1);
// let text2 = text1.slice(0, 1).toUpperCase() + text1.substring(1);
console.log(text2);
//-----------------------------------------------------------------------------------------------------------------
console.log(text2.includes("Script"));
//-----------------------------------------------------------------------------------------------------------------
console.log("string".split(""));
console.log(text.split(" "));
let tableau = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(tableau.split(","));
//-----------------------------------------------------------------------------------------------------------------
console.log(text.replace("JavaScript", "PHP"));
//-----------------------------------------------------------------------------------------------------------------
console.log(text.charAt(15), "est le caractere à l'index 15");
console.log(text.charCodeAt(12), "code de caractere de J");
console.log(text.indexOf("a"), "position du premier a");
console.log(text.lastIndexOf("a"), "position du dernier a");
//-----------------------------------------------------------------------------------------------------------------
let phrase =
  "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
console.log(
  phrase.indexOf("parceque"),
  "position de la premiere occurrence de parceque avec la methode indexof"
);
console.log(
  phrase.lastIndexOf("parceque"),
  "position de la derniere occurrence de parceque"
);
console.log(
  phrase.search("parceque"),
  "position de la premiere occurrence de parceque avec la methode search"
);
//-----------------------------------------------------------------------------------------------------------------
console.log(" 10 Jours en JavaScript ".trim());
console.log(
  text.endsWith("t"),
  "verifie si la chaine de caracteres se termine par la chaine de caracteres fournie en argument"
);
const regex = /["a"]/g;
console.log(
  text.match(regex),
  "trouver tous les a dans la chaine de caractere"
);
//-----------------------------------------------------------------------------------------------------------------
console.log("10 Jours en ".concat("JavaScript"));
console.log(text.repeat(2));

//---------------------------------------------------//////--------------------------------------------------------------//

let declaration =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(declaration);
let citation =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(citation);
console.log();
