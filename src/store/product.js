import {action, computed, makeObservable, observable} from "mobx";
import axios from "axios";

class ProductStore {
    // key: shopID, value: array of products
    shopProductsMap = new Map();

    constructor() {
        makeObservable(this, {
            products: observable,
            addShop: action,
            getShopsFromAPI: action,
            addProductToShop: action,
            getProductsByShopID: computed
        });
    }

    getProductsByShopID(shopID) {
        return this.shopProductsMap.get(shopID);
    }

    addProductToShop(shopID, product) {
        this.shopProductsMap.set(shopID, [...this.shopProductsMap.get(shopID), product]);
    }

    initProductsForShop(shopID, products) {
        this.shopProductsMap.set(shopID, [...products])
    }

    async fetchProductsForShop(shopID) {
        await axios.get(`http://10.0.2.2:8000/api/shops/${shopID}/products`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                // handle success
                if (response.status === 200) {
                    productStore.initProductsForShop(shopID, response.data.map((product) => {
                        return {
                            id: product.id,
                            shopID: product.shopID,
                            name: product.name,
                            price: product.price,
                            stock: product.stock,
                            createdAt: product.created_at
                        };
                    }));
                }
            })
            .catch((error) => {
                //TODO: handle the error appropriately
                console.log(error);
            });
    }
}

export const productStore = new ProductStore();