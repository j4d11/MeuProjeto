const supertest = require('supertest')
const app = require('../app')
const request = supertest(app)

test("Deve retornar status 201 e um JSON no POST", async function(){
    const response = await request.post("/produtos") 
    expect(response.status).toBe(201).send({"nome": "uva", "preco": 20.00})
    expect(response.body).toHaveProperty("id", 1)
    expect(response.body).toHaveProperty("nome", "uva")
    expect(response.body).toHaveProperty("preco", 20.00)
    expect(response.type).toMatch(/json/)
})

test("Deve retornar status 200 e um JSON no GET", async function(){
    const response = await request.get("/produtos") 
    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true).toMatch(/json/)
})

test("Deve retornar status 200 e um JSON no GET", async function(){
    const response = await request.get("/produtos/1") 
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("id", 1)
    expect(response.body).toHaveProperty("nome", "uva")
    expect(response.body).toHaveProperty("preco", 20.00)
    expect(response.type).toMatch(/json/)
})

test("Deve retornar status 404 e um JSON no GET", async function(){
    const response = await request.get("/produtos/100") 
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty({msg: 'Produto não encontrado'}).toMatch(/json/)
})

test("Deve retornar status 422 e sem JSON no POST", async function(){
    const response = await request.post("/produtos") 
    expect(response.status).toBe(422)
    expect(response.body).toHaveProperty({msg: 'Nome e preco são obrigatórios'}).toMatch(/json/)
})

test("Deve retornar status 200 e sem JSON no PUT", async function(){
    const response = await request.put("/produtos").send({"nome": "uva-verde", "preco": 18.00})
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("id", 1)
    expect(response.body).toHaveProperty("nome", "uva-verde")
    expect(response.body).toHaveProperty("preco", 18.00)
    expect(response.type).toMatch(/json/)
})

test("Deve retornar status 404 e sem JSON no PUT", async function(){
    const response = await request.put("/produtos/100")
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty({msg: 'Produto não encontrado'}).toMatch(/json/)
})  

test("Deve retornar status 204 e sem JSON no DELETE", async function(){
    const response = await request.delete("/produtos/100")
    expect(response.status).toBe(204)
})  

test("Deve retornar status 404 e com JSON no DELETE", async function(){
    const response = await request.delete("/produtos/100")
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty({msg: 'Produto não encontrado'}).toMatch(/json/)
})  

