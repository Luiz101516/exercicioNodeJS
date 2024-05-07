import { Router } from 'express'
import { getUsers, getUser, createUser, deleteUser, updateUser, validateUser, extractUserParams } from '../services/user.js'

const router = Router()

router.get("/", async (request, response) => {
    const users = await getUsers()
    return response.status(200).send(users)
})

router.get("/:id", async (request, response) => {
    const user = await getUser(request.params.id)
    return response.status(200).send(user)
})

router.post("/", async (request, response) => {
    const params = extractUserParams(request.body);
    if (validateUser(params)) {
        const params = {
            name: request.body.name,
            email: request.body.email,
            age: request.body.age,
            gender: request.body.gender,
            phone: request.body.phone,
            cpf: request.body.cpf,
            rg: request.body.rg
        }
        const user = await createUser(params)
        return response.status(201).send(user)
    } else {
        return response.status(400).send("Valores inválidos");
    }
})

router.delete("/:id", async (request, response) => {
    await deleteUser(request.params.id)

    return response.status(204).send()
})

router.put("/:id", async (request, response) => {
    const params = extractUserParams(request.body);
    if (validateUser(params)) {

        const user = await updateUser(request.params.id, {
            name: request.body.name,
            email: request.body.email,
            age: request.body.age,
            gender: request.body.gender,
            phone: request.body.phone,
            cpf: request.body.cpf,
            rg: request.body.rg
        })

        return response.status(200).send(user)
    } else {
        return response.status(400).send("Valores inválidos");
    }
})

export default router