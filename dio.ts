import {ClientAccount} from "./class/ClientAccount"
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

/** Arquivo resolução para desafio ts1 DIO
 */
console.log("\n\n CONTA CLIENT ACCOUNT DIO");

const clienteDio1 : ClientAccount = new ClientAccount("Jose Carlos", 7787);
const clienteDio2 : ClientAccount = new ClientAccount("Carlos Jose", 1123);

clienteDio1.deposit(150000); // jsuis riche
clienteDio2.deposit(2);

clienteDio1.getAllCourses();
clienteDio2.getAllCourses();
console.log('\n');

// operacoes finalizadas
clienteDio1.buyCourse("kotlin");
clienteDio1.buyCourse("java");
clienteDio1.buyCourse("unity");
clienteDio1.buyCourse("a");

clienteDio1.getBootCamp("ifood");
console.log('\n');

console.log("Cliente 1 tem saldo de R$: " ,clienteDio1.getBalance());
console.log("Cliente 2 tem saldo de R$: " , clienteDio2.getBalance());
console.log('\n');

// operacoes nao finalizadas
clienteDio2.buyCourse("javascript"); // saldo insuficiente

clienteDio1.buyCourse("kotlin"); // compra ja realizada
console.log('\n');

clienteDio2.closeAccount();
clienteDio2.getBootCamp("santander");
console.log('\n');

console.log("Cursos possuidos por cliente 1: ");
console.log(clienteDio1.getAllCourses());

console.log("Cursos possuidos por cliente 2: ");
console.log(clienteDio2.getAllCourses());

////////// company account
console.log("\n\n CONTA DE COMPANHIA");
const company : CompanyAccount = new CompanyAccount("conta companhia", 1000);
const people : PeopleAccount = new PeopleAccount(10, "conta pessoal", 2000);

company.deposit(1000);
console.log("Conta de companhia possui saldo de: R$ ", company.getBalance());
console.log("\n");

company.withdraw(10);
company.withdraw(2000);

console.log('\n');

company.getLoan(3000);
console.log("Conta de companhia possui saldo de: R$ ", company.getBalance(), " apos emprestimo");
console.log('\n');

company.getLoan(100);
