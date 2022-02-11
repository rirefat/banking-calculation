// Functionality for cash deposit
document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputDepositAmount = document.getElementById('deposit-field');
    const depositAmountValue = inputDepositAmount.value;
    const depositAmount = parseFloat(depositAmountValue);
    const initialDepositAmount = document.getElementById('initial-deposit-amount').innerText;
    const initialDepositAmountValue = parseFloat(initialDepositAmount);
    const totalDeposit = depositAmount+initialDepositAmountValue;
    document.getElementById('initial-deposit-amount').innerText = totalDeposit;

    const totalBalance = document.getElementById('totalBalance').innerText;
    const totalBalanceValue = parseFloat(totalBalance);
    const finalBalance = totalBalanceValue + depositAmount;
    document.getElementById('totalBalance').innerText = finalBalance;
    inputDepositAmount.value='';
})

// Functionality for cash withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const inputWithdrawAmount = document.getElementById('withdraw-field'); 
    const withdrawAmountValue = inputWithdrawAmount.value;
    const withdrawAmount = parseFloat(withdrawAmountValue);
    const initialWithdrawAmount = document.getElementById('initial-withdraw-amount').innerText;
    const initialWithdrawAmountValue = parseFloat(initialWithdrawAmount);
    const totalWithdraw = withdrawAmount+initialWithdrawAmountValue;
    document.getElementById('initial-withdraw-amount').innerText = totalWithdraw;

    const totalBalance = document.getElementById('totalBalance').innerText;
    const totalBalanceValue = parseFloat(totalBalance);
    const finalBalance = totalBalanceValue - withdrawAmount;
    document.getElementById('totalBalance').innerText = finalBalance;


    inputWithdrawAmount.value = '';
})