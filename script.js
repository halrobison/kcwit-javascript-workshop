const addDevSkill = function (skill) {
  let listItem = document.createElement('li');
  listItem.innerHTML = skill;
  document.getElementById("coding-section").appendChild(listItem);
};

const addLadyDev = function (ladydev) {
  let listItem = document.createElement('li');
  listItem.innerHTML = ladydev;
  document.getElementById("fellow-ladydevs").appendChild(listItem);
};

const displayMenu = function (ladydev) {
  let listItem = document.createElement('li');
  listItem.innerHTML = ladydev;
  document.getElementById("fellow-ladydevs").appendChild(listItem);
};

const placeOrder = function (item) {
return 'I\'d like a ' + item + ', please!';
};
const drinkName = 'cocktail';

let numberOfClicks = 0;

let cocktailMenu = ["Python Punch", "HTML Highball", "Vanilla JavaScript Martini", "Hex Code on the Beach", "CitruSS Spritz", "Tequila C#da Water"]

const clickHandler = function (text) {
  numberOfClicks++;
  for (let index = 0; index < cocktailMenu.length; index++) {
    displayMenu(cocktailMenu[index]);
  };

  if (numberOfClicks === 1) {
    alert("You've ordered 1 cocktail. That should be out ASAP!");
  } else if (numberOfClicks <= 3) {
    alert("You've ordered " + numberOfClicks + " cocktails. They should be out ASAP!");
  } else {
    alert("That's a lot of cocktails! You'll be able to order more once you finish the ones you've already ordered.");
  }
};

// Declare brainSkills array below this line

const ccSkills = ["JavaScript Types", "Front-End Architecture", "HTML", "CSS", "Command line operations", "Vim", "Git", "JavaScript Types"];

const ladyDevList = ["Anita", "Gabi", "Amy", "Beth", "Lucie", "Julie"]

document.addEventListener("DOMContentLoaded", function (event) {
  // display button text
   document.getElementById('cocktail-section').innerHTML = placeOrder(drinkName);

  // display skills list
  for (let index = 0; index < ccSkills.length; index++) {
    addDevSkill(ccSkills[index]);
  };

  // display developers list
  for (let index = 0; index < ladyDevList.length; index++) {
    addLadyDev(ladyDevList[index]);
  };

});
