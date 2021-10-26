import {action, makeObservable, observable} from "mobx";
import axios from "axios";
import './globalVariables';
import {userStore} from "./userStore";

/**
 * Centralized store for everything shop related
 * For specific references see MobX code docs
 */
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

    // adds a new shop to the existing array
    addShop(shop) {
        this.shops = [...this.shops, this.remodeledShop(shop)];
    }

    // initializes the shops from the initial fetch
    initShops(shops) {
        this.shops = shops;
    }

    // helper method that remodels the API response
    // to a consistent entity
    remodeledShop = (shop) => {
        return {
            id: shop.id,
            name: shop.name,
            description: shop.description,
            imageURI: shop.image_url,
            createdAt: shop.created_at
        };
    }

    /**
     * Parallel fetching of the initial shops
     */
    async getShopsFromAPI() {
        axios.get(`${BASE_URL}/api/shops`, {
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

    /**
     * Parallel fetching for the shop's products
     * They are fetched every time a user opens the products page
     * @param shopID ...
     * @returns promise with the shops or the error
     */
    async fetchProductsForShop(shopID) {
        return axios.get(`${BASE_URL}/api/shops/${shopID}/products`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        });
    }

    /**
     * Not really synchronous, but behaves like it
     * Post a new shop and returns a promise with success/error
     *
     * User needs to be authenticated to call this function
     * @param shop the shop data
     */
    async saveShop(shop) {
        // form data is used so the image file can be uploaded as well
        // body does not allow to attach files (such as the image)
        const form = new FormData();
        form.append("image_url", {
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
                'Accept': 'application/json',
                "Authorization": `Bearer ${userStore.token}`,
            }
        });
    }

    /**
     * Send a request for every product added to a given shop
     * @param products
     */
    async saveProductsForShop(products) {
        products.forEach(product => {
            const form = new FormData();
            //shop_id and user_id are not provided since the API can get them
            form.append("name", product.name);
            form.append("price", product.price);
            form.append("stock", product.stock);
            form.append("category", product.category);

            // dynamically appends maximum of 3 images to the form body
            product.images.forEach((image, index) => {
                let indx = '';
                if (index === 0) {
                    indx = 'One';
                } else if (index === 1) {
                    indx = 'Two';
                } else {
                    indx = 'Three';
                }
                form.append(`image${indx}`, image);
            });

            axios.post(`${BASE_URL}/api/product`, form, {
                headers: {
                    'Content-type': 'multipart/form-data',
                    "Authorization": `Bearer ${userStore.token}`,
                }
            });
        });
    }

    /**
     * Places an order
     * @param order
     */
    async placeOrder(order){
        return axios.post(`${BASE_URL}/api/orders`, order, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer ${userStore.token}`,
            }
        });
    }
}

export const store = new Store();