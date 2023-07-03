import { TProducts, TUser } from "./types";

export const getAllUsers = (): TUser[] => {

    return users
}

export const createUser = (
    id: string,
    name: string,
    email: string,
    password: string,
): void => { // void é o tipo de saida de uma função que não tem returno

    const newUser: TUser = {
        id: id,
        email: email,
        name: name,
        password: password,
        createdAt: new Date().toISOString()
    }
    users.push(newUser)
    console.log('Usuário cadastrado com sucesso!')
}

export const createProduct = (
    id: string,
    name: string,
    price: number,
    description: string,
    imageURL: string
): void => {

    const newProduct: TProducts = {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageURL
    }
    products.push(newProduct)
    console.log('Produto adicionado com sucesso!')
}

export const getAllProducts = (): TProducts[] => {

    return products
}

// export const searchProductsByName = (// FALTA ESSA FUNÇÃO
//     name: string
// ): TProducts => {

//     return (
        
//     )
// }

export const users: TUser[] = [
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
]

export const products: TProducts[] = [

    {    id: 'prod001',
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
]