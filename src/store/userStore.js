import {action, makeObservable, observable} from "mobx";
import axios from "axios";

/**
 * Centralized store for the user data
 * For specific references see MobX code docs
 */
class UserStore {
    user = {};
    token = null;

    constructor() {
        makeObservable(this, {
            user: observable,
            token: observable,
            restoreSession: action,
            deleteSession: action,
            login: action,
            register: action,
            handleLogin: action
        });
    }

    /**
     * Adds the session params held in the secure storage
     * @param user
     * @param token
     */
    restoreSession({user, token}) {
        this.user = user;
        this.token = token;
    }

    /**
     * clears the current session
     */
    deleteSession() {
        this.user = {};
        this.token = null;
    }

    /**
     * verifies the provided credentials with the API
     * and if successful token and user data is returned
     * thus user is authenticated
     * @param credentials
     */
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

    /**
     * Registers and authenticates a user
     */
    async register(credentials) {
        const form = new FormData();
        form.append("username", credentials.username);
        form.append("email", credentials.email);
        form.append("password", credentials.password);
        form.append("address", 'empty'); //TODO: temp solution
        form.append("postal", 'empty');

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

    /**
     * helper function to authenticate a user
     * @param response
     */
    handleLogin(response) {
        userStore.token = response.data.token;
        userStore.user = {
            email: response.data.user.email,
            id: response.data.user.id,
            updatedAt: response.data.user.updated_at
        };
    };
}

export const userStore = new UserStore();