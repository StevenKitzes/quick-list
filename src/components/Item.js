import React, {Component} from 'react';

// Some hardcoded values for retrieving comments for a particular item
const baseUrl = 'https://www.reddit.com/r/motorcycles/comments/';
const urlTail = '.json';

// React component representing an actual item
class Item extends Component {
    // Define/set initial state
    state = {
        comments: null,
        id: '',
        toggled: false
    }

    // Update the state when the component has mounted
    componentDidMount() {
        this.setState({id: this.props.itemData.id});
    }
    
    // React render
    render() {
        // Destructure data from props
        let {thumbnail, title} = this.props.itemData;
        // Simple var to track whether a thumbnail exists for this item
        let hasThumb = !(thumbnail === 'self' || thumbnail === 'nsfw');
        return (
            <div className="item" onClick={() => this.toggleComments(this.state.id)}>
                <div className="item-header">
                    <img className="item-thumbnail" src={hasThumb ? thumbnail: 'placeholder.png'}
                        alt={hasThumb ? 'Item thumbail' : 'Placeholder thumbnail'} />
                    <h3 className="item-title">{title}</h3>
                </div>
                {/* For user clarity, display comments if they exist, or display note that no comments exist */}
                <ul>{this.state.comments ? (
                    this.state.comments.length ?
                        this.state.comments.map((comment) => {
                            return this.renderCommentsRecursive(comment);
                        }) :
                        [<h4>No comments to display for this item.</h4>] /* If comment item exists but empty, report that */
                    ) :
                    [] /* If comments doesn't exist, pass nothing back as JSX */
                }</ul>
            </div>
        );
    };

    // Display this comment, and if it has children, recursively display them as well
    renderCommentsRecursive(comment) {
        let body = <li className="comment"><span className="author">{comment.data.author}:</span> {comment.data.body}</li>;
        let children = [];
        if(comment.data.replies) {
            if(comment.data.replies.data.children.length) {
                children = <ul>{comment.data.replies.data.children.map((child) => {
                    return this.renderCommentsRecursive(child);
                })}</ul>;
            }
        }
        
        return (
            [body, children]
        );
    }
    
    // On item click, populate and expand comment section
    toggleComments = (id) => {
        if(this.state.toggled) {
            this.setState({
                comments: null,
                toggled: !this.state.toggled
            });
        }
        else {
            let fetchUrl = baseUrl + id + urlTail;
            console.log('url: ' + fetchUrl);
            fetch(fetchUrl)
                .then(response => {
                    let responseJson = response.json();
                    return responseJson;
                })
                .then(json => {
                    this.setState({
                        comments: json[1].data.children,
                        toggled: !this.state.toggled
                    });
                });
        }
    }
}

export default Item;