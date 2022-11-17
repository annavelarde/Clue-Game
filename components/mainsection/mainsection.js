import { suspects, rooms, weapons } from "../../data.js";
import "./mainsection.styles.css";

window.clickedSuspect = clickedSuspect;
function clickedSuspect(suspect) {
  console.log(
    " 👉 👉 / clickedSuspect / suspect",
    suspect.getElementsByClassName("suspectName")[0].textContent,
    suspect.parentNode.remove(document.getElementById("theSuspect"))
  );
}

window.clickedWeapon = clickedWeapon;
function clickedWeapon(weapon) {
  console.log(
    " 👉 👉 / clickedWeapon / weapon",
    weapon.getElementsByTagName("img")[0].title,
    weapon.parentNode.remove(document.getElementById("theWeapon"))
  );
}

window.clickedRoom = clickedRoom;
function clickedRoom(room) {
  console.log(
    " 👉 👉 / clickedRoom / room",
    room.getElementsByTagName("img")[0].title,
    room.parentNode.remove(document.getElementById("theRoom"))
  );
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
    <div>
    <h3 class="titleConclusion">⬇ Submit Your Conclusions 👀 ⬇</h3>
    <div >
      <div>
        <p class="killer who">Who?</p> 
        <p>killed Mrs. Maria with a </p> 
        <p class="whichWeapon">Weapon?</p> 
        <p>in</p> 
        <p class="whichRoom">Room?</p>
        </div>
        <button class="button-89" role="button">Submit</button>  
      </div>
    </div>
  </section>
 
  `;
}
