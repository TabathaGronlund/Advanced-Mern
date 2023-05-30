
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
const michael = new User("Michael Krombopulous", "IHaveNoCodeOfEthics@4hire.com");
const rick = new User("Rich Van Python", "rick@python.com");
const morty = new User("Morty Smith", "morty@python.com");


rick.name = "Rick";
morty.name = "Morty";

rick.makeDeposit(100).makeDeposit(50).makeWithdrawal(75).displayBalance()

morty.makeDeposit(15).makeDeposit(15).makeWithdrawal(20).makeWithdrawal(2).displayBalance()

michael.makeDeposit(10000).makeWithdrawal(500).makeWithdrawal(300).makeWithdrawal(200).displayBalance()

// displayBalance();


// console.log(michael.accountBalance)
// console.log(morty.accountBalance)
// console.log(rick.accountBalance)
// console.log(rick.name);
// console.log(morty.name);

