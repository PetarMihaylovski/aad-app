export const emailValidator = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //returns true if email is valid, returns false otherwise
    return !(!email || !re.test(email));
}

export const passwordValidator = (password) => {
    // true if password is correct false otherwise
    return !(!password || password.length < 6);
}

export const usernameValidator = (username) => {
    return true;
}

export const productValidator = (fields) => {
    // check if user has entered data in all the fields
    return !(!fields.name || !fields.price || !fields.stock || !fields.category);
};