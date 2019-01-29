import React, { Component } from 'react';
import ListingContainer from './components/ListingContainer'
import './App.css';


// Main app
class App extends Component {
  state = {
    itemList: [],
    last: null,
    next: null
  };
  
  componentWillMount() {
    this._asyncRequest = this.getSub().then(
      data => {
        this._asyncRequest = null;
        this.setState({
          itemList: data.children,
          before: data.last,
          next: data.after
        });
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

  getSub = () => fetch('https://www.reddit.com/r/motorcycles/new.json?sort=new')
    .then(response => response.json())
    .then(json => json.data);
}

export default App;
