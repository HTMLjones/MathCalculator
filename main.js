

const firstInput = document.querySelector("#inputOne")
const secondInput = document.querySelector("#inputTwo")
const buttonOnPage = document.querySelector("#button")


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


//Effekter til calc
renderOnPage.style.border = "5px solid green";
});