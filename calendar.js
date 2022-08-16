const selectMonth = document.querySelector("#select-month");
const selectLeft = document.querySelector("#select-left");
const selectRight = document.querySelector("#select-right");

const oneS = document.querySelector("#sa1");
const twoS = document.querySelector("#sa2");
const threeS = document.querySelector("#sa3");
const fourS = document.querySelector("#sa4");
const fiveS = document.querySelector("#sa5");
const sixS = document.querySelector("#sa6");
const sevenS = document.querySelector("#sa7");

const eightS = document.querySelector("#sa8");
const nineS = document.querySelector("#sa9");
const tenS = document.querySelector("#sa10");
const elevenS = document.querySelector("#sa11");
const twelveS = document.querySelector("#sa12");
const thirteenS = document.querySelector("#sa13");
const fourteenS = document.querySelector("#sa14");

const fifteenS = document.querySelector("#sa15");
const sixteenS = document.querySelector("#sa16");
const seventeenS = document.querySelector("#sa17");
const eighteenS = document.querySelector("#sa18");
const nineteenS = document.querySelector("#sa19");
const twentyS = document.querySelector("#sa20");
const twentyOneS = document.querySelector("#sa21");

const twentyTwoS = document.querySelector("#sa22");
const twentyThreeS = document.querySelector("#sa23");
const twentyFourS = document.querySelector("#sa24");
const twentyFiveS = document.querySelector("#sa25");
const twentySixS = document.querySelector("#sa26");
const twentySevenS = document.querySelector("#sa27");
const twentyEightS = document.querySelector("#sa28");

const twentyNineS = document.querySelector("#sa29");
const thirtyS = document.querySelector("#sa30");
const thirtyOneS = document.querySelector("#sa31");

let monthNumber = 7;

oneS.value = "Javelin Event";
twelveS.value = "Javelin Result";
twentyOneS.value = "Colchis Website Launch";

selectLeft.addEventListener("click", () => {
  if (monthNumber == 12) {
    selectMonth.value = "November";
    oneS.value = "Start a War";
    eightS.value = "Hades One Man Show";
    monthNumber--;
  } else if (monthNumber == 11) {
    selectMonth.value = "October";
    elevenS.value = "Poseidon Tsunami Day";
    twentySixS.value = "Selene great Eclipse";
    twentySevenS.value = "Scylla Annual Hunting";
    thirtyS.value = "Ouranos Night";
    monthNumber--;
  } else if (monthNumber == 10) {
    selectMonth.value = "September";
    fifteenS.value = "Aeolus Festival";
    monthNumber--;
  } else if (monthNumber == 9) {
    selectMonth.value = "August";
    fourS.value = "King Vacations";
    twentySixS.value = "End of King Vacations";
    monthNumber--;
  } else if (monthNumber == 8) {
    selectMonth.value = "July";
    oneS.value = "Javelin Event";
    twelveS.value = "Javelin Result";
    twentyOneS.value = "Colchis Website Launch";
    monthNumber--;
  } else if (monthNumber == 7) {
    selectMonth.value = "June";
    nineS.value = " Hestia Rest Day";
    tenS.value = "The Argo Launch";
    monthNumber--;
  } else if (monthNumber == 6) {
    selectMonth.value = "May";
    thirtyS.value = "Dionysus Wine Festival";
    monthNumber--;
  } else if (monthNumber == 5) {
    selectMonth.value = "April";
    fiveS.value = "Hercules Fan Meeting";
    twentyTwoS.value = "Gaia's harvest";
    twentyFiveS.value = "Athena Wisdom Convention";
    twentySixS.value = "Ares War Convention";
    monthNumber--;
  } else if (monthNumber == 4) {
    selectMonth.value = "March";
    threeS.value = "Zeus Orgy Marathon";
    sixteenS.value = "End of Zeus Orgy Marathon";
    twentyFourS.value = "AIDS check";
    monthNumber--;
  } else if (monthNumber == 3) {
    selectMonth.value = "February";
    twentyEightS.value = "Cerberus Contest";
    monthNumber--;
  } else if (monthNumber == 2) {
    selectMonth.value = "January";
    twelveS.value = "Appolo Fashion Show";
    nineteenS.value = "Great Hephaestus Sales";
    monthNumber--;
  } else {
  }

  if (monthNumber !== 12) {
    sixS.value = "";
    thirtyOneS.value = "";
  }
  if (monthNumber !== 11) {
    eightS.value = "";
  }
  if (monthNumber !== 10) {
    elevenS.value = "";
    twentySevenS.value = "";
    thirtyS.value = "";
  }
  if (monthNumber !== 9) {
    fifteenS.value = "";
  }
  if (monthNumber !== 8) {
    fourS.value = "";
  }
  if (monthNumber !== 7) {
    twentyOneS.value = "";
  }
  if (monthNumber !== 6) {
    nineS.value = "";
    tenS.value = "";
  }
  if (monthNumber !== 5) {
    thirtyS.value = "";
  }
  if (monthNumber !== 4) {
    fiveS.value = "";
    twentyTwoS.value = "";
    twentyFiveS.value = "";
  }
  if (monthNumber !== 3) {
    threeS.value = "";
    sixteenS.value = "";
    twentyFourS.value = "";
  }
  if (monthNumber !== 2) {
    twentyEightS.value = "";
  }
  if (monthNumber !== 1) {
    nineteenS.value = "";
  }
  if (monthNumber !== 7 && monthNumber !== 11) {
    oneS.value = "";
  }
  if (monthNumber !== 7 && monthNumber !== 1) {
    twelveS.value = "";
  }
  if (monthNumber !== 4 && monthNumber !== 8 && monthNumber !== 10) {
    twentySixS.value = "";
  }
});

selectRight.addEventListener("click", () => {
  if (monthNumber == 1) {
    selectMonth.value = "February";
    twentyEightS.value = "Cerberus Contest";
    monthNumber++;
  } else if (monthNumber == 2) {
    selectMonth.value = "March";
    threeS.value = "Zeus Orgy Marathon";
    sixteenS.value = "End of Zeus Orgy Marathon";
    twentyFourS.value = "AIDS check";
    monthNumber++;
  } else if (monthNumber == 3) {
    selectMonth.value = "April";
    fiveS.value = "Hercules Fan Meeting";
    twentyTwoS.value = "Gaia's harvest";
    twentyFiveS.value = "Athena Wisdom Convention";
    twentySixS.value = "Ares War Convention";
    monthNumber++;
  } else if (monthNumber == 4) {
    selectMonth.value = "May";
    thirtyS.value = "Dionysus Wine Festival";
    monthNumber++;
  } else if (monthNumber == 5) {
    selectMonth.value = "June";
    nineS.value = " Hestia Rest Day";
    tenS.value = "The Argo Launch";
    monthNumber++;
  } else if (monthNumber == 6) {
    selectMonth.value = "July";
    oneS.value = "Javelin Event";
    twelveS.value = "Javelin Result";
    twentyOneS.value = "Colchis Website Launch";
    monthNumber++;
  } else if (monthNumber == 7) {
    selectMonth.value = "August";
    fourS.value = "King Vacations";
    twentySixS.value = "End of King Vacations";
    monthNumber++;
  } else if (monthNumber == 8) {
    selectMonth.value = "September";
    fifteenS.value = "Aeolus Festival";
    monthNumber++;
  } else if (monthNumber == 9) {
    selectMonth.value = "October";
    elevenS.value = "Poseidon Tsunami Day";
    twentySixS.value = "Selene great Eclipse";
    twentySevenS.value = "Scylla Annual Hunting";
    thirtyS.value = "Ouranos Night";
    monthNumber++;
  } else if (monthNumber == 10) {
    selectMonth.value = "November";
    oneS.value = "Start a War";
    eightS.value = "Hades One Man Show";
    monthNumber++;
  } else if (monthNumber == 11) {
    selectMonth.value = "December";
    sixS.value = "Titans Awakening";
    thirtyOneS.value = "Olympus Cleanup";
    monthNumber++;
  } else {
  }

  if (monthNumber !== 12) {
    sixS.value = "";
    thirtyOneS.value = "";
  }
  if (monthNumber !== 11) {
    eightS.value = "";
  }
  if (monthNumber !== 10) {
    elevenS.value = "";
    twentySevenS.value = "";
  }
  if (monthNumber !== 9) {
    fifteenS.value = "";
  }
  if (monthNumber !== 8) {
    fourS.value = "";
  }
  if (monthNumber !== 7) {
    twelveS.value = "";
    twentyOneS.value = "";
  }
  if (monthNumber !== 6) {
    nineS.value = "";
    tenS.value = "";
  }
  if (monthNumber !== 4) {
    fiveS.value = "";
    twentyTwoS.value = "";
    twentyFiveS.value = "";
  }
  if (monthNumber !== 3) {
    threeS.value = "";
    sixteenS.value = "";
    twentyFourS.value = "";
  }
  if (monthNumber !== 2) {
    twentyEightS.value = "";
  }
  if (monthNumber !== 1) {
    nineteenS.value = "";
  }
  if (monthNumber !== 7 && monthNumber !== 11) {
    oneS.value = "";
  }
  if (monthNumber !== 7 && monthNumber !== 1) {
    twelveS.value = "";
  }
  if (monthNumber !== 5 && monthNumber !== 10) {
    thirtyS.value = "";
  }
  if (monthNumber !== 4 && monthNumber !== 8 && monthNumber !== 10) {
    twentySixS.value = "";
  }
});
