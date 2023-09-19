

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Replace exchangeRate with the actual rate
    
    const exchangeRate = 1.5;

    const result = amount * exchangeRate;

    document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}