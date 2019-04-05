let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let ans1 = prompt ("Введите обязательную статью расходов в этом месяце");
let ans2 = prompt ("Во сколько обойдется?");
let ans3 = prompt ("Введите обязательную статью расходов в этом месяце");
let ans4 = prompt ("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expences.ans1 = ans2;
appData.expences.ans3 = ans4;

alert("Ваш бюджет на день: " + appData.budget/30);
