import {action, makeObservable, observable} from "mobx";
import axios from "axios";

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

    addShop(shp) {
        // modeling the shop object as I want it!
        const shop = {
            id: shp.id,
            name: shp.name,
            description: shp.description,
            imageURI: shp.image_url,
            createdAt: shp.created_at
        };
        this.shops = [...this.shops, shp];
    }

    initShops(shops) {
        this.shops = shops;
    }

    async getShopsFromAPI() {
        await axios.get('http://10.0.2.2:8001/api/shops', {
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
                    return {
                        id: shop.id,
                        name: shop.name,
                        description: shop.description,
                        imageURI: shop.image_url,
                        createdAt: shop.created_at
                    };
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
        return await axios.get(`http://10.0.2.2:8001/api/shops/${shopID}/products`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        });
    }

    async saveShop(shop) {
        return await axios.post('http://10.0.2.2:8001/api/shops', shop);
    }

    async saveProductsForShop(products) {
        await axios.post('http://10.0.2.2:8001/api/products', products)
            .then((response) => {
                if (response.status !== 201) {
                    console.log('saving a product failed with status code: ', response.status);
                }
                console.log('product saved: ', response.data);
            })
            .catch((error) => {
                console.log('product error: ', error);
            });
    }
}

export const store = new Store();