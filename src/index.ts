import { 
    users,
    products,
    createUser,
    getAllUsers,
    getAllProducts,
    createProduct,
 } from "./database"

console.log("O aplicativo foi iniciado!")
console.log(users, products)
console.log(createUser('u003', 'Ciclano', 'ciclano@email.com', 'ciclano00'))
