export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  /**
   * Funcao deposito. Aceita um tipo number e retorna void
   * Acresce o valor de contas com o status valido
   * @param value Valor a ser depositado
   */
  deposit = (value :number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log(this.getName(), ' depositou um valor de: R$ ', this.balance);
    }
  }
  
  /**
   * Funcao saque. Aceita um tipo numero e retorna void
   * Retira o tanto requisitado da conta, caso esta seja valida e possua a quantia minima
   * @param value Valor a ser sacado
   */
  withdraw = (value : number): void => {
    if (!this.validateStatus()) return;

    if (value > this.getBalance() ) {
      console.log("Saldo da conta ", this.getName(), " insuficiente.")
      console.log("Saldo: R$ ", this.getBalance());
      console.log("Valor requisitado: R$ ",value);
      return;

    }
    this.balance -= value;
    console.log(this.getName(), ' sacou um total de: R$ ', value);
  }

  getBalance = (): number => {
    // console.log(this.balance)
    return this.balance;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    // throw new Error('Conta inválida') // removido este erro, pois senao nao faz sentido retornar true 
    //somente nesta condiçao
    return false;
  }

  /**
   * Funcao implementada para invalidar a conta quando esta quer ser encerrada. So pode ser
   * chamada pelos membros das classes filhas, e nao pelo usuario
   */
  protected invalidateAccount = () => {
    this.status = false;
  }
}
