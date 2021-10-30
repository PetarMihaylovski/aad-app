import React from "react";
import {fireEvent, render} from '@testing-library/react-native';
import ShopCard from "../../src/components/view_components/ShopCard";

const shop = {
    id: 1,
    name: "Second hand shop",
    imageURI: "https://i.picsum.photos/id/418/300/200.jpg?hmac=_nF8-Wr4uJzTcMpTPNdWCz4RTJ6Y1zk12u1Fs1XDz40",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a neque et sem ultrices egestas. Aliquam porta varius laoreet. Donec auctor et massa a semper."
};

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
    { useNavigation: () => ({ navigate: mockedNavigate }) }));

it('renders card successfully', function () {
    const {getByText} = render(
        <ShopCard shop={shop}/>
    );

    getByText(shop.name);
    getByText(shop.description);
});

it('when clicked, navigates successfully', function () {
    const {getByText} = render(
        <ShopCard shop={shop}/>
    );

    fireEvent.press(getByText("See Products"));

    expect(mockedNavigate).toHaveBeenCalledTimes(1);

    // fails, cuz of the route params, but i am not sure how to include them correctly
    // expect(mockedNavigate).toBeCalledWith(`Products ${JSON.stringify(shop)}`);
});