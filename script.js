function getMSRP()
{
    return document.getElementById("price").value
}

function getSelectedYear()
{
    return document.getElementById("year").value
}

function isTradeIn() {
    return document.getElementById("trade-in").checked
}

function getCurrentYear()
{
    return new Date().getFullYear()
}

function getOffer(offset, multiplier) {
    const age = getCurrentYear() - getSelectedYear()
    return getMSRP() * (offset - (age * multiplier));
}

function valueBike() {
    const offer = isTradeIn() ? getOffer(0.35, 0.0175) : getOffer(0.3, 0.015)

    document.getElementById("offer").innerHTML = "£ " + Math.round(offer)
}

function populateYears() {

    for (let i = 0; i < 20; ++i) {
        const option = document.createElement("option")
        option.textContent = getCurrentYear() - i
        year.appendChild(option)
    }
}

populateYears()
valueBike()
