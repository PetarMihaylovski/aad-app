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

    addShop(shop) {
        this.shops = [...this.shops, shop];
    }

    initShops(shops) {
        this.shops = shops;
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
        return await axios.get(`http://10.0.2.2:8000/api/shops/${shopID}/products`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        });
    }

    async saveShop(shop) {
        console.log('shop: ', shop);
        await axios.post('http://10.0.2.2:8000/api/shops', shop)
            .then((response) => {
                if (response.status !== 201) {
                    console.log('saving a shop failed with status code: ', response.status);
                }
                console.log('shop saved successfully: ', response.data);
                this.addShop(response.data);
                return response.data;
            })
            .catch((error) => {
                console.log('shop error: ', error);
            });
    }

    saveProductsForShop(products) {
        console.log('products: ', products);
        axios.post('http://10.0.2.2:8000/api/products', {products: products})
            .then((response) => {
                console.log("Products Saved Successfully");
            })
            .catch((error) => {
                console.log('product error: ', error);
            });
    }
}

export const store = new Store();