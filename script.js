class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: 'deposit', amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return 'Deposit amount must be greater than zero.';
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: 'withdraw', amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    return 'Insufficient balance or invalid amount.';
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(t => t.type === 'deposit')
      .map(t => t.amount);
    return 'Deposits: ' + deposits.join(',');
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(t => t.type === 'withdraw')
      .map(t => t.amount);
    return 'Withdrawals: ' + withdrawals.join(',');
  }
}

// Create the account with required transactions
const myAccount = new BankAccount();
myAccount.deposit(50);
myAccount.deposit(100);
myAccount.withdraw(20);
myAccount.withdraw(30);
myAccount.deposit(200);

const balanceDisplay = document.getElementById('balanceDisplay');
const messageDisplay = document.getElementById('messageDisplay');
const depositList = document.getElementById('depositList');
const withdrawList = document.getElementById('withdrawList');
const amountInput = document.getElementById('amountInput');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const resetBtn = document.getElementById('resetBtn');

function refreshUI() {
  balanceDisplay.textContent = myAccount.checkBalance();
  depositList.textContent = myAccount.listAllDeposits();
  withdrawList.textContent = myAccount.listAllWithdrawals();
  messageDisplay.textContent = '';
  amountInput.value = '';
}

depositBtn.onclick = () => {
  const amount = Number(amountInput.value);
  const result = myAccount.deposit(amount);
  messageDisplay.textContent = result;
  refreshUI();
};

withdrawBtn.onclick = () => {
  const amount = Number(amountInput.value);
  const result = myAccount.withdraw(amount);
  messageDisplay.textContent = result;
  refreshUI();
};

resetBtn.onclick = () => {
  // Reset the account to initial state with transactions
  myAccount.balance = 0;
  myAccount.transactions = [];
  myAccount.deposit(50);
  myAccount.deposit(100);
  myAccount.withdraw(20);
  myAccount.withdraw(30);
  myAccount.deposit(200);
  refreshUI();
};

// Initialize UI on page load
refreshUI();
