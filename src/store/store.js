import {action, makeObservable, observable} from "mobx";
import axios from "axios";
import './globalVariables';


class Store {
    shops = [];

    constructor() {
        makeObservable(this, {
            shops: observable,
            addShop: action,
            getShopsFromAPI: action,
            initShops: action,
        });
    }

    addShop(shop) {
        this.shops = [...this.shops, this.remodeledShop(shop)];
    }

    initShops(shops) {
        this.shops = shops;
    }

    // modeling the shop object as I want it!
    remodeledShop = (shop) => {
        return {
            id: shop.id,
            name: shop.name,
            description: shop.description,
            imageURI: shop.image_url,
            createdAt: shop.created_at
        };
    }

    async getShopsFromAPI() {
        await axios.get(`${BASE_URL}/api/shops`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                // handle success
                if (response.status !== 200) {
                    console.log("API responded with status code: ", response.status);
                }
                const shops = response.data.map((shop) => {
                    return this.remodeledShop(shop);
                });
                store.initShops(shops);
            })
            .catch((error) => {
                //TODO: handle the error appropriately
                console.log(error);
            });
    }

    // function is not async because
    async fetchProductsForShop(shopID) {
        return await axios.get(`${BASE_URL}/api/shops/${shopID}/products`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        });
    }

    async saveShop(shop) {
        const form = new FormData();

        form.append("image_url",    {
            uri: shop.image.uri,
            type: 'image/jpeg',
            name: 'store_image.jpg',
        });
        form.append("user_id", shop.user_id);
        form.append("name", shop.name);
        form.append("description", shop.description);

        return await axios.post(`${BASE_URL}/api/shops`, form, {
            headers: {
                'Content-type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        });
    }

    async saveProductsForShop(products) {
        await axios.post(`${BASE_URL}/api/products`, products)
            .then((response) => {
                if (response.status !== 201) {
                    console.log('saving a product failed with status code: ', response.status);
                }
                console.log('products saved!');
            })
            .catch((error) => {
                console.log('product error: ', error);
            });
    }
}

export const store = new Store();