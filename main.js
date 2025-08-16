let wantedCryptos = ["BTCUSDT", "ETHUSDT", "LINKUSDT", "LTCUSDT"]

async function valueReturn() {
    const res = await fetch("https://api.binance.com/api/v3/ticker/price"); 
    const data = await res.json(); 
    const dataFiltered = data.filter(e => wantedCryptos.includes(e.symbol))
    console.log(dataFiltered);
}

valueReturn();

