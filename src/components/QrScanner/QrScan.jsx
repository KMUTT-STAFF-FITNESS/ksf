import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import SelectMachine from "./SelectMachine";


class QrScan extends Component {
  state = {
    result: ''
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <div class="title">
                <p className="text-gray-700 text-lg font-bold">How to play</p>
            </div>

        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>

        <div class="text">
                <p className="text-gray-700 text-lg font-bold">หรือ</p>
         </div>
         <SelectMachine />
      </div>
    )
  }
}

export default QrScan;