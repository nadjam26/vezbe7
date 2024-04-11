"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var banks_1 = require("./services/banks");
var bank = new banks_1.Bank();
var user1 = { id: 1, name: "Nadja", email: "nadja@gmail.com" };
bank.registerUser(user1);
bank.openAccount(user1);
bank.openAccount(user1);
bank.displayUserAccounts(user1.id);
