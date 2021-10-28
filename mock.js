require("jest-fetch-mock").enableMocks();

const mockedDispatch = jest.fn();
jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: mockedDispatch,

        }),
        useRoute: () => ({
            params: {
                // productOne: '<paramValue>',
                // productTwo: '<paramValue2>',
            }
        }),
        setOptions: () => jest.fn(),
        push: () => jest.fn()
    };
});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

global.BASE_URL = ''