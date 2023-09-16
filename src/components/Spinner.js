import React, { Component } from 'react'
import loading from "./loading.gif"

export class Spinner extends Component {
  render() {
    return (
      <div
        className="text-center">
        <img src={loading} width="40" 
       height="40" alt="loading" />
      </div>
    )
  }
}

export default Spinner
