# Expo + React Native Hybrid application

## How to run the project
0) make sure you have latest node.js version
1) open terminal and execute ``` npm install --global expo-cli```
2) ```npm install``` to install dependencies
3) open an android/ios emulator
4) ```expo start``` to start the project
5) press ```a``` in terminal to run the project on android emulator

#### Make sure you have run the API and the database's docker-compose file, in order to have access to the backend. (explained in the API's README).
#### If the application does not connect straight away to the API, open ```src/store/globalVariables.js``` and remove the port in the BASE_URL.
#### Make sure you have some photo on your emulator, since you will need them 