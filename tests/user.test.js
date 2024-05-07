import { createUser, validateUser } from '../src/controllers/user.js';
import User from '../src/models/user.js';

export { createUser, validateUser, User };

describe('createUser', () => {
    test('should create a user with valid parameters', async () => {

        const userData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            age: 30,
            gender: 'male',
            phone: '123456789',
            cpf: '12345678900',
            rg: '1234567'
        };


        const saveMock = jest.fn(() => Promise.resolve(userData));

        jest.spyOn(User, 'create').mockImplementation(() => ({ save: saveMock }));

        const user = await createUser(userData);

        expect(user).toEqual(userData);
        expect(saveMock).toHaveBeenCalledTimes(1);
    });

    test('should not create a user with invalid parameters', async () => {
        const invalidUserData = {
            name: 'Invalid User',
            age: 25,
            gender: 'female',
            phone: '987654321',
            rg: '7654321'
        };

        const user = await createUser(invalidUserData);

        expect(user).toBe(null);
    });
});