// 'use strict'

let startBtn =document.getElementById('start'),
	budgetValue = document.getElementsByClassName('badget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybuget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsaving-value')[0],

	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;


function start() {
	money = +prompt('Ваш бюджет на месяц?', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null){
		money = +prompt('Ваш бюджет на месяц?', '');
	}
}
start();

let appData = {
	bydget: money,
	timeDate: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	choseExpenses: function() {
		for(let i = 0; i < 2; i++){
			let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
				b = prompt('Во сколько обойдется?', '');
		
			if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
				
				console.log('done');
				appData.expenses[a] = b;
			} else{
				i = i - 1;
				console.log('Ошибка при вводе данных!');
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.bydget / 30).toFixed();
		alert('Ежедневный бюджет ' + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100){
			console.log('Минимальный уровень достатка');
		} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
			console.log('Средний уровень достатка');
		} else if(appData.moneyPerDay > 2000){
			console.log('Высокий уровень достатка');
		} else(
			console.log('Произошла ошибка')
		);
		console.log(appData);
	},
	checkSavings: function() {
		if(appData.savings == true){
			let save 	= +prompt('Какова сумма накоплений?', ''),
				percent = +prompt('Под какой процент?', '');
			
			appData.montIncome = save/100/12*percent;
			alert('Доход в месяц с вашего депозита: ' + appData.montIncome);	
		}
	},
	chooseOptExpenses: function() {
		for ( let i = 1; i < 3; i++) {
			let opt = promt("Статья необязательных расходов?", "");
			appData.optionalExpenses[i] = opt;
		}
	},
	choseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		appData.income = items.split(', ');
		appData.income.push(prompt('Может что-то еще?'));
		appData.income.sort();
	}
};