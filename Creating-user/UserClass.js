
class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
        // this.bankAccNum = bankAccNum
    }
    makeDeposit(amount){
        this.accountBalance += amount;
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
    }
    // transferMoney(fromBankAccNum, amount)
    displayBalance(amount){
        this.accountBalance = amount;
    }

}
const michael = new User("Michael Krombopulous", "IHaveNoCodeOfEthics@4hire.com");
const rick = new User("Rich Van Python", "rick@python.com");
const morty = new User("Morty Smith", "morty@python.com");


rick.name = "Rick";
morty.name = "Morty";

rick.makeDeposit(100)
rick.makeDeposit(50)
rick.makeWithdrawal(75)

morty.makeDeposit(15)
morty.makeDeposit(15)
morty.makeWithdrawal(20)
morty.makeWithdrawal(2)

michael.makeDeposit(10000)
michael.makeWithdrawal(500)
michael.makeWithdrawal(300)
michael.makeWithdrawal(200)

displayBalance()


// console.log(michael.accountBalance)
// console.log(morty.accountBalance)
// console.log(rick.accountBalance)
// console.log(rick.name);
// console.log(morty.name);

