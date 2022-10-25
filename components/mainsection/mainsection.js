import { suspects, rooms, weapons } from "../../data";

{
  /* <h5>${suspect.age}</h5>
<h5>${suspect.description}</h5> */
}

let suspectCards = suspects
  .map((suspect) => {
    return `
  <div>
  <img src=${suspect.image} width="100">
  <h4>${suspect.name}</h4>
  </div>
  `;
  })
  .join("");

let weaponCards = weapons
  .map((weapon) => {
    return `
  <img src=${weapon.image} width="100">
  `;
  })
  .join("");

let roomCards = rooms
  .map((room) => {
    return `
  <img src=${room.image} width="100">
  `;
  })
  .join("");

// let show = names[Math.floor(Math.random() * names.length)];

export function mainComponent(idSection) {
  idSection.innerHTML = `  

    <section id="suspects">
    <h2>Suspects</h2> 
    ${suspectCards}
    </section>

    <h2>Weapons</h2>
    ${weaponCards}

    <h2>Rooms</h2>${roomCards}
  `;
}
