const supertest = require("supertest")
const app= require("./index")
const request = supertest(app)

test("Deve retornar 200 e um JSON no GET/", async function(){
    response = await request.get("/produtos")
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/)
})

test("Deve retornar 200 e um JSON no GET Id", async function(){
    reponse = await request.get("/produtos/1")
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
})

test("Deve retornar 404 e um JSON no GET/", async function(){
    response = await request.get("/produtos/100")
    expect(response.status).toBe(404)
    expect(response.headers['content-type']).toMatch(/json/)
})

test("Deve retornar 201 e um JSON no POST", async function(){
    response = await request.post("/produtos").send({nome: "uva", preco: 20.00})
    expect(response.status).toBe(201)
    expect(response.headers['content-type']).toMatch(/json/)
})

test("Dve retornar 422 sem JSON no POST", async function(){
    response = await request.post("/produtos")
    expect(reponse.status).toBe(422)
    expect(response.headers['content-type']).toMatch(/json/)
})

test("Deve retornar um JSON no PUT", async function(){
    response = (await request.put("/produtos/1")).send({"nome": "uva verde", "preco": 18.00})
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
})

test("Deve retornar um JSON no PUT", async function(){
    response = (await request.put("/produtos/100"))
    expect(response.status).toBe(404)
    expect(response.headers['content-type']).toMatch(/json/)
})

test("Deve retornar 204 sem JSON no DELETE", async function(){
    response = (await request.delete("/produtos/1"))
    expect(response.status).toBe(204)
})

test("Deve retornar 404 sem JSON no DELETE", async function(){
    response = (await request.delete("/produtos/1"))
    expect(response.status).toBe(404)
    expect(response.headers['content-type']).toMatch(/json/)
})