import {action, makeObservable, observable} from "mobx";
import axios from "axios";

class ShopStore {
    shops = [];

    constructor() {
        makeObservable(this, {
            shops: observable,
            addShop: action,
            getShopsFromAPI: action
        });
    }

    addShop(shop) {
        this.shops = [...this.shops, shop];
    }

    async getShopsFromAPI() {
        await axios.get('(http://10.0.2.2:8000/api/shop')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const shopStore = new ShopStore();