// Prototype pseudo contract for TrustFund BTC
// This is a concept mockup for OP_NET Vibecoding challenge

class TrustFund {
  balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
      }
