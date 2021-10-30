import React from "react";
import {render, fireEvent} from '@testing-library/react-native';
import ProductCard from "../../src/components/view_components/ProductCard";

const product = {
    "id": 3,
    "name": "Nice T-Shirt",
    "price": "17,59",
    "images": [{
        path: "https://i.picsum.photos/id/774/100/100.jpg?hmac=ecKifXlZM3csAuXkIO2A1NYGhUlnE3q_ZUz3Vf74BK4",
    },]
};

it('renders card successfully', function () {
    const handleAddToShoppingCart = jest.fn();
    const {getByText} = render(
        <ProductCard product={product} handleAddToShoppingCart={handleAddToShoppingCart}/>
    );
    // adds the euro sign in front
    const price = (price) => '\u20AC' + ' ' + price;
    getByText(product.name);
    getByText(price(product.price));
});

it('cart icon is clickable', function () {
    const handleAddToShoppingCart = jest.fn();
    const {getByTestId} = render(
        <ProductCard product={product} handleAddToShoppingCart={handleAddToShoppingCart}/>
    );
    fireEvent.press(getByTestId("PC.button"));
    expect(handleAddToShoppingCart.mock.calls.length).toBe(1);
});