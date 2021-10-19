export const emailValidator = (email) => {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //correct format of an email
    //returns true if email is valid, returns false otherwise
    return !(!email || !regExp.test(email));
}

export const passwordValidator = (password) => {
    // true if password is correct false otherwise
    return !(!password || password.length < 6);
}

export const usernameValidator = (username) => {
    const regExp = /^[a-zA-Z\-_]+$/;
    return !(!username || !regExp.test(username));
}

export const productValidator = (fields) => {
    // check if user has entered data in all the fields
    return !(!fields.name || !fields.price || !fields.stock || !fields.category);
};