import { suspects, rooms, weapons } from "../../data.js";
import "./mainsection.styles.css";

window.clickedSuspect = clickedSuspect;
window.clickedWeapon = clickedWeapon;
window.clickedRoom = clickedRoom;
window.comparison = comparison;

//Comparison of conclusions
function comparison() {
  const userSelectedSuspect =
    document.getElementsByClassName("killer")[0].innerText;
  console.log(" 👉 👉 / comparison / userSelectedSuspect", userSelectedSuspect);

  const userSelectedRoom = document.getElementsByClassName("room")[0].innerText;
  console.log(" 👉 👉 / comparison / userSelectedRoom", userSelectedRoom);

  const userSelectedWeapon =
    document.getElementsByClassName("weapon")[0].innerText;
  console.log(" 👉 👉 / comparison / userSelectedWeapon", userSelectedWeapon);

  console.log(" 👉 👉 / comparison / randomSuspect:", randomSuspect);
  console.log(
    " 👉 👉 / comparison / userSelectedSuspect:",
    userSelectedSuspect
  );
  // console.log(" 👉 👉 / comparison / randomWeapons:", randomWeapons);
  // console.log(" 👉 👉 / comparison / userSelectedWeapon:", userSelectedWeapon);
  // console.log(" 👉 👉 / comparison / randomRooms:", randomRooms);
  // console.log(" 👉 👉 / comparison / userSelectedRoom:", userSelectedRoom);

  if (
    randomSuspect === userSelectedSuspect &&
    randomWeapons === userSelectedWeapon &&
    randomRooms === userSelectedRoom
  ) {
    alert("Yuhuuu, you are a super star ⭐!");
    window.location.reload();
  } else {
    alert("Sorry, you didn't get it!");
    alert(
      `The real killer is ${randomSuspect} that used a ${randomWeapons} to kill Miss. Maria Lopen in the ${randomRooms} 😱!`
    );
    window.location.reload();
  }
}

// comparison();

function clickedSuspect(suspect) {
  console.log(" 👉 👉 / clickedSuspect / suspect", suspect);
  const suspectSelected =
    suspect.getElementsByClassName("suspectName")[0].textContent;

  suspect.parentNode.remove(document.getElementById("theSuspect"));
  //it's connected with the Conclusion Section
  document.getElementsByClassName("killer")[0].innerHTML = `${suspectSelected}`;
  // alert("alertsuspect");
  console.log(" 👉 👉 / clickedSuspect / suspectSelected:", suspectSelected);
}

function clickedWeapon(weapon) {
  console.log(" 👉 👉 / clickedWeapon / weapon", weapon);
  const weaponSelected = weapon.getElementsByTagName("img")[0].title;

  weapon.parentNode.remove(document.getElementById("theWeapon"));

  document.getElementsByClassName("weapon")[0].innerHTML = `${weaponSelected}`;
  console.log(" 👉 👉 / clickedWeapon / weaponSelected:", weaponSelected);
}

function clickedRoom(room) {
  console.log(" 👉 👉 / clickedRoom / room", room);
  const roomSelected = room.getElementsByTagName("img")[0].title;
  room.parentNode.remove(document.getElementById("theRoom"));
  document.getElementsByClassName("room")[0].innerHTML = `${roomSelected}`;
  console.log(" 👉 👉 / clickedRoom / roomSelected:", roomSelected);
}

//3 functions that iterate the array with data.js
let suspectCards = suspects
  .map((suspect) => {
    return `
  <div onclick="clickedSuspect(this)" class="card">
  <img src=${suspect.image}  width="100">
    <div class="suspect">
      <h4 class="suspectName">${suspect.name}</h4>
      <h4 class="suspectDescription">${suspect.description}</h4>
    </div>
  </div>
  `;
  })
  .join("");

let weaponCards = weapons
  .map((weapon) => {
    return `
  <div onclick="clickedWeapon(this)" class="card">
  <img src=${weapon.image} width="100" title=${weapon.name}>
  </div>
  `;
  })
  .join("");

let roomCards = rooms
  .map((room) => {
    return `
  <div onclick="clickedRoom(this)" class="card">
  <img src=${room.image} width="100" title=${room.name}>
  </div>
  `;
  })
  .join("");

//getting random data (game)
const arraySuspects = suspects;
const arrayRooms = rooms;
const arrayWeapons = weapons;

const randomSuspect =
  arraySuspects[Math.floor(Math.random() * arraySuspects.length)].name;

const randomRooms =
  arrayRooms[Math.floor(Math.random() * arraySuspects.length)].name;

const randomWeapons =
  arrayWeapons[Math.floor(Math.random() * arrayWeapons.length)].name;

//Random Game Enigma
console.log({ randomSuspect, randomRooms, randomWeapons });

export function mainComponent(idSection) {
  idSection.innerHTML = `
  <section>
  <h3>⬇ Let's start the game by selecting one of each. Best luck! ⬇</h3>
  </section>
  <div> 
    <h2 class="titleSuspect">The Suspects</h2> 
    <section id="theSuspect">
       ${suspectCards}
    </section>

    <h2 class="titleWeapon">The Weapons</h2>
    <section id="theWeapon">
        ${weaponCards}
    </section>
    
    <h2 class="titleRoom">The Rooms</h2>
    <section id="theRoom">
      ${roomCards}
    </section>
  </div> 
  <section class="conclusionSection">
  <div class="conclusiondiv"> 
    <h3 class="titleConclusion">⬇ Submit Conclusions 👀 ⬇</h3>
      <div class="theory">
        <p class="killer who" id="killer2"> Who?</p> 
        <p>killed Miss. Maria Lopez with a </p> 
        <p class="weapon whichWeapon">Weapon?</p> 
        <p>in the</p> 
        <p class="room whichRoom">Room?</p>
        </div>
        <button onclick="comparison()" id="btn" class="close button-89" role="button">Submit</button>  
      </div>
    </div>
    </div>
  </section>
  `;
}
