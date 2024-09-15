let balance = 0;

function updateBalance() {
    document.getElementById('balance').innerText = balance;
}

function addFunds() {
    const amount = parseInt(document.getElementById('amount').value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
    } else {
        alert('Masukkan jumlah yang valid');
    }
}

function withdrawFunds() {
    const amount = parseInt(document.getElementById('amount').value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
    } else {
        alert('Masukkan jumlah yang valid atau saldo tidak mencukupi');
    }
}
