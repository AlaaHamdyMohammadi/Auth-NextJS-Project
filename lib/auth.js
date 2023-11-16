import {hash, compare} from 'bcryptjs';

export async function hashPassword(password){
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
}

// Compare it allaws us to find out if plaintext password matches a hashedPassword

export async function verifyPassword(password, hashedPassword){
    const isValid = await compare(password, hashedPassword); // return boolean
    return isValid;
}