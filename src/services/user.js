import User from '../models/user.js'

export const getUsers = async () => {
    const users = await User.find()
    return users
}

export const getUser = async (id) => {
    const user = User.findById(id)
    return user
}

export const createUser = async (params) => {
    const user = new User({
        name: params.name,
        email: params.email,
        age: params.age,
        gender: params.gender,
        phone: params.phone,
        cpf: params.cpf,
        rg: params.rg
    })

    await user.save()
    return user
}

export const deleteUser = async (id) => {
    await User.findByIdAndDelete(id)
}

export const updateUser = async (id, params) => {
    const user = await User.findByIdAndUpdate(id, {
        name: params.name,
        email: params.email,
        age: params.age,
        gender: params.gender,
        phone: params.phone,
        cpf: params.cpf,
        rg: params.rg
    }, {
        new: true
    })
    return user
}

export const validateUser = (params) => {
    if (!params.email || !params.cpf) {
        return false;
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = params.email.toLowerCase().match(emailRegex) !== null;

    const cpfRegex = /^(([0-9]{3}\.){2}[0-9]{3}-[0-9]{2}|[0-9]{11})$/;
    const isCpfValid = params.cpf.match(cpfRegex) !== null;

    return isEmailValid && isCpfValid;
}

export const extractUserParams = (body) => {
    return {
        name: body.name,
        email: body.email,
        age: body.age,
        gender: body.gender,
        phone: body.phone,
        cpf: body.cpf,
        rg: body.rg
    };
}