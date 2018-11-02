import React, { Component } from 'react';
import phoneService from './lib/phoneService';
class App extends Component {

  state = {
    phones: [],
    isLoading: true,
  }

  componentDidMount() {
    this.update()
  }

  update = () => {
    this.setState({
      isLoading: true,
    });
    phoneService.getPhones()
    .then((result) => {
      this.setState({
        phones: result,
        isLoading: false,
      })
    })
    .catch((error) => {
      console.log(error);
    })
  } 

  handleClick = () => {
    phoneService.addPhone({
      brand: 'Xiaomi',
      model: 'Mi A2',
      spec: ['bueno', 'balato', 'bonito'],
      image: 'fsad',
    })
    .then((result) => {
      this.update();
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const { phones, isLoading } = this.state
    return (
      <div className="App">
        <button onClick={this.handleClick}>add Phone ching chao</button>
        { isLoading ? <h1>Loading....</h1> : phones.map((phone) => {
          return <div key={phone._id}>
            {phone.brand}
          </div>
        })}
      </div>
    );
  }
}

export default App;
