import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import PublishingContract from '../build/contracts/Publishing.json'
import getWeb3 from './utils/getWeb3'
import ipfs from './utils/ipfs'
import buffer from 'buffer/'

class CreateHash extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ipfs: null,
      lyrics: '',
      transaction: '',
      result: '',
      web3: null
    }

    this.handleClick = this.handleClick.bind(this)
  }


  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      // this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  handleClick(event) {
    event.preventDefault()

    const contract = require('truffle-contract')
    const publishing = contract(PublishingContract)
    publishing.setProvider(this.state.web3.currentProvider)

    var publishingInstance

    this.state.web3.eth.getAccounts((error, account) => {
      publishing.deployed().then((instance) => {
        publishingInstance = instance;

        return publishingInstance.saveText(this.state.lyrics, {from: account[0]})
      }).then( async (result) => {
        this.setState({
          transaction: "Here is the transction number: " + result.tx,
          isTrue: await publishingInstance.checkText(this.state.lyrics).then((result) => { return "The results were saved to the blockchain? " + result.toString() }),
          result: "Thank you for sending text to the Ethereum Blockchain.",
        })
      }).then( async (result) => {
          await ipfs.add(Buffer.from(this.state.lyrics, 'hex'), (error, ipfsHash) => {
            this.setState({
              ipfs: "This is your IPFS hash: " + ipfsHash[0].hash
            })
            console.log(this.state.ipfs)
          })
      })
    })
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Enter Text to Send to the Blockchain</label>
          <input />
          <Button content='Send Transaction' primary icon='plus' onClick={this.handleClick} /><br />
          <div>{this.state.transaction}</div>
          <div>{this.state.isTrue}</div>
          <div>{this.state.ipfs}</div>
          <div>{this.state.result}</div>
        </Form.Field>
      </Form>
    )
  }
}

export default CreateHash
