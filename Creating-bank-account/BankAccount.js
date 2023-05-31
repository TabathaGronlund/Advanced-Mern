
class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
        // this.bankAccNum = bankAccNum
    }
    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
        return this;
    }
    // transferMoney(fromBankAccNum, amount)
    displayBalance(amount){
        this.accountBalance = amount;
        return this;
    }

}
class BankAccount {
    constructor(intRate = 0.06, balance = 0) {
    this.balance = balance;
    this.intRate = intRate;
    }
    deposit(amount) {
    this.balance += amount;
    return this;
    }
    withdraw(amount) {
    this.balance -= amount;
    if (this.balance < 0) {
        console.log("Insufficient funds: Charging a $60 fee");
        this.balance -= 60;
    }
    return this;
    }
    displayAccountInfo() {
    console.log(
        `Current Balance: $${this.balance}, Interest Rate: ${this.intRate}`
    );
    return this;
    }
    yieldInterest() {
      this.balance += this.balance * this.intRate;
    return this;
    }
}

const account1 = new BankAccount();
const account2 = new BankAccount(0.08, 300);


account1.deposit(150).deposit(100).deposit(50).withdraw(100)
console.log(account1.intRate+account1.balance)
account2.deposit(100).deposit(100).withdraw(10).withdraw(20).withdraw(10).withdraw(10) 
console.log(account2.intRate+account2.balance)

const michael = new User("Michael Krombopulous", "IHaveNoCodeOfEthics@4hire.com");
const rick = new User("Rich Van Python", "rick@python.com");
const morty = new User("Morty Smith", "morty@python.com");


rick.name = "Rick";
morty.name = "Morty";

// rick.makeDeposit(100).makeDeposit(50).makeWithdrawal(75).displayBalance()

// morty.makeDeposit(15).makeDeposit(15).makeWithdrawal(20).makeWithdrawal(2).displayBalance()

// michael.makeDeposit(10000).makeWithdrawal(500).makeWithdrawal(300).makeWithdrawal(200).displayBalance()

// displayBalance();


// console.log(michael.accountBalance)
// console.log(morty.accountBalance)
// console.log(rick.accountBalance)
// console.log(rick.name);
// console.log(morty.name);

