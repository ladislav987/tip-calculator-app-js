const amountInput = document.getElementById("amount");
const button_container = document.getElementById("button_container");
const customPercent = document.getElementById("customPercent");
const peopleElement = document.getElementById("people");


document.getElementById("form").addEventListener("click", event => {
    event.preventDefault();
});



button_container.addEventListener('click', event => {

    let percent = event.target.value;
    let percentId = event.target.id;
    let people = peopleElement.value;
    let billAmount = amountInput.value;

    checkInput();
    count(percent, billAmount, people);
    addClass(percentId);
});

customPercent.addEventListener('input', event => {
    let percent = 100 / customPercent.value;
    let people = peopleElement.value;
    let billAmount = amountInput.value;

    count(percent, billAmount, people);
});

function count(percent, amount, people) {
    document.getElementById("tipAmountOutput").innerHTML = formatUSD((amount / percent) / people);

    document.getElementById("totalAmountOutput").innerHTML = formatUSD(amount / people);
}

function resetHandler() {
    document.getElementById("tipAmountOutput").innerHTML = " ";
    document.getElementById("totalAmountOutput").innerHTML = " ";
    peopleElement.value = 1;
    amountInput.value = 0;
    customPercent.value = "";

}

function addClass(id) {
    let elementDelete = document.querySelectorAll(".selectedButton");

    if (elementDelete[0] != undefined) {
        document.getElementById(elementDelete[0].id).classList.remove("selectedButton");;
    }

    let elementAdd = document.getElementById(id);
    elementAdd.classList.add("selectedButton");
}

function checkInput() {
    if (amountInput.value == "" || amountInput.value < 0) {
        alert("Please fill value in bill !")
    }
}


function formatUSD(numbers) {
    let number = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    }).format(numbers)
    return number;
}