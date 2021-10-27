import React from "react";
import {render, fireEvent, act} from '@testing-library/react-native';
import LoginScreen from "../../src/screens/auth/Login";


it('renders login screen', function () {
    const {getByText, getByTestId} = render(
        <LoginScreen/>
    );
    getByText("Email");
    getByText("Password");
    getByTestId("Login.login");
    getByTestId("Login.register");
});

it('logs-in successfully', async () => {
    fetch.mockResponseOnce('ok');
    const {getByTestId} = render(
        <LoginScreen/>
    );
    fireEvent.changeText(getByTestId("Login.emailInput"), "example@email.com");
    fireEvent.changeText(getByTestId("Login.passwordInput"), "asdgasdas");
    fireEvent.press(getByTestId("Login.login"));

    expect(fetch.mock.calls).toMatchSnapshot();
});

it('shows error state',  () => {
    const {getByTestId, queryAllByText} = render(
        <LoginScreen/>
    );
    fireEvent.changeText(getByTestId("Login.emailInput"), "example@email.com");
    fireEvent.changeText(getByTestId("Login.passwordInput"), "short");
    fireEvent.press(getByTestId("Login.login"));

    expect(queryAllByText('Unprocessable data entered!').length).toBe(1);
});