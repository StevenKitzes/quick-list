import React, { Component } from 'react';
import ListingContainer from './components/ListingContainer';
import NavButtons from './components/NavButtons';
import './App.css';

const baseUrl = 'https://www.reddit.com/r/motorcycles/new.json?sort=new';

// Main app
class App extends Component {
  state = {
    itemList: [],
    last: '',
    next: ''
  };
  
  componentWillMount() {
    this._asyncRequest = this.updateSub(null, null);
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
        <NavButtons last={this.state.last} next={this.state.next} updateSub={this.updateSub.bind(this)} />
      </div>
    );
  };

  getSub = (url) => fetch(url)
    .then(response => response.json())
    .then(json => json.data);

  updateSub(before, after) {
    let url =
      baseUrl +
      (before ? '&before=' + before : '') +
      (after ? '&after=' + after : '');
    this.getSub(url).then(
      data => {
        this._asyncRequest = null;
        this.setState({
          itemList: data.children,
          before: data.last,
          next: data.after
        });
      }
    )
  }
}

export default App;
