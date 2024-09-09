async function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    try {
        // URL de una API para obtener las tasas de cambio
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        const rate = data.rates[toCurrency];
        const result = rate * amount;

        document.getElementById("result").innerText = 
            `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        console.error("Error en la conversión:", error);
        alert("Hubo un problema con la conversión. Intenta de nuevo más tarde.");
    }
}
