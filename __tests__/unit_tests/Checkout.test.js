import React from "react";
import {render, fireEvent} from '@testing-library/react-native';
import CheckoutScreen from "../../src/screens/view_screens/CheckoutScreen";


/**
 * Man, react native unit testing is so complicated
 */
const mockedNavigate = jest.fn();

const product = {
    name: "First Product",
    price: "7.99",
    id: 5,
};

jest.mock('@react-navigation/native', () => (
    {
        useNavigation: () => ({navigate: mockedNavigate}),
        useRoute: () => ({
            params: {
                orderedProducts: [product],
                shop: {name: 'TestName'}
            }
        })
    }));

it('useEffect hook test', function () {
    const {queryAllByText} = render(
        <CheckoutScreen/>
    );
    // adds the euro sign in front
    const price = (price) => '\u20AC' + ' ' + price;

    expect(queryAllByText(product.name).length).toBe(1);

    //basically verifies that the ordered product is the only product that is on the screen
    expect(queryAllByText(`Total Order Price: ${price(product.price)}`).length).toBe(1);
});