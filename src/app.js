const dakuten = [
  "ぱ",
  "ば",
  "だ",
  "ざ",
  "が",
  "ぴ",
  "び",
  "ぢ",
  "じ",
  "ぎ",
  "ぷ",
  "ぶ",
  "づ",
  "ず",
  "ぐ",
  "ぺ",
  "べ",
  "で",
  "ぜ",
  "げ",
  "ぽ",
  "ぼ",
  "ど",
  "ぞ",
  "ご"
];
const youon = ["や", "ゆ", "よ", "つ", "い"];

const bangoDaku = [
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
  "25"
];
const bangouYouon = ["1", "2", "3", "4", "5"];

const fontDarkColor1 = "white";
const fontDarkColor2 = "black";
document.getElementById("daku" + bangoDaku[0]).innerText = dakuten[0];
document.getElementById("daku" + bangoDaku[1]).innerText = dakuten[1];
document.getElementById("daku" + bangoDaku[2]).innerText = dakuten[2];
document.getElementById("daku" + bangoDaku[3]).innerText = dakuten[3];
document.getElementById("daku" + bangoDaku[4]).innerText = dakuten[4];
document.getElementById("daku" + bangoDaku[5]).innerText = dakuten[5];
document.getElementById("daku" + bangoDaku[6]).innerText = dakuten[6];
document.getElementById("daku" + bangoDaku[7]).innerText = dakuten[7];
document.getElementById("daku" + bangoDaku[8]).innerText = dakuten[8];
document.getElementById("daku" + bangoDaku[9]).innerText = dakuten[9];
document.getElementById("daku" + bangoDaku[10]).innerText = dakuten[10];
document.getElementById("daku" + bangoDaku[11]).innerText = dakuten[11];
document.getElementById("daku" + bangoDaku[12]).innerText = dakuten[12];
document.getElementById("daku" + bangoDaku[13]).innerText = dakuten[13];
document.getElementById("daku" + bangoDaku[14]).innerText = dakuten[14];
document.getElementById("daku" + bangoDaku[15]).innerText = dakuten[15];
document.getElementById("daku" + bangoDaku[16]).innerText = dakuten[16];
document.getElementById("daku" + bangoDaku[17]).innerText = dakuten[17];
document.getElementById("daku" + bangoDaku[18]).innerText = dakuten[18];
document.getElementById("daku" + bangoDaku[19]).innerText = dakuten[19];
document.getElementById("daku" + bangoDaku[20]).innerText = dakuten[20];
document.getElementById("daku" + bangoDaku[21]).innerText = dakuten[21];
document.getElementById("daku" + bangoDaku[22]).innerText = dakuten[22];
document.getElementById("daku" + bangoDaku[23]).innerText = dakuten[23];
document.getElementById("daku" + bangoDaku[24]).innerText = dakuten[24];

document.getElementById("youon" + bangouYouon[0]).innerText = youon[0];
document.getElementById("youon" + bangouYouon[1]).innerText = youon[1];
document.getElementById("youon" + bangouYouon[2]).innerText = youon[2];
document.getElementById("youon" + bangouYouon[3]).innerText = youon[3];
document.getElementById("youon" + bangouYouon[4]).innerText = youon[4];

const sakiDaku = document.getElementById("saki");
const bDaku = 0;

////////////////////////////////////////////////////////////////
youonNoidou1();
function youonNoidou1() {
  const a = 1;
  const moji = youon[a - 1];
  const you = document.getElementById("youon" + bangouYouon[a - 1]);
  you.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement2 = document.createElement("div");
      newElement2.setAttribute("id", "newElement2");
      sakiDaku.appendChild(newElement2);
      you.style.color = fontDarkColor1;
      newElement2.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      you.innerText = moji;
      you.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////////////
youonNoidou2();
function youonNoidou2() {
  const a = 2;
  const moji = youon[a - 1];
  const you = document.getElementById("youon" + bangouYouon[a - 1]);
  you.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement2 = document.createElement("div");
      newElement2.setAttribute("id", "newElement2");
      sakiDaku.appendChild(newElement2);
      you.style.color = fontDarkColor1;
      newElement2.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      you.innerText = moji;
      you.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////////////
youonNoidou3();
function youonNoidou3() {
  const a = 3;
  const moji = youon[a - 1];
  const you = document.getElementById("youon" + bangouYouon[a - 1]);
  you.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement2 = document.createElement("div");
      newElement2.setAttribute("id", "newElement2");
      sakiDaku.appendChild(newElement2);
      you.style.color = fontDarkColor1;
      newElement2.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      you.innerText = moji;
      you.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////////////
youonNoidou4();
function youonNoidou4() {
  const a = 4;
  const moji = youon[a - 1];
  const you = document.getElementById("youon" + bangouYouon[a - 1]);
  you.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement2 = document.createElement("div");
      newElement2.setAttribute("id", "newElement2");
      sakiDaku.appendChild(newElement2);
      you.style.color = fontDarkColor1;
      newElement2.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      you.innerText = moji;
      you.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////////////
youonNoidou5();
function youonNoidou5() {
  const a = 5;
  const moji = youon[a - 1];
  const you = document.getElementById("youon" + bangouYouon[a - 1]);
  you.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement2 = document.createElement("div");
      newElement2.setAttribute("id", "newElement2");
      sakiDaku.appendChild(newElement2);
      you.style.color = fontDarkColor1;
      newElement2.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      you.innerText = moji;
      you.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////////////
idou1();
function idou1() {
  const a = 1;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou2();
function idou2() {
  const a = 2;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou3();
function idou3() {
  const a = 3;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou4();
function idou4() {
  const a = 4;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou5();
function idou5() {
  const a = 5;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou6();
function idou6() {
  const a = 6;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou7();
function idou7() {
  const a = 7;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou8();
function idou8() {
  const a = 8;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou9();
function idou9() {
  const a = 9;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou10();
function idou10() {
  const a = 10;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou11();
function idou11() {
  const a = 11;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou12();
function idou12() {
  const a = 12;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou13();
function idou13() {
  const a = 13;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou14();
function idou14() {
  const a = 14;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou15();
function idou15() {
  const a = 15;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou16();
function idou16() {
  const a = 16;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou17();
function idou17() {
  const a = 17;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou18();
function idou18() {
  const a = 18;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou19();
function idou19() {
  const a = 19;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou20();
function idou20() {
  const a = 20;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou21();
function idou21() {
  const a = 21;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou22();
function idou22() {
  const a = 22;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou23();
function idou23() {
  const a = 23;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou24();
function idou24() {
  const a = 24;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
idou25();
function idou25() {
  const a = 25;
  const moji = dakuten[a - 1];
  const daku = document.getElementById("daku" + bangoDaku[a - 1]);
  daku.addEventListener("click", () => {
    const num = sakiDaku.childElementCount;
    if (num < dakuten.length + bDaku) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", "newElement");
      sakiDaku.appendChild(newElement);
      daku.style.color = fontDarkColor1;
      newElement.innerText = moji;
    }
    sakiDaku.addEventListener("click", () => {
      const num = sakiDaku.childElementCount;
      if (num >= 1) {
        sakiDaku.lastChild.remove();
      }
      daku.innerText = moji;
      daku.style.color = fontDarkColor2;
    });
  });
}
////////////////////////////////////////////////////////
