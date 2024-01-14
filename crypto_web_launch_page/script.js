let btcPriceBox = document.getElementById("btcPrice");
let ethereumPriceBox = document.getElementById("ethereumPrice");
let dogePriceBox = document.getElementById("dogePrice");



const getCoinPrice = async function () {
    let apiLink = "https://api.coincap.io/v2/assets";  // Added https://
    let response = await fetch(apiLink);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    console.log(data);


    let btcFullPrice = parseFloat(`${data.data[0].priceUsd}`).toFixed(2);
    btcPriceBox.innerHTML = `$${btcFullPrice}`;



    let ethereumFullPrice = parseFloat(`${data.data[1].priceUsd}`).toFixed(2);
    ethereumPriceBox.innerHTML = `$${ethereumFullPrice}`;



    let dogeFullPrice = parseFloat(`${data.data[9].priceUsd}`).toFixed(3);
    dogePriceBox.innerHTML = `$${dogeFullPrice}`;
}

getCoinPrice();
