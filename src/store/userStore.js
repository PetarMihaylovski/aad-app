import {action, makeObservable, observable} from "mobx";
import axios from "axios";

class UserStore {
    user = {};
    token = null;

    constructor() {
        makeObservable(this, {
            user: observable,
            token: observable,
            restoreSession : action,
            deleteSession : action,
            login: action,
            register : action,
            handleLogin : action
        });
    }

    restoreSession({user, token}){
        this.user = user;
        this.token = token;
    }

    deleteSession() {
        this.user = {};
        this.token = null;
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
                this.handleLogin(response);
            })
            .catch((error) => {
                console.log("error while logging in: ", error);
            });
    }

    async register(credentials) {
        const form = new FormData();
        form.append("username", credentials.username);
        form.append("email", credentials.email);
        form.append("password", credentials.password);

        await axios.post(`${BASE_URL}/api/register`, form, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.status !== 201) {
                console.log("API responded with status code: ", response.status);
            }
            this.handleLogin(response);
        })
            .catch((error) => {
                console.log("error while registering: ", error);
            });
    }

    handleLogin(response){
        userStore.token = response.data.token;
        userStore.user = {
            email: response.data.user.email,
            id: response.data.user.id,
            updatedAt: response.data.user.updated_at
        };
    };
}

export const userStore = new UserStore();