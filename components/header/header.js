import "./header.styles.css";

export function headerComponent(idHeader) {
  idHeader.innerHTML = `
    <section>
    <div>
      <h1>THE 'CLUE GAME' 🕵🏽‍♂️</h1>
      <h4>Become a detective and solve the murder mystery in each occasion </h4>
    </div>
      <div class="mainText">Clue is a timeless detective game that provides a unique experience each time. By making deductions, you will successfully solve the mystery and emerge as the winner. The game challenges you to uncover three critical pieces of information: who committed the crime, where it happened, and which weapon was used. Pay close attention to the suspects' movements and the dangerous weapons at hand.
      </div> 
    <section>`;
}
