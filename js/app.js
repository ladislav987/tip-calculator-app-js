const amountInput = document.getElementById("amount");

const button_container = document.getElementById("button_container");

const fivePercent = document.getElementById("5%");
const tenPercent = document.getElementById("10%");
const fifteenPercent = document.getElementById("15%");
const twentyFivePercent = document.getElementById("25%");
const fiftyPercent = document.getElementById("50%");

const customPercent = document.getElementById("customPercent");

const peopleElement = document.getElementById("people");


amountInput.addEventListener('input', () => {

    percentage(amountInput.value);
});

function percentage(amount) {

    button_container.addEventListener('click', event => {
        let percent = event.target.value;
        let people = peopleElement.value;
        spocitaj(percent, amount, people);
    });

    customPercent.addEventListener('input', event => {
        let percent = 100 / customPercent.value;
        let people = peopleElement.value;

        spocitaj(percent, amount, people);
    });

}

function spocitaj(percent, amount, people) {
    document.getElementById("form").addEventListener("click", event => {
        event.preventDefault();
    });

    let percentage = percent || 0;
    let amounts = amount || 0;

    function format(numbers) {
        let number = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
        }).format(numbers)
        return number;
    }


    document.getElementById("tipAmountOutput").innerHTML = format((amounts / percentage) / people);

    document.getElementById("totalAmountOutput").innerHTML = format(amounts / people);
}

function resetHandler() {
    document.getElementById("tipAmountOutput").innerHTML = " ";
    document.getElementById("totalAmountOutput").innerHTML = " ";
    peopleElement.value = 1;
    amountInput.value = 0;
    customPercent.value = " ";
}