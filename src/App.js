import React, { Component } from 'react';
import ListingContainer from './components/ListingContainer';
import NavButtons from './components/NavButtons';
import './App.css';

// Hardcoded subreddit listing URL
const baseUrl = 'https://www.reddit.com/r/motorcycles/new.json?sort=new';

// Main app container
class App extends Component {
  // define basic/starting state
  state = {
    itemList: [],
    after: '',
    before: ''
  };
  
  // Perform first Reddit API fetch on component mounting, with no pagination navigation implied
  componentDidMount() {
    this.updateSub(null, null);
  }
  
  // If component is going to be unmounted, cancel any pending async API call
  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }
  
  // React render
  render() {
    return (
      <div className="App">
        <ListingContainer itemList={this.state.itemList} />
        <NavButtons before={this.state.before} after={this.state.after} updateSub={this.updateSub.bind(this)} />
      </div>
    );
  };

  // The actual fetch function, returning a JS Promise that chains to yield the inner data of the Reddit API response 
  getSub = (url) => fetch(url)
    .then(response => response.json())
    .then(json => json.data);

  // Update the page based on current endpoint and pagination details
  updateSub(before, after) {
    // Set the URL based on base URL plus any pagination specification
    let url =
      baseUrl +
      (before ? '&before=' + before : '') +
      (after ? '&after=' + after : '');
    // Fetch the requested JSON and update state with the results; track async request so it can be
    // canceled if component is unmounted
    this._asyncRequest = this.getSub(url).then(
      data => {
        this._asyncRequest = null;
        let newState = {
          itemList: data.children,
          before: data.children[0].data.name,
          after: data.after
        }
        this.setState(newState);
        // Reset scroll position to page top
        window.scrollTo(0,0);
      }
    )
  }
}

export default App;
