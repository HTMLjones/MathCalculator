//Selectors
const firstInput = document.querySelector("#inputOne")
const secondInput = document.querySelector("#inputTwo")
const buttonOnPage = document.querySelector("#button")

//Plus
function addTwoValues(firstInput, secondInput) {
    return (Math.round(firstInput.value) + Math.round(secondInput.value))
}

const renderOnPage = document.querySelector("#result");

buttonOnPage.addEventListener("click", () => {
    console.log("Knap anvendt!")
    console.log(firstInput.value)
    console.log(secondInput.value)
    console.log(addTwoValues(firstInput, secondInput))
    let result = addTwoValues(firstInput, secondInput)
    renderOnPage.innerText = result


//Effekter til calc i plus
    renderOnPage.style.border = "5px solid green";
});

//Gange
const renderMultiply = document.querySelector("#resultMultiply")
const buttonMultiply = document.querySelector("#buttonMultiply")
const inputOne = document.querySelector("#inputOneMultiply")
const inputTwo = document.querySelector("#inputTwoMultiply")

function multiply(inputOne, inputTwo) {

    if (Math.round(inputOne.value) === 0) {
        return window.alert("Resultatet giver altid 0, hvis du ganger med 0. Dumb, Dumb!")
    } else if (Math.round(inputTwo.value) === 0) {
        return window.alert("Resultatet giver altid 0, hvis du ganger med 0. Dumb, Dumb!")
    } else {
        return (Math.round(inputOne.value) * Math.round(inputTwo.value))
    }
}


buttonMultiply.addEventListener("click", function () {
    console.log("Gange funktion anvendt!")
    let resultMultiply = multiply(inputOne, inputTwo)
    console.log(multiply(inputOne, inputTwo))
    renderMultiply.innerText = resultMultiply

//Effekt til Multyiply
    renderMultiply.style.border = "5px solid green"
});
//Division
const inputOneDivision = document.querySelector("#inputOneDivision");
const inputTwoDivision = document.querySelector("#inputTwoDivision")
const divisionToButton = document.querySelector("#buttonDivision")

divisionToButton.addEventListener("click", function () {
console.log("Division activated")
    function division(inputOneDivision, inputTwoDivision) {
        if (Math.round(inputOneDivision.value) === 0) {
            return window.alert("Du kan ikke benytte 0 i Division. Lærte du ikke fra Gange delen? 6 7 dumb, dumb!")
        } else if (Math.round(inputTwoDivision.value) === 0) {
            return window.alert("Du kan ikke benytte 0 i Division. Lærte du ikke fra Gange delen? 6 7 dumb, dumb!")
        } else {
            return (Math.round(inputOneDivision.value) / Math.round(inputTwoDivision.value))
        }
    }
    console.log(inputOneDivision.value)
    console.log(inputTwoDivision.value)
    console.log("Resultatet er: " + inputOneDivision.value / inputTwoDivision.value)

    renderDivision = document.querySelector("#resultDivision")
    let divisionResult = division(inputOneDivision, inputTwoDivision)
    renderDivision.innerText = divisionResult
    renderDivision.style.border = "solid green 5px"
});



