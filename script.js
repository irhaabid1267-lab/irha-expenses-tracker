
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let form = document.getElementById("expenseForm");
let list = document.getElementById("expenseList");
let total = document.getElementById("total");

function showExpenses() {
    list.innerHTML = "";
    let sum = 0;

    expenses.forEach(function (expense, index) {
        sum += expense.amount;

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.title}</td>
            <td>Rs. ${expense.amount.toFixed(2)}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td><button class="delete" onclick="deleteExpense(${index})">Delete</button></td>
        `;

        list.appendChild(row);
    });

    total.innerText = sum.toFixed(2);

    localStorage.setItem("expenses", JSON.stringify(expenses));
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let expense = {
        title: document.getElementById("title").value.trim(),
        amount: Number(document.getElementById("amount").value),
        category: document.getElementById("category").value,
        date: document.getElementById("date").value
    };

    expenses.push(expense);

    showExpenses();
    form.reset();
});

function deleteExpense(index) {
    expenses.splice(index, 1);
    showExpenses();
}

showExpenses();
