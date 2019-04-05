let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let ans1 = prompt ("Введите обязательную статью расходов в этом месяце");
let ans2 = prompt ("Во сколько обойдется?");


var appData = {
    budget: money,
    timeData: time,
    expences: ans1+":"+ans2,
    optionalExpenses: null,
    income: null,
    savings: false
};

alert("Ваш бюджет на день: " + money);