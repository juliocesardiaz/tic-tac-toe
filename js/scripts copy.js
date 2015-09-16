function BankAccount(userName, balance){
    this.userName = userName;
    if(balance >= 25){
        this.balance = balance;
    } else if (balance < 0) {
        this.balance = "You're in debt! Uh oh. Please make another account when you have money.";
    } else {
        this.balance = "This account requires at least $25 deposited. Please make another account."
    }
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

function resetFields() {
    $("input").val("");
    $("input#new-deposit").val(0);
    $("input#new-withdraw").val(0);
}

$(document).ready(function() {
    var newBankAccount;
    $("form#new-bank-account").submit(function(event) {
        event.preventDefault();

        var inputtedAccountName = $("input#new-account-name").val();
        var inputtedBalance = parseInt($("input#new-balance").val());

        newBankAccount = new BankAccount(inputtedAccountName, inputtedBalance);

        $("#show-account").fadeOut();
        $("#show-account").fadeIn(1000);
        $(".account-name").text(newBankAccount.userName);
        $(".balance").text(newBankAccount.balance);

        $("ul#addresses").text("");

        resetFields();
    });

    $("form#deposit-withdraw").submit(function(event) {
        event.preventDefault();

        var inputtedDeposit = parseInt($("input#new-deposit").val());
        var inputtedWithdraw = parseInt($("input#new-withdraw").val());

        newBankAccount.deposit(inputtedDeposit);
        newBankAccount.withdraw(inputtedWithdraw);

        $("#show-account").fadeOut();
        $("#show-account").fadeIn(1000);
        $(".account-name").text(newBankAccount.userName);
        $(".balance").text(newBankAccount.balance);

        $("ul#addresses").text("");

        resetFields();
    });
});
