-- Active: 1689009385049@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL
);

SELECT * FROM users;

PRAGMA table_info ('users');

INSERT INTO users (id, name, email, password, created_at)
    VALUES
            ('u001', 'Fulano', 'fulano@email.com', 'fulano123', DATETIME('now')),
            ('u002', 'Beltrana', 'beltrana@email.com', 'beltrana00', DATETIME('now')),
            ('u003', 'Cicrano', 'cicrano@email.com', 'cicrano666', DATETIME('now'));




CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

SELECT * FROM products;

PRAGMA table_info('products');

INSERT INTO products (id, name, price, description, image_url)
    VALUES
            ('prod001', 'Mouse gamer', 250, 'Melhor mouse do mercado!', 'https://picsum.photos/seed/Mouse%20gamer/400'),
            ('prod002', 'Monitor', 900, 'Monitor LED Full HD 24 polegadas', 'https://picsum.photos/seed/Monitor/400'),
            ('prod003', 'Mousepad', 50, 'Mousepads de variadas imagens!', 'https://fastly.picsum.photos/id/835/200/300.jpg?hmac=P0UE0lbf-pAbtXKtn98GDElmyOKaljrh5G9Ga20LObw'),
            ('prod004', 'Memória RAM 8gb', 350, 'Memória DDR5 ultra rápida!', 'https://fastly.picsum.photos/id/819/200/300.jpg?hmac=QrFu2y-FbDRBR4OFiSYDWP-w2egSTjiMkeagJb0rqM0'),
            ('prod005', 'Teclado Gamer', 180, 'Teclado Gamer RGB', 'https://fastly.picsum.photos/id/926/200/300.jpg?hmac=jlGQWyYJAmrBGxcsX5Uwr_J1N3bMHU46d3660T6emao');
