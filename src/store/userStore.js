import {action, makeObservable, observable} from "mobx";
import './globalVariables';
import axios from "axios";

class UserStore {
    user = {};
    token = null;
    isAuthenticated = false;

    constructor() {
        makeObservable(this, {
            user: observable,
            token: observable,
            isAuthenticated : observable,
            login : action,
            authenticated: action
        });
    }

    authenticated(isAuthenticated){
        this.isAuthenticated = isAuthenticated;
    }

    async login(credentials) {
        const form = new FormData();
        form.append("email", credentials.email);
        form.append("password", credentials.password);

        await axios.post(`${BASE_URL}/api/login`, form, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status !== 201) {
                    console.log("API responded with status code: ", response.status);
                }
                userStore.token = response.data.token;
                userStore.user = {
                    email: response.data.user.email,
                    id: response.data.user.id,
                    updatedAt: response.data.user.updated_at
                };
                userStore.authenticated(true);
            })
            .catch((error) => {
                console.log("error while logging in: ", error);
            });
    }
}

export const userStore = new UserStore();