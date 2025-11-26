# Bank-Account-Management
Build a Bank Account Management Program
## Objective: 
Fulfill the user stories below and get all the tests to pass to complete the lab.
## User Stories:
1.	You should define a class named BankAccount with a constructor. The constructor should set the default balance to 0 and initialize an empty array named transactions to store transaction records as objects.
2.	Each transaction stored in the transactions array should be an object with two properties: type and amount. The type property should be either deposit or withdraw, and the amount property should be the amount deposited or withdrawn.
3.	You should define a method named deposit that takes the deposit amount as a parameter. When the deposit amount is greater than 0, it should:
•	Push a new object to the transactions array with a type of deposit and the amount deposited.
•	Update the balance.
•	Return "Successfully deposited $[amount]. New balance: $[balance]".
4.	If the amount is less than or equal to 0, the deposit method should return "Deposit amount must be greater than zero.".
5.	You should define a method named withdraw that takes an amount as a parameter. This method should update the current balance according to withdrawals. When the amount to be withdrawn is greater than 0 and less than or equal to the current balance, it should:
•	Push a new object to the transactions array with a type of withdraw and the amount withdrawn.
•	Update the balance.
•	Return "Successfully withdrew $[amount]. New balance: $[balance]".
6.	If the amount to be withdrawn is less than or equal to 0 or greater than the current balance, the withdraw method should return "Insufficient balance or invalid amount.".
7.	You should define a method named checkBalance that returns the current balance in the format "Current balance: $[balance]".
8.	You should define a method named listAllDeposits that iterates through the transactions array and returns all deposits in the format "Deposits: amount,amount,...".
9.	You should define a method named listAllWithdrawals that iterates through the transactions array and returns all withdrawals in the format "Withdrawals: amount,amount,...".
10.	You should create a new instance of BankAccount named myAccount.
11.	Your myAccount bank account should have at least five transactions.
12.	Your myAccount bank account should have at least two deposits.
13.	Your myAccount bank account should have at least two withdrawals.
14.	Your myAccount bank account should have a balance greater than $100.
