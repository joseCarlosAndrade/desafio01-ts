import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  // debit: numero que informa caso a conta esteja em debito ( ja tenha emprestado aquele valor anteriormente)
  // e este nao foi pago ainda
  debit : number = 0;

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  /**
   * Funcao para realizar emprestimo. So e bem sucedida caso :
   * - A conta seja valida
   * - A conta nao tenha nenhum debito em aberto ja
   * @param value Valor a ser emprestado
   * @returns se o empresitmo foi bem sucedido ou nao
   */
  getLoan = (value : number): boolean => {
    if (this.validateStatus()) {
      if (this.debit > 0) {
        // incabivel para fazer emprestimo, dado que a conta ja possui um debito em aberto
        console.log("Conta ", this.getName(), " nao pode fazer emprestimos enquanto nao pagar o debito de R$ ", this.debit);
        return false
      }
      console.log(this.getName(), ' pegou um empréstimo de R$: ', value)
      this.debit = value;
      return true;
    }
    else return false;
    
  }
}
