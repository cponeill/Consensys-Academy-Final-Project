# Consensys Academy Final Project

This project is an implementation of a simple React app that interacts with the Ethereum testnet chain Rinkeby. The user enters text into a form, clicks the `send transaction` button, and uses `Metamask to submit` the transaction. Once that is complete, the app will output some text underneath the form informing the user the text was successfully submitted to the blockchain.


## Running the app successfully

* __What do I need to run this app locally on my machine?__

    Clone the repo to your machine and follow the installation instructions below. The application is incredibly simple to use and should be very straight forward.

## Installation

1. Install Truffle and Ganache globally.
    ```javascript
    $ npm install -g truffle
    $ npm install -g ganache-cli
    ```

2. Clone the repo, cd into the directory, and install node modules
    ```javascript
    $ git clone https://github.com/cponeill/Consensys-Academy-Final-Project.git
    $ cd Consensys-Academy-Final-Project/
    $ npm install
    ```

3. Open another terminal and run the Ganache blockchain (remember to set up your seed phase in Metamask)
    ```javascript
    $ ganache-cli
    ```

4. Compile and migrate the smart contracts.
    ```javascript
    $ truffle compile
    $ truffle migrate
    ```

5. Run the tests to make sure the contract is working correctly
    ```javascript
    $ truffle test
    ```

6. Serve a local instance of the application on your machine
    ```javascript
    $ npm start
    The server will launch the app at http://localhost:3000
    ```

7. Make sure Metamask is set to a private network pointing to localhost 8545

8. Use the app.

* __Where can I find more documentation?__

    This box is a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
