const balanceElement = document.getElementById('balance');

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeFieldValue = getInputValueById('income');
    const totalExpenseElement = document.getElementById('total-expense');
    
    const foodFieldValue = getInputValueById('food');
    const rentFieldValue = getInputValueById('rent');
    const clothesFieldValue = getInputValueById('clothes');
    if (isNaN(incomeFieldValue) || isNaN(foodFieldValue) || isNaN(rentFieldValue) || isNaN(clothesFieldValue)) {
        alert('Please enter a valid number for all input fields.');
        return;
    }
    else if (incomeFieldValue < 0 || foodFieldValue < 0 || rentFieldValue < 0 || clothesFieldValue < 0) {
        alert('please enter a positive number');
        return;
    }
    const totalExpense = foodFieldValue + rentFieldValue + clothesFieldValue;
    if(totalExpense> incomeFieldValue){
        alert('you cant shopping right now');
        return;
    }
    totalExpenseElement.innerText = totalExpense;
    
    balanceElement.innerText = incomeFieldValue - totalExpense;
})

document.getElementById('save-btn').addEventListener('click', function () {
    const incomeFieldValue = getInputValueById('income');
    const saveInputValue = getInputValueById('save-input');
    if (saveInputValue > 100 ||saveInputValue < 0) {
        alert('you cant provide avobe 100%');
        return;
    }
    else if(isNaN(saveInputValue)){
        alert('you should provide only numbers');
        return;
    }
    const percentageFirstStep = saveInputValue / 100;
    const percentageFinalStep = incomeFieldValue * percentageFirstStep;
    const savingAmountElement = document.getElementById('saving-amount');
    savingAmountElement.innerText = percentageFinalStep;
    const remainingBalanceElement = document.getElementById('remaining-balance');
    const balanceElementValue = parseFloat(balanceElement.innerText);
    const remainingBalance = balanceElementValue - percentageFinalStep;
    remainingBalanceElement.innerText = remainingBalance;
    console.log(remainingBalance);
    if(balanceElementValue<percentageFinalStep){
        alert('you cant save much more than your balance');
        return
    }
})