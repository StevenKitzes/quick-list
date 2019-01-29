import React, { Component } from 'react';
import ListingContainer from './components/ListingContainer'
import './App.css';

const getList = () => fetch('https://www.reddit.com/r/motorcycles/new.json?sort=new')
  .then(response => response.json())
  .then(json => json.data.children)

// Main app
class App extends Component {
  state = {
    itemList: []
  };

  componentWillMount() {
    this._asyncRequest = getList().then(
      itemList => {
        this._asyncRequest = null;
        this.setState({itemList});
      }
    );
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    return (
      <div className="App">
        <ListingContainer itemList={this.state.itemList} />
        {/* <NavButtons last={this.state.last} next={this.state.next} /> */}
      </div>
    );
  };
}

export default App;
