import "./header.styles.css";

export function headerComponent(idHeader) {
  idHeader.innerHTML = `
    <section>
    <div>
      <h1>THE 'CLUE GAME' 🕵🏽‍♂️</h1>
      <h4>Become a detective and solve the murder mystery in each occasion </h4>
    </div>
      <span class="mainText"
        >Clue is the classic detective game and is different every time you play. If you can collect the right clues and
        make the right deductions, you'll solve the mystery and win. Who did it? Where? Which weapon? As you search the
        mansion's nine rooms and secret passages, be on the lookout for the murderous suspects and the deadly
        weapons.
      </span> 
    <section>`;
}
