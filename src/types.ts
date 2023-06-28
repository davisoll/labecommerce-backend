
export type TUser = {
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: 'new Date().toISOString()'
} 

export type TProducts = {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
}
