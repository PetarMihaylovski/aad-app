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
        await axios.get('http://10.0.2.2:8000/api/shop', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                // handle success
                if (response.status === 200) {
                    shopStore.shops = response.data;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export const shopStore = new ShopStore();