import { 
    users,
    products,
    createUser,
    getAllUsers,
    getAllProducts,
    createProduct,
 } from "./database";
import express, {Request, Response} from 'express';
import cors from 'cors'
import { TProducts } from "./types";

const app = express()
app.use(express.json())
app.use(cors())

console.log("O aplicativo foi iniciado!")

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
});

app.get('/ping', (req: Request, res:Response) => {
    res.send('Pong!')
})

app.get('/users', (req: Request, res:Response) => {
    res.status(200).send(users)
})

app.get('/products', (req: Request, res: Response) => {
    const nameToFind = req.query.name as string

    if (nameToFind) {
        const result: TProducts[] = products.filter(
            (product) => product.name.toLocaleLowerCase().includes(nameToFind.toLocaleLowerCase())
        )
        res.status(200).send(result)
    } else {
        res.status(200).send(products)
    }
})

app.post('/users', (req: Request, res: Response) => {
    const id = req.body.id as string
    const name = req.body.name as string
    const email = req.body.name as string
    const password = req.body.password as string

    const result = createUser(id, name, email, password)

    res.status(201).send(result)
})

app.post('/products', (req: Request, res: Response) => {
    const id = req.body.id as string
    const name = req.body.name as string
    const price = req.body.price as number
    const description = req.body.price as string
    const imageURL= req.body.imageURL as string

    const result = createProduct(id, name, price, description, imageURL)

    res.status(201).send(result)
})



