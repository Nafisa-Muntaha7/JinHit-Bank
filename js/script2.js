//----------Deposit and withdraw handle function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    //Clear the input field
    inputField.value = '';
    return inputAmount;
}

//----------Update total deposit and withdraw field
function updateTotalField(fieldId, amount) {
    //debugger;
    const totalField = document.getElementById(fieldId);
    const totalText = totalField.innerText;
    const currentAmount = parseFloat(totalText);
    newTotal = currentAmount + amount;
    totalField.innerText = newTotal;
    return totalField;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceText = balanceTotal.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    return currentBalanceAmount;
}

//------------Update total balance while depositing money and reduce while withdrawing
function updateBalance(totalAmount, isAddition) {
    const balanceTotal = document.getElementById('balance-total');
    /* const currentBalanceText = balanceTotal.innerText;
     const currentBalanceAmount = parseFloat(currentBalanceText); */
    const currentBalanceAmount = getCurrentBalance();
    if (isAddition == true) {
        const newBalanceTotal = currentBalanceAmount + totalAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = currentBalanceAmount - totalAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    return balanceTotal;
}


document.getElementById('deposit-button').addEventListener('click', function () {

    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }

    /*
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    */

    /*
    const depositTotal = document.getElementById('deposit-total');
    const currentDepositText = depositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositText);
    const newDepositTotal = currentDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    */

    /*
    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceText = balanceTotal.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    const newBalanceTotal = currentBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    */

    //Clear the deposit input field
    // depositInput.value = '';

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    else {
        alert
    }

    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);
    */

    /*
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawText = withdrawTotal.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawText);
    const newWithdrawTotal = currentWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    */

    //Reduce Balance
    /*
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const newBalanceAmount = parseFloat(currentBalanceText);
    const reducedBalance = newBalanceAmount - newWithdrawAmount;
    currentBalance.innerText = reducedBalance;
    */

    //Clear the withdraw input field
    // withdrawInput.value = '';

});

