import { Bank } from "./services/banks";

const bank= new Bank();

const user1={id:1,name:"Nadja",email:"nadja@gmail.com"};
bank.registerUser(user1);
bank.openAccount(user1);
bank.openAccount(user1);
bank.displayUserAccounts(user1.id);