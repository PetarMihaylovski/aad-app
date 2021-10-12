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
        await axios.get('http://10.0.2.2:8000/api/shops', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                // handle success
                if (response.status === 200) {
                    shopStore.shops = response.data.map((shop) => {
                        return {
                            id: shop.id,
                            name: shop.name,
                            description: shop.description,
                            products: [],
                            imageURI: shop.image_url,
                            createdAt: shop.created_at
                        };
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export const shopStore = new ShopStore();