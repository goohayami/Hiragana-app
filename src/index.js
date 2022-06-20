const hiragana = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "か",
  "き",
  "く",
  "け",
  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "や",
  "ゆ",
  "よ",
  "わ",
  "を",
  "ん",
  "、",
  "。",
  "ー"
];
const bango = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49"
];
const fontColor1 = "white";
const fontColor2 = "black";
document.getElementById("moto" + bango[0]).innerText = hiragana[0];
document.getElementById("moto" + bango[1]).innerText = hiragana[1];
document.getElementById("moto" + bango[2]).innerText = hiragana[2];
document.getElementById("moto" + bango[3]).innerText = hiragana[3];
document.getElementById("moto" + bango[4]).innerText = hiragana[4];
document.getElementById("moto" + bango[5]).innerText = hiragana[5];
document.getElementById("moto" + bango[6]).innerText = hiragana[6];
document.getElementById("moto" + bango[7]).innerText = hiragana[7];
document.getElementById("moto" + bango[8]).innerText = hiragana[8];
document.getElementById("moto" + bango[9]).innerText = hiragana[9];
document.getElementById("moto" + bango[10]).innerText = hiragana[10];
document.getElementById("moto" + bango[11]).innerText = hiragana[11];
document.getElementById("moto" + bango[12]).innerText = hiragana[12];
document.getElementById("moto" + bango[13]).innerText = hiragana[13];
document.getElementById("moto" + bango[14]).innerText = hiragana[14];
document.getElementById("moto" + bango[15]).innerText = hiragana[15];
document.getElementById("moto" + bango[16]).innerText = hiragana[16];
document.getElementById("moto" + bango[17]).innerText = hiragana[17];
document.getElementById("moto" + bango[18]).innerText = hiragana[18];
document.getElementById("moto" + bango[19]).innerText = hiragana[19];
document.getElementById("moto" + bango[20]).innerText = hiragana[20];
document.getElementById("moto" + bango[21]).innerText = hiragana[21];
document.getElementById("moto" + bango[22]).innerText = hiragana[22];
document.getElementById("moto" + bango[23]).innerText = hiragana[23];
document.getElementById("moto" + bango[24]).innerText = hiragana[24];
document.getElementById("moto" + bango[25]).innerText = hiragana[25];
document.getElementById("moto" + bango[26]).innerText = hiragana[26];
document.getElementById("moto" + bango[27]).innerText = hiragana[27];
document.getElementById("moto" + bango[28]).innerText = hiragana[28];
document.getElementById("moto" + bango[29]).innerText = hiragana[29];
document.getElementById("moto" + bango[30]).innerText = hiragana[30];
document.getElementById("moto" + bango[31]).innerText = hiragana[31];
document.getElementById("moto" + bango[32]).innerText = hiragana[32];
document.getElementById("moto" + bango[33]).innerText = hiragana[33];
document.getElementById("moto" + bango[34]).innerText = hiragana[34];
document.getElementById("moto" + bango[35]).innerText = hiragana[35];
document.getElementById("moto" + bango[36]).innerText = hiragana[36];
document.getElementById("moto" + bango[37]).innerText = hiragana[37];
document.getElementById("moto" + bango[38]).innerText = hiragana[38];
document.getElementById("moto" + bango[39]).innerText = hiragana[39];
document.getElementById("moto" + bango[40]).innerText = hiragana[40];
document.getElementById("moto" + bango[41]).innerText = hiragana[41];
document.getElementById("moto" + bango[42]).innerText = hiragana[42];
document.getElementById("moto" + bango[43]).innerText = hiragana[43];
document.getElementById("moto" + bango[44]).innerText = hiragana[44];
document.getElementById("moto" + bango[45]).innerText = hiragana[45];
document.getElementById("moto" + bango[46]).innerText = hiragana[46];
document.getElementById("moto" + bango[47]).innerText = hiragana[47];
document.getElementById("moto" + bango[48]).innerText = hiragana[48];

const saki = document.getElementById("saki");
const b = 0;
////////////////////////////////////////////////////////////////
idou1();
function idou1() {
  const a = 1;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou2();
function idou2() {
  const a = 2;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou3();
function idou3() {
  const a = 3;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou4();
function idou4() {
  const a = 4;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou5();
function idou5() {
  const a = 5;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou6();
function idou6() {
  const a = 6;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou7();
function idou7() {
  const a = 7;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
} ////////////////////////////////////////////////////////
idou8();
function idou8() {
  const a = 8;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
} ////////////////////////////////////////////////////////
idou9();
function idou9() {
  const a = 9;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou10();
function idou10() {
  const a = 10;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou11();
function idou11() {
  const a = 11;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
        kana.style.color = fontColor2;
      }
      kana.innerText = moji;
    });
  });
}
////////////////////////////////////////////////////////
idou12();
function idou12() {
  const a = 12;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou13();
function idou13() {
  const a = 13;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou14();
function idou14() {
  const a = 14;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou15();
function idou15() {
  const a = 15;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou16();
function idou16() {
  const a = 16;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou17();
function idou17() {
  const a = 17;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou18();
function idou18() {
  const a = 18;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou19();
function idou19() {
  const a = 19;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou20();
function idou20() {
  const a = 20;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou21();
function idou21() {
  const a = 21;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou22();
function idou22() {
  const a = 22;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou23();
function idou23() {
  const a = 23;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou24();
function idou24() {
  const a = 24;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou25();
function idou25() {
  const a = 25;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou26();
function idou26() {
  const a = 26;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou27();
function idou27() {
  const a = 27;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou28();
function idou28() {
  const a = 28;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou29();
function idou29() {
  const a = 29;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou30();
function idou30() {
  const a = 30;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou31();
function idou31() {
  const a = 31;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou32();
function idou32() {
  const a = 32;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou33();
function idou33() {
  const a = 33;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou34();
function idou34() {
  const a = 34;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou35();
function idou35() {
  const a = 35;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou36();
function idou36() {
  const a = 36;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou37();
function idou37() {
  const a = 37;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou38();
function idou38() {
  const a = 38;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou39();
function idou39() {
  const a = 39;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou40();
function idou40() {
  const a = 40;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou41();
function idou41() {
  const a = 41;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou42();
function idou42() {
  const a = 42;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou43();
function idou43() {
  const a = 43;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou44();
function idou44() {
  const a = 44;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou45();
function idou45() {
  const a = 45;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou46();
function idou46() {
  const a = 46;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou47();
function idou47() {
  const a = 47;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou48();
function idou48() {
  const a = 48;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou49();
function idou49() {
  const a = 49;
  const moji = hiragana[a - 1];
  const kana = document.getElementById("moto" + bango[a - 1]);
  kana.addEventListener("click", () => {
    const num = saki.childElementCount;
    if (num < hiragana.length + b) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      saki.appendChild(newElement);
      kana.style.color = fontColor1;
      newElement.innerText = moji;
    }
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
      kana.style.color = fontColor2;
    });
  });
}
