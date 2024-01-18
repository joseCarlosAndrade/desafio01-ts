import { DioAccount} from "./DioAccount";

/**
 * ## Client Account
 * Classe que representa a conta de um cliente Dio
 */
export class ClientAccount extends DioAccount {

    // cursos obtidos pelo cliente
    private courses : Array<string> = [];

    constructor(name : string, accountNumber : number) {
        super(name, accountNumber);
    }

    /**
     * Funcao para gastar dinheiro de uma ClientAccount
     * @param value Valor a ser gasto
     * @returns Resultado da operacao baseado na quantia ja existente
     */
    private spendMoney(value: number) : boolean {
        if (value > this.getBalance()) return false;
        this.balance -= value;
        return true;
    }

    /**
     * Realiza a compra de um curso com base no nome deste. Avalia um preço pelo nome
     * @param courseName Nome do curso a ser comprado
     * @returns Resultado da operaçao 
     */
    buyCourse = (courseName : string) : boolean => {
        if (this.validateStatus()) {
            if (this.courses.includes(courseName)) {
                console.log("Elemento ", courseName, " ja é possuido pelo usuario ", this.getName());
                return false;
            }

            let value = 0;
            // for (let i = 0; i < courseName.length; i++) {
            //     value +=  courseName[i].charCodeAt(0);
            // }
            for ( let char of courseName) {
                value += char.charCodeAt(0);
            }
            // let value : number = Number(courseName);
            if (this.spendMoney(value)) {
                console.log("Elemento ", courseName, " comprado pelo usuario ", this.getName(), " pelo valor R$ ", value);
                this.courses.push(courseName);
                return true;

            } else {
                console.log("Saldo infuciente na conta de ", this.getName(), " para comnprar o item ",courseName);
                console.log("Saldo: R$ ", this.getBalance());
                console.log("Valor da compra: R$ ", value);
                return false;
            }
            
        }

        return false;
    }

    /**
     * Adiciona o bootcamp requisitado a lista de cursos do usuario. Bootcamps sao 
     * gratuitos, portanto os unicos requisitos para esta operaçao funcionar é ter
     * uma conta ativa e nao inserir algum bootcamp repetido
     * @param bootCampName Nome do bootcamp
     * @returns Resultado da operaçao
     */
    getBootCamp = (bootCampName : string) : boolean =>  {
        if (this.validateStatus()) {
            if (this.courses.includes(bootCampName)) {
                console.log("Bootcamp ", bootCampName, " já adicionado pelo usuario ", this.getName());
                return false;
            }

            console.log("Bootcamp ", bootCampName, " adicionado pelo usuario ", this.getName());
            this.courses.push(bootCampName);
            return true;
        }
        return false;
    }

    /**
     * Retorna todos os cursos comprados pela pessoa ate o momento
     * @returns Array de strings dos nomes dos cursos ou undefined caso a conta seja invalida
     */
    getAllCourses = ()  : Array<string> | undefined => {
        if (this.validateStatus()) {
            return this.courses;
        }
        return undefined;
    }

    /**
     * Caso o usuario queira encerrar a conta
     */
    closeAccount = ()  => {
        if (this.validateStatus()) {
            console.log(this.getName() ," teve sua conta encerrada.")
            this.invalidateAccount();
        }
    }

}