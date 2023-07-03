"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.users = exports.createProduct = exports.createUser = exports.getAllUsers = void 0;
const getAllUsers = () => {
    return exports.users;
};
exports.getAllUsers = getAllUsers;
const createUser = (id, name, email, password) => {
    const newUser = {
        id: id,
        email: email,
        name: name,
        password: password,
        createdAt: new Date().toISOString()
    };
    exports.users.push(newUser);
    console.log('Usuário cadastrado com sucesso!');
};
exports.createUser = createUser;
const createProduct = (id, name, price, description, imageURL) => {
    const newProduct = {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageURL
    };
    exports.products.push(newProduct);
    console.log('Produto adicionado com sucesso!');
};
exports.createProduct = createProduct;
exports.users = [
    {
        id: 'u001',
        name: 'Fulano',
        email: 'fulano@email.com',
        password: 'fulano123',
        createdAt: new Date().toISOString()
    },
    {
        id: '002',
        name: 'Beltrana',
        email: 'beltrana@email.com',
        password: 'beltrana00',
        createdAt: 'new Date().toISOString()'
    }
];
exports.products = [
    { id: 'prod001',
        name: 'Mouse gamer',
        price: 250,
        description: 'Melhor mouse do mercado!',
        imageUrl: 'https://picsum.photos/seed/Mouse%20gamer/400',
    },
    {
        id: 'prod002',
        name: 'Monitor',
        price: 900,
        description: 'Monitor LED Full HD 24 polegadas',
        imageUrl: 'https://picsum.photos/seed/Monitor/400',
    }
];
//# sourceMappingURL=database.js.map