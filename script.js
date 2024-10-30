const meaningList = {
  Apple: "सेब",
  Banana: "केला",
  Mango: "आम",
  Orange: "संतरा",
  Grapes: "अंगूर",
  Pineapple: "अनानास",
  Watermelon: "तरबूज",
  Strawberry: "स्ट्रॉबेरी",
  Guava: "अमरूद",
  Papaya: "पपीता",
  Lemon: "नींबू",
  Peach: "आड़ू",
  Plum: "आलूबुखारा",
  Cherry: "चेरी",
  Pomegranate: "अनार",
  Coconut: "नारियल",
  Lychee: "लीची",
  Apricot: "खुबानी",
  Pear: "नाशपाती",
  Fig: "अंजीर",
  Date: "खजूर",
  Almond: "बादाम",
  Walnut: "अखरोट",
  Cashew: "काजू",
  Pistachio: "पिस्ता",
  Raisin: "किशमिश",
  Carrot: "गाजर",
  Onion: "प्याज",
  Garlic: "लहसुन",
  Spinach: "पालक",
};

const meaningElement = document.getElementById("meaning");
const clearBtn = document.getElementById("clearBtn");
clearBtn.style.display = "none";
function searchMeaning() {
  const inputElement = document.getElementById("meaningInput");
  const query = inputElement.value;
  const meaning = meaningList[query];
  if (meaning) {
    meaningElement.textContent = `You searched for "${query}" and its meaning in Hindi is "${meaning}".`;
    inputElement.value = "";
    clearBtn.style.display = "block";
  } else {
    meaningElement.textContent = `Sorry, "${query}" is not in the dictionary.`;
  }
}

function clearMeaning() {
  meaningElement.textContent = "";
  clearBtn.style.display = "none";
}
