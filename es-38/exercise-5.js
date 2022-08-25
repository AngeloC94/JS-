class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}
class BankAccountVip extends BankAccount{
  #INTERESSE = 3;
  #LIMITE = 1000;

  
  deposit (amount) {
    if (amount >= this.#LIMITE) {
      super.deposit(amount + (amount/100*this.#INTERESSE))
    }
    else super.deposit(amount)
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
