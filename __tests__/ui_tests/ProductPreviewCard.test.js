import React from "react";
import {render, fireEvent} from '@testing-library/react-native';
import ProductPreviewCard from "../../src/components/create_components/ProductPreviewCard";

const product = {
    "id": 3,
    "name": "Nice T-Shirt",
    "price": "17,59",
    "imageURI": "https://i.picsum.photos/id/774/100/100.jpg?hmac=ecKifXlZM3csAuXkIO2A1NYGhUlnE3q_ZUz3Vf74BK4"
};

it('renders the product correctly', () => {
    const {queryAllByText} = render(
        <ProductPreviewCard product={product}/>
    );
    expect(queryAllByText(product.name).length).toBe(1);
});

it('product preview component has increment/decrement buttons', () => {
    const increment = jest.fn();
    const decrement = jest.fn();

    const {getByTestId} = render(
        <ProductPreviewCard product={product}
                            count={3}
                            handleIncrement={increment}
                            handleDecrement={decrement}
        />
    );
    fireEvent.press(getByTestId("PPC.increment"));
    fireEvent.press(getByTestId("PPC.decrement"));
    expect(increment.mock.calls.length).toBe(1);
    expect(decrement.mock.calls.length).toBe(1);
});

it('product preview component has edit/delete buttons', () => {
    const {getByTestId} = render(
        <ProductPreviewCard product={product} controlButtons/>
    );
    fireEvent.press(getByTestId("PPC.edit"));
    fireEvent.press(getByTestId("PPC.delete"));
});

it('product preview component has edit/delete buttons and increment button is not rendered', () => {
    const increment = jest.fn();
    const {getByTestId, queryByTestId} = render(
        <ProductPreviewCard product={product} controlButtons handleIncrement={increment}/>
    );
    fireEvent.press(getByTestId("PPC.edit"));
    fireEvent.press(getByTestId("PPC.delete"));
    expect(queryByTestId("PPC.increment")).toBe(null);
    expect(queryByTestId("PPC.decrement")).toBe(null);
});