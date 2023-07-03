"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.log("O aplicativo foi iniciado!");
console.log(database_1.users, database_1.products);
console.log(new Date().toISOString());
console.log((0, database_1.createUser)('u003', 'Ciclano', 'ciclano@email.com', 'ciclano00'));
//# sourceMappingURL=index.js.map