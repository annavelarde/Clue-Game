import { suspects, rooms, weapons } from "../../data.js";
import "./mainsection.styles.css";

window.clickedSuspect = clickedSuspect;
window.clickedWeapon = clickedWeapon;
window.clickedRoom = clickedRoom;
window.comparison = comparison;

function clickedSuspect(suspect) {
  // console.log(" 👉 👉 / clickedSuspect / suspect", suspect);
  const suspectSelected =
    suspect.getElementsByClassName("suspectName")[0].textContent;

  suspect.parentNode.remove(document.getElementById("theSuspect"));
  //it's connected with the Conclusion Section
  document.getElementsByClassName("killer")[0].innerHTML = `${suspectSelected}`;
  // alert("alertsuspect");
}

function clickedWeapon(weapon) {
  // console.log(" 👉 👉 / clickedWeapon / weapon", weapon);
  const weaponSelected = weapon.getElementsByTagName("img")[0].title;

  weapon.parentNode.remove(document.getElementById("theWeapon"));

  document.getElementsByClassName("weapon")[0].innerHTML = `${weaponSelected}`;
}

function clickedRoom(room) {
  // console.log(" 👉 👉 / clickedRoom / room", room)
  const roomSelected = room.getElementsByTagName("img")[0].title;
  room.parentNode.remove(document.getElementById("theRoom"));
  document.getElementsByClassName("room")[0].innerHTML = `${roomSelected}`;
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

//getting random data
const arraySuspects = suspects;
const arrayRooms = rooms;
const arrayWeapons = weapons;

const randomSuspect =
  arraySuspects[Math.floor(Math.random() * arraySuspects.length)].name;

const randomRooms =
  arrayRooms[Math.floor(Math.random() * arraySuspects.length)].name;

const randomWeapons =
  arrayWeapons[Math.floor(Math.random() * arrayWeapons.length)].name;

//Comparison of conclusions
function comparison() {
  const userSelectedSuspect = document.getElementsByClassName("theory");
  console.log(" 👉 👉 / comparison / userSelectedSuspect", userSelectedSuspect);
  //if
}
comparison();

export function mainComponent(idSection) {
  idSection.innerHTML = `

  <section>
  <div>
  <h3>⬇ Let's start the game by selecting one of each. Best luck! ⬇</h3>
  </section>
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
  
  <section class="conclusionSection">
    <h3 class="titleConclusion">⬇ Submit Your Conclusions 👀 ⬇</h3>
      <div class="theory">
        <p class="killer who" id="killer2"> Who?</p> 
        <p>killed Miss. Maria Lopez with a </p> 
        <p class="weapon whichWeapon">Weapon?</p> 
        <p>in the</p> 
        <p class="room whichRoom">Room?</p>
        </div>
        <button onclick="" type="button" id="btn" class="close button-89" role="button">Submit</button>  
      </div>
    </div>
  </section>
 
  `;
}
