let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }

}
start();


var appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpences: function(){
        for (let i=0; i<2; i++){
            let a = prompt ("Введите обязательную статью расходов в этом месяце");
            let b = prompt ("Во сколько обойдется?");    
        
            if( (typeof(a) === "string") && (typeof(a) != null) && (typeof(b) != null) && a != "" && b != "" & a.length < 50 ){
                console.log("done");
                appData.expences[a] = b;
            } else {
                console.log("error");
                i--;
            }       
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >=2000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    chooseOptExpenses: function(){
        for (let i=0; i<3; i++){
            let a = prompt ("Введите необязательную статью расходов в этом месяце");
        
            if( (typeof(a) === "string") && (typeof(a) != null) &&  a != "" && a.length < 50 ){
                
                appData.optionalExpenses[i] = a;
            } else {
                console.log("error");
                i--;
            }       
        }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save/100/12*percent).toFixed(1);
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function(){
        for (let i=0; i<1; i++){
            let items = prompt("Что приносит дополнительный доход?(Перечислите через запятую)",'');
            if( (typeof(items) === "string") && (typeof(items) != null) && items != ""){
                console.log("done");            
                appData.income = items.split(', ');
                for(j=0; j<1; j++){
                    let add = prompt("Может что то еще?");                    
                    if (typeof(add) === "string" && typeof(add) != null && add != ""){
                        appData.income.push(add);
                        appData.income.sort();
                    } else{
                        console.log("error");
                        j--;
                    }
                }
            } else {
                console.log("error");
                i--;            
            }
            
            appData.income.forEach (function (itemmassive, i) {
                alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            });
        }      
        
    }
    // showIt: function() {
    //     appData.income.forEach(function(item, i, mass) {
    //     alert("Способы доп. заработка:" + (i+1) + ": " + item + "; ");
    //     });
    // }
};

for (let key in appData){
    console.log("Наша программа включает в себя данные:" + key + " - " + appData[key]);
}
