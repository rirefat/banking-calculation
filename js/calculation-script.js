document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputDepositAmount = document.getElementById('deposit-field');
    const depositAmountValue = inputDepositAmount.value;
    const depositAmount = parseFloat(depositAmountValue);
    const initialDepositAmount = document.getElementById('initial-deposit-amount').innerText;
    const initialDepositAmountValue = parseFloat(initialDepositAmount);
    const totalDeposit = depositAmount+initialDepositAmountValue;
    console.log(totalDeposit)
    document.getElementById('initial-deposit-amount').innerText = totalDeposit;

    const totalBalance = document.getElementById('totalBalance').innerText;
    const totalBalanceValue = parseFloat(totalBalance);
    const finalBalance = totalBalanceValue + depositAmount;
    document.getElementById('totalBalance').innerText = finalBalance;
    console.log(finalBalance)
    inputDepositAmount.value='';
})