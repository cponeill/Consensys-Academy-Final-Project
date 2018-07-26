module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // Publishing: 0xb710f74ba05c959af13b8e9516a5c66327994e69
  // https://immense-woodland-93542.herokuapp.com/  
  networks: {
  	development: {
  		host: '127.0.0.1',
  		port: '8545',
  		network_id: '*',
  		//gas: 0xfffffffff,
      //gasPrice: 68719476735,
  	}
  }
};