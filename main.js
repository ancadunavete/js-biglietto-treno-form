// function to calculate the ticket price
function calculateTicketPrice(km, ageGroup) {
    const pricePerKm = 0.21;
    let basePrice = km * pricePerKm;
    let discount = 0;

    if (ageGroup === "minorenne") {
        discount = 0.2; // 20% discount for minors
    } else if (ageGroup === "over65") {
        discount = 0.4; // 40% discount for over65
    }

    const finalPrice = basePrice * (1 - discount);
    return finalPrice.toFixed(2);
}

// event listener for "Genera" 
document.getElementById("generate").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const kmInput = document.getElementById("distance").value;
    const ageGroup = document.getElementById("age").value;

    const km = parseFloat(kmInput);

    if (!name || isNaN(km) || km <= 0 || !ageGroup) {
        alert("Inserisci tutti i dati correttamente.");
        return;
    }

    // calculating the ticket price
 const ticketPrice = calculateTicketPrice(km, ageGroup);

    // displaying the result
    const outcomeTable = document.querySelector(".outcome table");
    outcomeTable.innerHTML = `
        <tr>
            <th class="highlight">PASSEGGERO</th>
            <th></th>
        </tr>
        <tr>
            <td class="left">Nome + Cognome</td>
            <td>${name}</td>
        </tr>
        <tr>
            <td class="left">Offerta</td>
            <td>Biglietto Standard</td>
        </tr>
        <tr>
            <td class="left">Carrozza</td>
            <td>${Math.floor(Math.random() * 10) + 1}</td>
        </tr>
        <tr>
            <td class="left">Codice CP</td>
            <td>${Math.floor(Math.random() * 100000)}</td>
        </tr>
        <tr>
            <td class="left">Costo biglietto</td>
            <td>€${ticketPrice}</td>
        </tr>
    `;
});
